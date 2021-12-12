// use absolute path to make sure no circular ref of style
// this -> modal-index -> modal-style
import { h, defineComponent, PropType, ref, CSSProperties } from 'vue'
import NModal from '../../modal/src/Modal'
import { keep } from '../../_utils'
import NDialog, { dialogProps, dialogPropKeys } from './Dialog'

export const exposedDialogEnvProps = {
  ...dialogProps,
  internalStyle: [String, Object] as PropType<string | CSSProperties>,
  maskClosable: {
    type: Boolean,
    default: true
  },
  onPositiveClick: Function as PropType<
  (e: MouseEvent) => Promise<unknown> | unknown
  >,
  onNegativeClick: Function as PropType<
  (e: MouseEvent) => Promise<unknown> | unknown
  >,
  onClose: Function as PropType<() => Promise<unknown> | unknown>,
  onMaskClick: Function as PropType<(e: MouseEvent) => void>
} as const

export default defineComponent({
  name: 'DialogEnvironment',
  props: {
    ...exposedDialogEnvProps,
    internalKey: {
      type: String,
      required: true
    },
    to: [String, Object] as PropType<string | HTMLElement>,
    // private
    onInternalAfterLeave: {
      type: Function as PropType<(key: string) => void>,
      required: true
    }
  },
  setup (props) {
    const showRef = ref(true)
    function handleAfterLeave (): void {
      props.onInternalAfterLeave(props.internalKey)
    }
    function handlePositiveClick (e: MouseEvent): void {
      const { onPositiveClick } = props
      if (onPositiveClick) {
        void Promise.resolve(onPositiveClick(e)).then((result) => {
          if (result === false) return
          hide()
        })
      } else {
        hide()
      }
    }
    function handleNegativeClick (e: MouseEvent): void {
      const { onNegativeClick } = props
      if (onNegativeClick) {
        void Promise.resolve(onNegativeClick(e)).then((result) => {
          if (result === false) return
          hide()
        })
      } else {
        hide()
      }
    }
    function handleCloseClick (): void {
      const { onClose } = props
      if (onClose) {
        void Promise.resolve(onClose()).then((result) => {
          if (result === false) return
          hide()
        })
      } else {
        hide()
      }
    }
    function handleMaskClick (e: MouseEvent): void {
      const { onMaskClick, maskClosable } = props
      if (onMaskClick) {
        onMaskClick(e)
        maskClosable && hide()
      }
    }
    function hide (): void {
      showRef.value = false
    }
    function handleUpdateShow (value: boolean): void {
      showRef.value = value
    }
    return {
      show: showRef,
      hide,
      handleUpdateShow,
      handleAfterLeave,
      handleCloseClick,
      handleNegativeClick,
      handlePositiveClick,
      handleMaskClick
    }
  },
  render () {
    const {
      handlePositiveClick,
      handleUpdateShow,
      handleNegativeClick,
      handleCloseClick,
      handleAfterLeave,
      handleMaskClick,
      to,
      maskClosable,
      show
    } = this
    return (
      <NModal
        show={show}
        onUpdateShow={handleUpdateShow}
        onMaskClick={handleMaskClick}
        appear
        dialog
        to={to}
        maskClosable={maskClosable}
        onAfterLeave={handleAfterLeave}
      >
        {{
          default: () => (
            <NDialog
              {...keep(this.$props, dialogPropKeys)}
              style={this.internalStyle}
              onClose={handleCloseClick}
              onNegativeClick={handleNegativeClick}
              onPositiveClick={handlePositiveClick}
            />
          )
        }}
      </NModal>
    )
  }
})
