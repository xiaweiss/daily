import {
  Fragment,
  ref,
  h,
  reactive,
  Teleport,
  defineComponent,
  provide,
  VNodeChild,
  InjectionKey,
  ExtractPropTypes,
  renderSlot,
  Ref,
  PropType,
  CSSProperties
} from 'vue'
import { createId } from 'seemly'
import { ExtractPublicPropTypes, omit } from '../../_utils'
import { useConfig, useTheme } from '../../_mixins'
import type { ThemeProps } from '../../_mixins'
import MessageEnvironment from './MessageEnvironment'
import { MessageTheme } from '../styles'

export interface MessageOptions {
  duration?: number
  closable?: boolean
  keepAliveOnHover?: boolean
  icon?: () => VNodeChild
  onClose?: () => void
  onLeave?: () => void
  onAfterLeave?: () => void
}

type ContentType = string | (() => VNodeChild)

export interface MessageApiInjection {
  info: (content: ContentType, options?: MessageOptions) => MessageReactive
  success: (content: ContentType, options?: MessageOptions) => MessageReactive
  warning: (content: ContentType, options?: MessageOptions) => MessageReactive
  error: (content: ContentType, options?: MessageOptions) => MessageReactive
  loading: (content: ContentType, options?: MessageOptions) => MessageReactive
  destroyAll: () => void
}

export const messageApiInjectionKey: InjectionKey<MessageApiInjection> =
  Symbol('messageApi')

export interface MessageReactive {
  content?: ContentType
  duration?: number
  closable?: boolean
  keepAliveOnHover?: boolean
  icon?: () => VNodeChild
  onClose?: () => void
  destroy: () => void
}

interface PrivateMessageReactive extends MessageReactive {
  key: string
}

interface PrivateMessageRef extends MessageReactive {
  key: string
  hide: () => void
}

export type MessageProviderInst = MessageApiInjection

const messageProviderProps = {
  ...(useTheme.props as ThemeProps<MessageTheme>),
  to: [String, Object] as PropType<string | HTMLElement>,
  duration: {
    type: Number,
    default: 3000
  },
  keepAliveOnHover: Boolean,
  max: Number,
  placement: {
    type: String as PropType<
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    >,
    default: 'top'
  },
  closable: Boolean,
  containerStyle: [String, Object] as PropType<string | CSSProperties>
}

export type MessageProviderProps = ExtractPublicPropTypes<
  typeof messageProviderProps
>

type MessageProviderSetupProps = ExtractPropTypes<typeof messageProviderProps>

export const messageProviderInjectionKey: InjectionKey<{
  props: MessageProviderSetupProps
  mergedClsPrefixRef: Ref<string>
}> = Symbol('messageProvider')

export default defineComponent({
  name: 'MessageProvider',
  props: messageProviderProps,
  setup (props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const messageListRef = ref<PrivateMessageReactive[]>([])
    const messageRefs = ref<{ [key: string]: PrivateMessageRef }>({})
    const api: MessageApiInjection = {
      info (content: ContentType, options?: MessageOptions) {
        return create(content, { ...options, type: 'info' })
      },
      success (content: ContentType, options?: MessageOptions) {
        return create(content, { ...options, type: 'success' })
      },
      warning (content: ContentType, options?: MessageOptions) {
        return create(content, { ...options, type: 'warning' })
      },
      error (content: ContentType, options?: MessageOptions) {
        return create(content, { ...options, type: 'error' })
      },
      loading (content: ContentType, options?: MessageOptions) {
        return create(content, { ...options, type: 'loading' })
      },
      destroyAll
    }
    provide(messageProviderInjectionKey, {
      props,
      mergedClsPrefixRef
    })
    provide(messageApiInjectionKey, api)
    function create (content: ContentType, options = {}): MessageReactive {
      const key = createId()
      const messageReactive = reactive({
        ...options,
        content,
        key,
        destroy: () => {
          messageRefs.value[key].hide()
        }
      })
      const { max } = props
      if (max && messageListRef.value.length >= max) {
        messageListRef.value.shift()
      }
      messageListRef.value.push(messageReactive)
      return messageReactive
    }
    function handleAfterLeave (key: string): void {
      messageListRef.value.splice(
        messageListRef.value.findIndex((message) => message.key === key),
        1
      )
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete messageRefs.value[key]
    }
    function destroyAll (): void {
      Object.values(messageRefs.value).forEach((messageInstRef) => {
        messageInstRef.hide()
      })
    }
    return Object.assign(
      {
        mergedClsPrefix: mergedClsPrefixRef,
        messageRefs,
        messageList: messageListRef,
        handleAfterLeave
      },
      api
    )
  },
  render () {
    return (
      <>
        {renderSlot(this.$slots, 'default')}
        {this.messageList.length ? (
          <Teleport to={this.to ?? 'body'}>
            <div
              class={[
                `${this.mergedClsPrefix}-message-container`,
                `${this.mergedClsPrefix}-message-container--${this.placement}`
              ]}
              key="message-container"
              style={this.containerStyle}
            >
              {this.messageList.map((message) => {
                return (
                  <MessageEnvironment
                    ref={
                      ((inst: PrivateMessageRef) => {
                        if (inst) {
                          this.messageRefs[message.key] = inst
                        }
                      }) as () => void
                    }
                    internalKey={message.key}
                    onInternalAfterLeave={this.handleAfterLeave}
                    {...omit(message, ['destroy'], undefined)}
                    duration={
                      message.duration === undefined
                        ? this.duration
                        : message.duration
                    }
                    keepAliveOnHover={
                      message.keepAliveOnHover === undefined
                        ? this.keepAliveOnHover
                        : message.keepAliveOnHover
                    }
                    closable={
                      message.closable === undefined
                        ? this.closable
                        : message.closable
                    }
                  />
                )
              })}
            </div>
          </Teleport>
        ) : null}
      </>
    )
  }
})
