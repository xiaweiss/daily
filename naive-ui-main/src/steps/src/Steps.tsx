import {
  h,
  defineComponent,
  VNode,
  provide,
  PropType,
  VNodeChild,
  InjectionKey,
  ExtractPropTypes,
  Ref,
  Slots
} from 'vue'
import type { MergedTheme, ThemeProps } from '../../_mixins'
import { useConfig, useTheme } from '../../_mixins'
import { stepsLight } from '../styles'
import style from './styles/index.cssr'
import { ExtractPublicPropTypes, flatten, getSlot } from '../../_utils'
import type { StepsTheme } from '../styles'

function stepWithIndex (step: VNodeChild, i: number): VNode | null {
  if (typeof step !== 'object' || step === null || Array.isArray(step)) {
    return null
  }
  if (!step.props) step.props = {}
  step.props.internalIndex = i + 1
  return step
}

function stepsWithIndex (steps: VNodeChild[]): Array<VNode | null> {
  return steps.map((step, i) => stepWithIndex(step, i))
}

const stepsProps = {
  ...(useTheme.props as ThemeProps<StepsTheme>),
  current: Number,
  status: {
    type: String as PropType<'process' | 'finish' | 'error' | 'wait'>,
    default: 'process'
  },
  size: {
    type: String as PropType<'small' | 'medium'>,
    default: 'medium'
  },
  vertical: Boolean
}

export interface StepsInjection {
  props: ExtractPropTypes<typeof stepsProps>
  mergedClsPrefixRef: Ref<string>
  mergedThemeRef: Ref<MergedTheme<StepsTheme>>
  stepsSlots: Slots
}

export type StepsProps = ExtractPublicPropTypes<typeof stepsProps>

export const stepsInjectionKey: InjectionKey<StepsInjection> = Symbol('steps')

export default defineComponent({
  name: 'Steps',
  props: stepsProps,
  setup (props, { slots }) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Steps',
      'Steps',
      style,
      stepsLight,
      props,
      mergedClsPrefixRef
    )
    provide(stepsInjectionKey, {
      props,
      mergedThemeRef: themeRef,
      mergedClsPrefixRef,
      stepsSlots: slots
    })
    return {
      mergedClsPrefix: mergedClsPrefixRef
    }
  },
  render () {
    const { mergedClsPrefix } = this
    return (
      <div
        class={[
          `${mergedClsPrefix}-steps`,
          this.vertical && `${mergedClsPrefix}-steps--vertical`
        ]}
      >
        {stepsWithIndex(flatten(getSlot(this)))}
      </div>
    )
  }
})
