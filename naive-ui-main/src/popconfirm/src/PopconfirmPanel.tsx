import {
  h,
  defineComponent,
  computed,
  inject,
  PropType,
  renderSlot,
  CSSProperties
} from 'vue'
import { NButton } from '../../button'
import { NBaseIcon } from '../../_internal'
import { WarningIcon } from '../../_internal/icons'
import { useLocale } from '../../_mixins'
import { keysOf } from '../../_utils'
import { popconfirmInjectionKey } from './interface'

export const panelProps = {
  positiveText: String,
  negativeText: String,
  showIcon: {
    type: Boolean,
    default: true
  },
  onPositiveClick: {
    type: Function as PropType<(e: MouseEvent) => void>,
    required: true
  },
  onNegativeClick: {
    type: Function as PropType<(e: MouseEvent) => void>,
    required: true
  }
} as const

export const panelPropKeys = keysOf(panelProps)

export default defineComponent({
  name: 'NPopconfirmPanel',
  props: panelProps,
  setup (props) {
    const { localeRef } = useLocale('Popconfirm')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { mergedClsPrefixRef, mergedThemeRef } = inject(
      popconfirmInjectionKey
    )!
    return {
      ...useLocale('Popconfirm'),
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: computed(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: { fontSize, iconSize, iconColor }
        } = mergedThemeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--font-size': fontSize,
          '--icon-size': iconSize,
          '--icon-color': iconColor
        }
      }),
      localizedPositiveText: computed(() => {
        return props.positiveText || localeRef.value.positiveText
      }),
      localizedNegativeText: computed(() => {
        return props.negativeText || localeRef.value.negativeText
      }),
      handlePositiveClick (e: MouseEvent) {
        props.onPositiveClick(e)
      },
      handleNegativeClick (e: MouseEvent) {
        props.onNegativeClick(e)
      }
    }
  },
  render () {
    const { mergedClsPrefix, $slots } = this
    const actionContentNode = $slots.action
      ? $slots.action()
      : this.negativeText === null && this.positiveText === null
        ? null
        : [
            this.negativeText !== null && (
            <NButton size="small" onClick={this.handleNegativeClick}>
              {{ default: () => this.localizedNegativeText }}
            </NButton>
            ),
            this.positiveText !== null && (
            <NButton
              size="small"
              type="primary"
              onClick={this.handlePositiveClick}
            >
              {{ default: () => this.localizedPositiveText }}
            </NButton>
            )
          ]
    return (
      <div style={this.cssVars as CSSProperties}>
        <div class={`${mergedClsPrefix}-popconfirm__body`}>
          {this.showIcon ? (
            <div class={`${mergedClsPrefix}-popconfirm__icon`}>
              {renderSlot($slots, 'icon', undefined, () => [
                <NBaseIcon clsPrefix={mergedClsPrefix}>
                  {{ default: () => <WarningIcon /> }}
                </NBaseIcon>
              ])}
            </div>
          ) : null}
          {renderSlot($slots, 'default')}
        </div>
        {actionContentNode ? (
          <div class={`${mergedClsPrefix}-popconfirm__action`}>
            {actionContentNode}
          </div>
        ) : null}
      </div>
    )
  }
})
