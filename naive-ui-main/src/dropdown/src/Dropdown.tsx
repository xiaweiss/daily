import {
  defineComponent,
  h,
  computed,
  ref,
  toRef,
  PropType,
  watch,
  provide,
  CSSProperties,
  InjectionKey,
  Ref,
  mergeProps
} from 'vue'
import { createTreeMate, Key, TreeNode } from 'treemate'
import { useMergedState, useKeyboard, useMemo } from 'vooks'
import { FollowerPlacement } from 'vueuc'
import type { InternalRenderBody } from '../../popover/src/interface'
import { popoverBaseProps } from '../../popover/src/Popover'
import type { PopoverInternalProps } from '../../popover/src/Popover'
import { useConfig, useTheme } from '../../_mixins'
import type { ThemeProps } from '../../_mixins'
import { NPopover } from '../../popover'
import {
  keep,
  call,
  createKey,
  MaybeArray,
  ExtractPublicPropTypes,
  createRefSetter
} from '../../_utils'
import { dropdownLight } from '../styles'
import type { DropdownTheme } from '../styles'
import NDropdownMenu from './DropdownMenu'
import style from './styles/index.cssr'
import {
  DropdownOption,
  DropdownRenderOption,
  DropdownGroupOption,
  DropdownMixedOption,
  DropdownIgnoredOption,
  OnUpdateValue,
  OnUpdateValueImpl,
  RenderLabel,
  RenderIcon,
  RenderLabelImpl,
  RenderIconImpl
} from './interface'

export interface DropdownInjection {
  renderLabelRef: Ref<RenderLabelImpl | undefined>
  renderIconRef: Ref<RenderIconImpl | undefined>
  hoverKeyRef: Ref<Key | null>
  keyboardKeyRef: Ref<Key | null>
  lastToggledSubmenuKeyRef: Ref<Key | null>
  pendingKeyPathRef: Ref<Key[]>
  activeKeyPathRef: Ref<Key[]>
  animatedRef: Ref<boolean>
  mergedShowRef: Ref<boolean>
  labelFieldRef: Ref<string>
  childrenFieldRef: Ref<string>
  doSelect: OnUpdateValueImpl
  doUpdateShow: (value: boolean) => void
}

export const dropdownInjectionKey: InjectionKey<DropdownInjection> =
  Symbol('dropdown')

const dropdownBaseProps = {
  animated: {
    type: Boolean,
    default: true
  },
  keyboard: {
    type: Boolean,
    default: true
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large' | 'huge'>,
    default: 'medium'
  },
  inverted: Boolean,
  placement: {
    type: String as PropType<FollowerPlacement>,
    default: 'bottom'
  },
  onSelect: [Function, Array] as PropType<MaybeArray<OnUpdateValue>>,
  options: {
    type: Array as PropType<DropdownMixedOption[]>,
    default: () => []
  },
  showArrow: Boolean,
  renderLabel: Function as PropType<RenderLabel>,
  renderIcon: Function as PropType<RenderIcon>,
  labelField: {
    type: String,
    default: 'label'
  },
  keyField: {
    type: String,
    default: 'key'
  },
  childrenField: {
    type: String,
    default: 'children'
  },
  // for menu, not documented
  value: [String, Number] as PropType<Key | null>
} as const

const popoverPropKeys = Object.keys(popoverBaseProps) as Array<
keyof typeof popoverBaseProps
>

const dropdownProps = {
  ...popoverBaseProps,
  ...dropdownBaseProps,
  ...(useTheme.props as ThemeProps<DropdownTheme>)
} as const

export type DropdownProps = ExtractPublicPropTypes<typeof dropdownProps>

export default defineComponent({
  name: 'Dropdown',
  inheritAttrs: false,
  props: dropdownProps,
  setup (props) {
    const uncontrolledShowRef = ref(false)
    const mergedShowRef = useMergedState(
      toRef(props, 'show'),
      uncontrolledShowRef
    )
    const treemateRef = computed(() => {
      const { keyField, childrenField } = props
      return createTreeMate<
      DropdownOption | DropdownRenderOption,
      DropdownGroupOption,
      DropdownIgnoredOption
      >(props.options, {
        getKey (node) {
          return node[keyField] as any
        },
        getDisabled (node) {
          return node.disabled === true
        },
        getIgnored (node) {
          return node.type === 'divider' || node.type === 'render'
        },
        getChildren (node) {
          return node[childrenField] as any
        }
      })
    })
    const tmNodesRef = computed(() => {
      return treemateRef.value.treeNodes
    })

    const hoverKeyRef = ref<Key | null>(null)
    const keyboardKeyRef = ref<Key | null>(null)
    const lastToggledSubmenuKeyRef = ref<Key | null>(null)
    const pendingKeyRef = computed(() => {
      return (
        hoverKeyRef.value ??
        keyboardKeyRef.value ??
        lastToggledSubmenuKeyRef.value ??
        null
      )
    })

    const pendingKeyPathRef = computed(
      () => treemateRef.value.getPath(pendingKeyRef.value).keyPath
    )

    const activeKeyPathRef = computed(
      () => treemateRef.value.getPath(props.value).keyPath
    )

    const keyboardEnabledRef = useMemo(() => {
      return props.keyboard && mergedShowRef.value
    })

    useKeyboard(
      {
        keydown: {
          ArrowUp: {
            prevent: true,
            handler: handleKeyDownUp
          },
          ArrowRight: {
            prevent: true,
            handler: handleKeyDownRight
          },
          ArrowDown: {
            prevent: true,
            handler: handleKeyDownDown
          },
          ArrowLeft: {
            prevent: true,
            handler: handleKeyDownLeft
          },
          Escape: handleKeyDownEsc
        },
        keyup: {
          Enter: handleKeyUpEnter
        }
      },
      keyboardEnabledRef
    )

    const { mergedClsPrefixRef } = useConfig(props)

    const themeRef = useTheme(
      'Dropdown',
      'Dropdown',
      style,
      dropdownLight,
      props,
      mergedClsPrefixRef
    )

    provide(dropdownInjectionKey, {
      labelFieldRef: toRef(props, 'labelField'),
      childrenFieldRef: toRef(props, 'childrenField'),
      renderLabelRef: toRef(props, 'renderLabel') as Ref<
      RenderLabelImpl | undefined
      >,
      renderIconRef: toRef(props, 'renderIcon') as Ref<
      RenderIconImpl | undefined
      >,
      hoverKeyRef: hoverKeyRef,
      keyboardKeyRef: keyboardKeyRef,
      lastToggledSubmenuKeyRef: lastToggledSubmenuKeyRef,
      pendingKeyPathRef: pendingKeyPathRef,
      activeKeyPathRef: activeKeyPathRef,
      animatedRef: toRef(props, 'animated'),
      mergedShowRef: mergedShowRef,
      doSelect,
      doUpdateShow
    })
    // watch
    watch(mergedShowRef, (value) => {
      if (!value) clearPendingState()
    })
    // methods
    function doSelect (key: Key, node: DropdownOption): void {
      const { onSelect } = props
      if (onSelect) call(onSelect as OnUpdateValueImpl, key, node)
    }
    function doUpdateShow (value: boolean): void {
      const { 'onUpdate:show': onUpdateShow } = props
      if (onUpdateShow) call(onUpdateShow, value)
      uncontrolledShowRef.value = value
    }
    function clearPendingState (): void {
      hoverKeyRef.value = null
      keyboardKeyRef.value = null
      lastToggledSubmenuKeyRef.value = null
    }
    function handleKeyDownEsc (): void {
      doUpdateShow(false)
    }
    function handleKeyDownLeft (): void {
      handleKeyDown('left')
    }
    function handleKeyDownRight (): void {
      handleKeyDown('right')
    }
    function handleKeyDownUp (): void {
      handleKeyDown('up')
    }
    function handleKeyDownDown (): void {
      handleKeyDown('down')
    }
    function handleKeyUpEnter (): void {
      const pendingNode = getPendingNode()
      if (pendingNode?.isLeaf) {
        doSelect(pendingNode.key, pendingNode.rawNode)
        doUpdateShow(false)
      }
    }
    function getPendingNode (): TreeNode<DropdownOption> | null {
      const { value: treeMate } = treemateRef
      const { value: pendingKey } = pendingKeyRef
      if (!treeMate || pendingKey === null) return null
      return treeMate.getNode(pendingKey) ?? null
    }
    function handleKeyDown (direction: 'up' | 'right' | 'down' | 'left'): void {
      const { value: pendingKey } = pendingKeyRef
      const {
        value: { getFirstAvailableNode }
      } = treemateRef
      let nextKeyboardKey = null
      if (pendingKey === null) {
        const firstNode = getFirstAvailableNode()
        if (firstNode !== null) {
          nextKeyboardKey = firstNode.key
        }
      } else {
        const currentNode = getPendingNode()
        if (currentNode) {
          let nextNode
          switch (direction) {
            case 'down':
              nextNode = currentNode.getNext()
              break
            case 'up':
              nextNode = currentNode.getPrev()
              break
            case 'right':
              nextNode = currentNode.getChild()
              break
            case 'left':
              nextNode = currentNode.getParent()
              break
          }
          if (nextNode) nextKeyboardKey = nextNode.key
        }
      }
      if (nextKeyboardKey !== null) {
        hoverKeyRef.value = null
        keyboardKeyRef.value = nextKeyboardKey
      }
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      // data
      tmNodes: tmNodesRef,
      // show
      mergedShow: mergedShowRef,
      // methods
      doUpdateShow,
      cssVars: computed(() => {
        const { size, inverted } = props
        const {
          common: { cubicBezierEaseInOut },
          self
        } = themeRef.value
        const {
          padding,
          dividerColor,
          borderRadius,
          optionOpacityDisabled,
          [createKey('optionIconSuffixWidth', size)]: optionIconSuffixWidth,
          [createKey('optionSuffixWidth', size)]: optionSuffixWidth,
          [createKey('optionIconPrefixWidth', size)]: optionIconPrefixWidth,
          [createKey('optionPrefixWidth', size)]: optionPrefixWidth,
          [createKey('fontSize', size)]: fontSize,
          [createKey('optionHeight', size)]: optionHeight,
          [createKey('optionIconSize', size)]: optionIconSize
        } = self
        const vars: any = {
          '--bezier': cubicBezierEaseInOut,
          '--font-size': fontSize,
          '--padding': padding,
          '--border-radius': borderRadius,
          '--option-height': optionHeight,
          '--option-prefix-width': optionPrefixWidth,
          '--option-icon-prefix-width': optionIconPrefixWidth,
          '--option-suffix-width': optionSuffixWidth,
          '--option-icon-suffix-width': optionIconSuffixWidth,
          '--option-icon-size': optionIconSize,
          '--divider-color': dividerColor,
          '--option-opacity-disabled': optionOpacityDisabled
        }
        // writing like this is the fastest method
        if (inverted) {
          vars['--color'] = self.colorInverted
          vars['--option-color-hover'] = self.optionColorHoverInverted
          vars['--option-color-active'] = self.optionColorActiveInverted
          vars['--option-text-color'] = self.optionTextColorInverted
          vars['--option-text-color-hover'] = self.optionTextColorHoverInverted
          vars['--option-text-color-active'] =
            self.optionTextColorActiveInverted
          vars['--option-text-color-child-active'] =
            self.optionTextColorChildActiveInverted
          vars['--prefix-color'] = self.prefixColorInverted
          vars['--suffix-color'] = self.suffixColorInverted
          vars['--group-header-text-color'] = self.groupHeaderTextColorInverted
        } else {
          vars['--color'] = self.color
          vars['--option-color-hover'] = self.optionColorHover
          vars['--option-color-active'] = self.optionColorActive
          vars['--option-text-color'] = self.optionTextColor
          vars['--option-text-color-hover'] = self.optionTextColorHover
          vars['--option-text-color-active'] = self.optionTextColorActive
          vars['--option-text-color-child-active'] =
            self.optionTextColorChildActive
          vars['--prefix-color'] = self.prefixColor
          vars['--suffix-color'] = self.suffixColor
          vars['--group-header-text-color'] = self.groupHeaderTextColor
        }
        return vars
      })
    }
  },
  render () {
    const renderPopoverBody: InternalRenderBody = (
      className,
      ref,
      style,
      onMouseenter,
      onMouseleave
    ) => {
      const { mergedClsPrefix } = this
      const dropdownProps = {
        ref: createRefSetter(ref),
        class: [
          className,
          `${mergedClsPrefix}-dropdown`,
          this.showArrow && `${mergedClsPrefix}-popover--show-arrow`
        ],
        clsPrefix: mergedClsPrefix,
        tmNodes: this.tmNodes,
        style: [style, this.cssVars as CSSProperties],
        showArrow: this.showArrow,
        arrowStyle: this.arrowStyle,
        onMouseenter,
        onMouseleave
      }
      return h(
        NDropdownMenu,
        mergeProps(this.$attrs, dropdownProps) as typeof dropdownProps
      )
    }
    const { mergedTheme } = this
    const popoverProps: PopoverInternalProps = {
      show: this.mergedShow,
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      internalRenderBody: renderPopoverBody,
      onUpdateShow: this.doUpdateShow
    }
    return (
      <NPopover {...keep(this.$props, popoverPropKeys)} {...popoverProps}>
        {{
          trigger: this.$slots.default,
          _: 1
        }}
      </NPopover>
    )
  }
})
