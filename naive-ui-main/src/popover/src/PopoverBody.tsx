import {
  h,
  vShow,
  withDirectives,
  Transition,
  ref,
  defineComponent,
  computed,
  mergeProps,
  inject,
  onBeforeUnmount,
  DirectiveArguments,
  PropType,
  watch,
  toRef,
  provide,
  CSSProperties,
  VNode,
  renderSlot,
  Fragment
} from 'vue'
import { VFollower, FollowerPlacement, FollowerInst } from 'vueuc'
import { clickoutside, mousemoveoutside } from 'vdirs'
import { useTheme, useConfig } from '../../_mixins'
import type { ThemeProps } from '../../_mixins'
import { formatLength, useAdjustedTo } from '../../_utils'
import { popoverLight } from '../styles'
import type { PopoverTheme } from '../styles'
import style from './styles/index.cssr'
import type { PopoverInjection } from './Popover'
import type { PopoverTrigger } from './interface'
import { popoverBodyInjectionKey } from './interface'
import { drawerBodyInjectionKey } from '../../drawer/src/interface'
import { modalBodyInjectionKey } from '../../modal/src/interface'

export const popoverBodyProps = {
  ...(useTheme.props as ThemeProps<PopoverTheme>),
  to: useAdjustedTo.propTo,
  show: Boolean,
  trigger: String as PropType<PopoverTrigger>,
  showArrow: Boolean,
  delay: Number,
  duration: Number,
  raw: Boolean,
  arrowStyle: [String, Object] as PropType<string | CSSProperties>,
  displayDirective: String as PropType<'if' | 'show'>,
  x: Number,
  y: Number,
  flip: Boolean,
  overlap: Boolean,
  placement: String as PropType<FollowerPlacement>,
  width: [Number, String] as PropType<number | 'trigger'>,
  // private
  animated: Boolean,
  onClickoutside: Function as PropType<(e: MouseEvent) => void>,
  /** @deprecated */
  minWidth: Number,
  maxWidth: Number
}

interface RenderArrowProps {
  arrowStyle: string | CSSProperties | undefined
  clsPrefix: string
}

export const renderArrow = ({
  arrowStyle,
  clsPrefix
}: RenderArrowProps): VNode | null => {
  return (
    <div key="__popover-arrow__" class={`${clsPrefix}-popover-arrow-wrapper`}>
      <div class={`${clsPrefix}-popover-arrow`} style={arrowStyle} />
    </div>
  )
}

export default defineComponent({
  name: 'PopoverBody',
  inheritAttrs: false,
  props: popoverBodyProps,
  setup (props, { slots, attrs }) {
    const { namespaceRef, mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Popover',
      'Popover',
      style,
      popoverLight,
      props,
      mergedClsPrefixRef
    )
    const followerRef = ref<FollowerInst | null>(null)
    const NPopover = inject<PopoverInjection>('NPopover') as PopoverInjection
    const bodyRef = ref<HTMLElement | null>(null)
    const followerEnabledRef = ref(props.show)
    const directivesRef = computed<DirectiveArguments>(() => {
      const { trigger, onClickoutside } = props
      const directives = []
      const {
        positionManuallyRef: { value: positionManually }
      } = NPopover
      if (!positionManually) {
        if (trigger === 'click' && !onClickoutside) {
          directives.push([clickoutside, handleClickOutside])
        }
        if (trigger === 'hover') {
          directives.push([mousemoveoutside, handleMouseMoveOutside])
        }
      }
      if (onClickoutside) {
        directives.push([clickoutside, handleClickOutside])
      }
      if (props.displayDirective === 'show') {
        directives.push([vShow, props.show])
      }
      return directives as DirectiveArguments
    })
    const styleRef = computed(() => {
      return [
        {
          width: props.width === 'trigger' ? '' : formatLength(props.width)
        },
        props.maxWidth ? { maxWidth: formatLength(props.maxWidth) } : {},
        props.minWidth ? { minWidth: formatLength(props.minWidth) } : {},
        cssVarsRef.value
      ]
    })
    const cssVarsRef = computed(() => {
      const {
        common: { cubicBezierEaseInOut, cubicBezierEaseIn, cubicBezierEaseOut },
        self: {
          space,
          spaceArrow,
          padding,
          fontSize,
          textColor,
          dividerColor,
          color,
          boxShadow,
          borderRadius,
          arrowHeight,
          arrowOffset,
          arrowOffsetVertical
        }
      } = themeRef.value
      return {
        '--box-shadow': boxShadow,
        '--bezier': cubicBezierEaseInOut,
        '--bezier-ease-in': cubicBezierEaseIn,
        '--bezier-ease-out': cubicBezierEaseOut,
        '--font-size': fontSize,
        '--text-color': textColor,
        '--color': color,
        '--divider-color': dividerColor,
        '--border-radius': borderRadius,
        '--arrow-height': arrowHeight,
        '--arrow-offset': arrowOffset,
        '--arrow-offset-vertical': arrowOffsetVertical,
        '--padding': padding,
        '--space': space,
        '--space-arrow': spaceArrow
      }
    })
    NPopover.setBodyInstance({
      syncPosition
    })
    onBeforeUnmount(() => {
      NPopover.setBodyInstance(null)
    })
    watch(toRef(props, 'show'), (value) => {
      // If no animation, no transition component will be applied to the
      // component. So we need to trigger follower manaully.
      if (props.animated) return
      if (value) {
        followerEnabledRef.value = true
      } else {
        followerEnabledRef.value = false
      }
    })
    function syncPosition (): void {
      // eslint-disable-next-line no-unused-expressions
      followerRef.value?.syncPosition()
    }
    function handleMouseEnter (e: MouseEvent): void {
      if (props.trigger === 'hover') {
        NPopover.handleMouseEnter(e)
      }
    }
    function handleMouseLeave (e: MouseEvent): void {
      if (props.trigger === 'hover') {
        NPopover.handleMouseLeave(e)
      }
    }
    function handleMouseMoveOutside (e: MouseEvent): void {
      if (
        props.trigger === 'hover' &&
        !getTriggerElement().contains(e.target as Node)
      ) {
        NPopover.handleMouseMoveOutside(e)
      }
    }
    function handleClickOutside (e: MouseEvent): void {
      if (
        (props.trigger === 'click' &&
          !getTriggerElement().contains(e.target as Node)) ||
        props.onClickoutside
      ) {
        NPopover.handleClickOutside(e)
      }
    }
    function getTriggerElement (): HTMLElement {
      return NPopover.getTriggerElement()
    }
    provide(popoverBodyInjectionKey, bodyRef)
    provide(drawerBodyInjectionKey, null)
    provide(modalBodyInjectionKey, null)

    function renderContentNode (): VNode | null {
      let contentNode: VNode
      const {
        internalRenderBodyRef: { value: renderBody }
      } = NPopover
      const { value: mergedClsPrefix } = mergedClsPrefixRef
      if (!renderBody) {
        const { value: extraClass } = NPopover.extraClassRef
        contentNode = h(
          'div',
          mergeProps(
            {
              class: [
                `${mergedClsPrefix}-popover`,
                extraClass.map((v) => `${mergedClsPrefix}-${v}`),
                {
                  [`${mergedClsPrefix}-popover--overlap`]: props.overlap,
                  [`${mergedClsPrefix}-popover--show-arrow`]: props.showArrow,
                  [`${mergedClsPrefix}-popover--show-header`]: !!slots.header,
                  [`${mergedClsPrefix}-popover--raw`]: props.raw
                }
              ],
              ref: bodyRef,
              style: styleRef.value,
              onMouseenter: handleMouseEnter,
              onMouseleave: handleMouseLeave
            },
            attrs
          ),
          [
            slots.header ? (
              <>
                <div class={`${mergedClsPrefix}-popover__header`}>
                  {slots.header()}
                </div>
                <div class={`${mergedClsPrefix}-popover__content`}>{slots}</div>
              </>
            ) : (
              renderSlot(slots, 'default')
            ),
            props.showArrow
              ? renderArrow({
                arrowStyle: props.arrowStyle,
                clsPrefix: mergedClsPrefix
              })
              : null
          ]
        )
      } else {
        contentNode = renderBody(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [
            `${mergedClsPrefix}-popover`,
            props.overlap && `${mergedClsPrefix}-popover--overlap`
          ],
          bodyRef,
          styleRef.value as any,
          handleMouseEnter,
          handleMouseLeave
        )
      }
      return props.displayDirective === 'show' || props.show
        ? withDirectives(contentNode, directivesRef.value)
        : null
    }

    return {
      namespace: namespaceRef,
      isMounted: NPopover.isMountedRef,
      zIndex: NPopover.zIndexRef,
      followerRef,
      adjustedTo: useAdjustedTo(props),
      followerEnabled: followerEnabledRef,
      renderContentNode
    }
  },
  render () {
    return h(
      VFollower,
      {
        zIndex: this.zIndex,
        show: this.show,
        enabled: this.followerEnabled,
        to: this.adjustedTo,
        x: this.x,
        y: this.y,
        flip: this.flip,
        placement: this.placement,
        containerClass: this.namespace,
        ref: 'followerRef',
        overlap: this.overlap,
        width: this.width === 'trigger' ? 'target' : undefined,
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey
      },
      {
        default: () => {
          return this.animated
            ? h(
              Transition,
              {
                name: 'popover-transition',
                appear: this.isMounted,
                // Don't use watch to enable follower, since the transition may
                // make position sync timing very subtle and buggy.
                onEnter: () => {
                  this.followerEnabled = true
                },
                onAfterLeave: () => {
                  this.followerEnabled = false
                }
              },
              {
                default: this.renderContentNode
              }
            )
            : this.renderContentNode()
        }
      }
    )
  }
})
