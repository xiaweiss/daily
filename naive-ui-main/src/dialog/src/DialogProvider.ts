import {
  defineComponent,
  Fragment,
  ref,
  h,
  ExtractPropTypes,
  provide,
  PropType,
  reactive,
  InjectionKey,
  Ref,
  CSSProperties
} from 'vue'
import { createId } from 'seemly'
import { omit } from '../../_utils'
import type { ExtractPublicPropTypes, Mutable } from '../../_utils'
import DialogEnvironment, { exposedDialogEnvProps } from './DialogEnvironment'
import { useClicked, useClickPosition } from 'vooks'

export type DialogOptions = Mutable<
Omit<
Partial<ExtractPropTypes<typeof exposedDialogEnvProps>>,
'internalStyle'
> & {
  style?: string | CSSProperties
}
>

export type DialogReactive = {
  readonly key: string
  readonly destroy: () => void
} & DialogOptions

// FIXME
// If style is used as CSSProperties, typescript 4.4.2 will throw tons of errors
// Fxxx
type TypeSafeDialogReactive = DialogReactive & {
  style?: any
}

export interface DialogApiInjection {
  destroyAll: () => void
  create: (options: DialogOptions) => DialogReactive
  success: (options: DialogOptions) => DialogReactive
  warning: (options: DialogOptions) => DialogReactive
  error: (options: DialogOptions) => DialogReactive
  info: (options: DialogOptions) => DialogReactive
}

export const dialogApiInjectionKey: InjectionKey<DialogApiInjection> =
  Symbol('dialogApi')

export interface DialogProviderInjection {
  clickedRef: Ref<boolean>
  clickPositionRef: Ref<{ x: number, y: number } | null>
}

export const dialogProviderInjectionKey: InjectionKey<DialogProviderInjection> =
  Symbol('dialogProvider')

interface DialogInst {
  hide: () => void
}

export type DialogProviderInst = DialogApiInjection

const dialogProviderProps = {
  injectionKey: String,
  to: [String, Object] as PropType<string | HTMLElement>
}

export type DialogProviderProps = ExtractPublicPropTypes<
  typeof dialogProviderProps
>

export default defineComponent({
  name: 'DialogProvider',
  props: dialogProviderProps,
  setup () {
    const dialogListRef = ref<TypeSafeDialogReactive[]>([])
    const dialogInstRefs: Record<string, DialogInst> = {}
    function create (options: DialogOptions = {}): DialogReactive {
      const key = createId()
      const dialogReactive = reactive({
        ...options,
        key,
        destroy: () => {
          dialogInstRefs[`n-dialog-${key}`].hide()
        }
      })
      dialogListRef.value.push(dialogReactive)
      return dialogReactive
    }
    const typedApi = (
      ['info', 'success', 'warning', 'error'] as Array<
      'info' | 'success' | 'warning' | 'error'
      >
    ).map((type) => (options: DialogOptions): DialogReactive => {
      return create({ ...options, type })
    })

    function handleAfterLeave (key: String): void {
      const { value: dialogList } = dialogListRef
      dialogList.splice(
        dialogList.findIndex((dialog) => dialog.key === key),
        1
      )
    }

    function destroyAll (): void {
      Object.values(dialogInstRefs).forEach((dialogInstRef) =>
        dialogInstRef.hide()
      )
    }

    const api = {
      create,
      destroyAll,
      info: typedApi[0],
      success: typedApi[1],
      warning: typedApi[2],
      error: typedApi[3]
    }
    provide(dialogApiInjectionKey, api)
    provide(dialogProviderInjectionKey, {
      clickedRef: useClicked(64),
      clickPositionRef: useClickPosition()
    })
    return {
      ...api,
      dialogList: dialogListRef,
      dialogInstRefs,
      handleAfterLeave
    }
  },
  render () {
    return h(Fragment, null, [
      this.dialogList.map((dialog) =>
        h(
          DialogEnvironment,
          omit(dialog, ['destroy', 'style'], {
            internalStyle: dialog.style,
            to: this.to,
            ref: ((inst: DialogInst | null) => {
              if (inst === null) {
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                delete this.dialogInstRefs[`n-dialog-${dialog.key}`]
              } else {
                this.dialogInstRefs[`n-dialog-${dialog.key}`] = inst
              }
            }) as any,
            internalKey: dialog.key,
            onInternalAfterLeave: this.handleAfterLeave
          })
        )
      ),
      this.$slots.default?.()
    ])
  }
})
