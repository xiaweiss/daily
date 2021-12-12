import {
  h,
  defineComponent,
  provide,
  PropType,
  Fragment,
  InjectionKey,
  inject
} from 'vue'
import { render } from '../../_utils'
import { useMenuChild, useMenuChildProps } from './use-menu-child'
import type { MenuOptionGroupInjection } from './use-menu-child'
import { itemRenderer } from './utils'
import { TmNode } from './interface'
import { submenuInjectionKey } from './Submenu'
import { menuInjectionKey } from './Menu'

export const menuItemGroupProps = {
  ...useMenuChildProps,
  tmNodes: {
    type: Array as PropType<TmNode[]>,
    required: true
  }
} as const

export const menuItemGroupInjectionKey: InjectionKey<MenuOptionGroupInjection> =
  Symbol('menu-item-group')

export default defineComponent({
  name: 'MenuOptionGroup',
  props: menuItemGroupProps,
  setup (props) {
    provide(submenuInjectionKey, null)
    const MenuChild = useMenuChild(props)
    provide(menuItemGroupInjectionKey, {
      paddingLeftRef: MenuChild.paddingLeft
    })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { mergedClsPrefixRef, props: menuProps } = inject(menuInjectionKey)!
    return function () {
      const { value: mergedClsPrefix } = mergedClsPrefixRef
      const paddingLeft = MenuChild.paddingLeft.value
      return (
        <div class={`${mergedClsPrefix}-menu-item-group`} role="group">
          <span
            class={`${mergedClsPrefix}-menu-item-group-title`}
            style={
              paddingLeft !== undefined
                ? `padding-left: ${paddingLeft}px;`
                : undefined
            }
          >
            {render(props.title)}
            {props.extra ? <> {render(props.extra)}</> : null}
          </span>
          <div>
            {props.tmNodes.map((tmNode) => itemRenderer(tmNode, menuProps))}
          </div>
        </div>
      )
    }
  }
})
