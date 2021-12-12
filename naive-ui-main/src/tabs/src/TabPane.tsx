import { h, defineComponent, inject, PropType, VNodeChild, VNode } from 'vue'
import { throwError, warn } from '../../_utils'
import { tabsInjectionKey } from './interface'
import type { ExtractPublicPropTypes } from '../../_utils'

export const tabPaneProps = {
  /** @deprecated */
  label: {
    type: [String, Number, Object, Function] as PropType<
    string | number | VNode | (() => VNodeChild)
    >,
    default: undefined,
    validator: () => {
      if (__DEV__) {
        warn('tab-pane', '`label` is deprecated, please use `tab` instead.')
      }
      return true
    }
  },
  tab: [String, Number, Object, Function] as PropType<
  string | number | VNode | (() => VNodeChild)
  >,
  name: {
    type: [String, Number] as PropType<string | number>,
    required: true
  },
  disabled: Boolean,
  displayDirective: {
    type: String as PropType<'if' | 'show' | 'show:lazy'>,
    default: 'if'
  },
  closable: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  }
} as const

export type TabPaneProps = ExtractPublicPropTypes<typeof tabPaneProps>

export default defineComponent({
  __TAB_PANE__: true,
  name: 'TabPane',
  alias: ['TabPanel'],
  props: tabPaneProps,
  setup () {
    const NTab = inject(tabsInjectionKey, null)
    if (!NTab) {
      throwError('tab-pane', '`n-tab-pane` must be placed inside `n-tabs`.')
    }
    return {
      style: NTab.paneStyleRef,
      class: NTab.paneClassRef,
      mergedClsPrefix: NTab.mergedClsPrefixRef
    }
  },
  render () {
    return (
      <div class={[`${this.mergedClsPrefix}-tab-pane`, this.class]} style={this.style}>
        {this.$slots}
      </div>
    )
  }
})
