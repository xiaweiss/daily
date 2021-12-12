import {
  h,
  defineComponent,
  ref,
  PropType,
  CSSProperties,
  computed,
  nextTick,
  toRef
} from 'vue'
import { useMergedState } from 'vooks'
import commonProps from '../../tag/src/common-props'
import { AddIcon } from '../../_internal/icons'
import { NButton } from '../../button'
import { NSpace } from '../../space'
import { InputInst, NInput } from '../../input'
import { NTag } from '../../tag'
import { NBaseIcon } from '../../_internal'
import { useTheme, useFormItem, useLocale, useConfig } from '../../_mixins'
import type { ThemeProps } from '../../_mixins'
import { warn, call, smallerSize } from '../../_utils'
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils'
import { dynamicTagsLight } from '../styles'
import type { DynamicTagsTheme } from '../styles'
import style from './styles/index.cssr'
import type { OnUpdateValue } from './interface'

const dynamicTagsProps = {
  ...(useTheme.props as ThemeProps<DynamicTagsTheme>),
  ...commonProps,
  closable: {
    type: Boolean,
    default: true
  },
  defaultValue: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  value: Array as PropType<string[]>,
  inputStyle: [String, Object] as PropType<string | CSSProperties>,
  max: Number as PropType<number>,
  tagStyle: [String, Object] as PropType<string | CSSProperties>,
  'onUpdate:value': [Function, Array] as PropType<MaybeArray<OnUpdateValue>>,
  onUpdateValue: [Function, Array] as PropType<MaybeArray<OnUpdateValue>>,
  // deprecated
  onChange: {
    type: [Function, Array] as PropType<MaybeArray<OnUpdateValue> | undefined>,
    validator: () => {
      if (__DEV__) {
        warn(
          'dynamic-tags',
          '`on-change` is deprecated, please use `on-update:value` instead.'
        )
      }
      return true
    },
    default: undefined
  }
}

export type DynamicTagsProps = ExtractPublicPropTypes<typeof dynamicTagsProps>

export default defineComponent({
  name: 'DynamicTags',
  props: dynamicTagsProps,
  setup (props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const { localeRef } = useLocale('DynamicTags')
    const formItem = useFormItem(props)
    const { mergedDisabledRef } = formItem
    const inputValueRef = ref('')
    const showInputRef = ref(false)
    const inputForceFocusedRef = ref(true)
    const inputInstRef = ref<InputInst | null>(null)
    const themeRef = useTheme(
      'DynamicTags',
      'DynamicTags',
      style,
      dynamicTagsLight,
      props,
      mergedClsPrefixRef
    )
    const uncontrolledValueRef = ref(props.defaultValue)
    const controlledValueRef = toRef(props, 'value')
    const mergedValueRef = useMergedState(
      controlledValueRef,
      uncontrolledValueRef
    )

    const localizedAddRef = computed(() => {
      return localeRef.value.add
    })
    const inputSizeRef = computed(() => {
      return smallerSize(props.size)
    })
    const triggerDisabledRef = computed(() => {
      return (
        mergedDisabledRef.value ||
        (!!props.max && mergedValueRef.value.length >= props.max)
      )
    })
    function doChange (value: string[]): void {
      const {
        onChange,
        'onUpdate:value': _onUpdateValue,
        onUpdateValue
      } = props
      const { nTriggerFormInput, nTriggerFormChange } = formItem
      if (onChange) call(onChange, value)
      if (onUpdateValue) call(onUpdateValue, value)
      if (_onUpdateValue) call(_onUpdateValue, value)
      uncontrolledValueRef.value = value
      nTriggerFormInput()
      nTriggerFormChange()
    }
    function handleCloseClick (index: number): void {
      const tags = mergedValueRef.value.slice(0)
      tags.splice(index, 1)
      doChange(tags)
    }
    function handleInputKeyUp (e: KeyboardEvent): void {
      switch (e.code) {
        case 'Enter':
        case 'NumpadEnter':
          handleInputConfirm()
      }
    }
    function handleInputConfirm (externalValue?: string): void {
      const nextValue = externalValue ?? inputValueRef.value
      if (nextValue) {
        const tags = mergedValueRef.value.slice(0)
        tags.push(nextValue)
        doChange(tags)
      }
      showInputRef.value = false
      inputForceFocusedRef.value = true
      inputValueRef.value = ''
    }
    function handleInputBlur (): void {
      handleInputConfirm()
    }
    function handleAddClick (): void {
      showInputRef.value = true
      void nextTick(() => {
        inputInstRef.value?.focus()
        inputForceFocusedRef.value = false
      })
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      inputInstRef,
      localizedAdd: localizedAddRef,
      inputSize: inputSizeRef,
      inputValue: inputValueRef,
      showInput: showInputRef,
      inputForceFocused: inputForceFocusedRef,
      mergedValue: mergedValueRef,
      mergedDisabled: mergedDisabledRef,
      triggerDisabled: triggerDisabledRef,
      handleInputKeyUp,
      handleAddClick,
      handleInputBlur,
      handleCloseClick,
      handleInputConfirm,
      mergedTheme: themeRef,
      cssVars: computed(() => {
        const {
          self: { inputWidth }
        } = themeRef.value
        return {
          '--input-width': inputWidth
        }
      })
    }
  },
  render () {
    const { mergedTheme, cssVars, mergedClsPrefix } = this
    return (
      <NSpace
        class={`${mergedClsPrefix}-dynamic-tags`}
        size="small"
        style={cssVars as CSSProperties}
        theme={mergedTheme.peers.Space}
        themeOverrides={mergedTheme.peerOverrides.Space}
        itemStyle="display: flex;"
      >
        {{
          default: () => {
            const {
              mergedTheme,
              tagStyle,
              type,
              round,
              size,
              color,
              closable,
              mergedDisabled,
              showInput,
              inputValue,
              inputStyle,
              inputSize,
              inputForceFocused,
              triggerDisabled,
              handleInputKeyUp,
              handleInputBlur,
              handleAddClick,
              handleCloseClick,
              handleInputConfirm,
              $slots
            } = this
            return this.mergedValue
              .map((tag, index) => (
                <NTag
                  key={index}
                  theme={mergedTheme.peers.Tag}
                  themeOverrides={mergedTheme.peerOverrides.Tag}
                  style={tagStyle}
                  type={type}
                  round={round}
                  size={size}
                  color={color}
                  closable={closable}
                  disabled={mergedDisabled}
                  onClose={() => handleCloseClick(index)}
                >
                  {{ default: () => tag }}
                </NTag>
              ))
              .concat(
                showInput ? (
                  $slots.input ? (
                    $slots.input({ submit: handleInputConfirm })
                  ) : (
                    <NInput
                      ref="inputInstRef"
                      autosize
                      value={inputValue}
                      onUpdateValue={(v) => {
                        this.inputValue = v
                      }}
                      theme={mergedTheme.peers.Input}
                      themeOverrides={mergedTheme.peerOverrides.Input}
                      style={inputStyle}
                      size={inputSize}
                      placeholder=""
                      onKeyup={handleInputKeyUp}
                      onBlur={handleInputBlur}
                      internalForceFocus={inputForceFocused}
                    />
                  )
                ) : $slots.trigger ? (
                  $slots.trigger({
                    activate: handleAddClick,
                    disabled: triggerDisabled
                  })
                ) : (
                  <NButton
                    dashed
                    disabled={triggerDisabled}
                    theme={mergedTheme.peers.Button}
                    themeOverrides={mergedTheme.peerOverrides.Button}
                    size={inputSize}
                    onClick={handleAddClick}
                  >
                    {{
                      icon: () => (
                        <NBaseIcon clsPrefix={mergedClsPrefix}>
                          {{ default: () => <AddIcon /> }}
                        </NBaseIcon>
                      )
                    }}
                  </NButton>
                )
              )
          }
        }}
      </NSpace>
    )
  }
})
