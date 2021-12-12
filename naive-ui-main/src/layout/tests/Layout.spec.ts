import { h } from 'vue'
import { mount } from '@vue/test-utils'
import {
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider
} from '../index'
import { NH2 } from '../../typography'
import { NCard } from '../../card'

describe('n-layout', () => {
  it('should work with import on demand', () => {
    mount(NLayout)
  })

  it('should work with Basic', async () => {
    const wrapper = mount(NLayout, {
      props: {
        'has-sider': true
      },
      slots: {
        default: () => [
          h(NLayoutHeader, null, { default: () => 'test-header' }),
          h(NLayoutContent, null, { default: () => 'test-content' }),
          h(NLayoutSider, null, { default: () => 'test-sider' }),
          h(NLayoutFooter, null, { default: () => 'test-footer' })
        ]
      }
    })

    expect(
      wrapper.find('.n-layout-scroll-container').element.children.length
    ).toBe(4)
    expect(
      wrapper
        .find('.n-layout-scroll-container')
        .element.children[0].getAttribute('class')
    ).toContain('n-layout-header')
    expect(wrapper.find('.n-layout-header').text()).toBe('test-header')
    expect(
      wrapper
        .find('.n-layout-scroll-container')
        .element.children[1].getAttribute('class')
    ).toContain('n-layout-content')
    expect(wrapper.findAll('.n-layout-scroll-container')[1].text()).toBe(
      'test-content'
    )
    expect(
      wrapper
        .find('.n-layout-scroll-container')
        .element.children[2].getAttribute('class')
    ).toContain('n-layout-sider')
    expect(wrapper.find('.n-layout-sider-scroll-container').text()).toBe(
      'test-sider'
    )
    expect(
      wrapper
        .find('.n-layout-scroll-container')
        .element.children[3].getAttribute('class')
    ).toContain('n-layout-footer')
    expect(wrapper.find('.n-layout-footer').text()).toBe('test-footer')
  })

  it('should work with `content-style` prop', async () => {
    const wrapper = mount(NLayout, {
      props: {
        'has-sider': true
      },
      slots: {
        default: () =>
          h(
            NLayoutSider,
            { 'content-style': 'padding: 24px' },
            {
              default: () => [
                h(NH2, null, { default: () => 'test1' }),
                h(NH2, null, { default: () => 'test2' })
              ]
            }
          )
      }
    })
    expect(
      wrapper.find('.n-layout-sider-scroll-container').attributes('style')
    ).toContain('padding: 24px')
  })

  it('should work with `embedded` prop', async () => {
    const wrapper = mount(NLayout, {
      props: {
        embedded: true
      },
      slots: {
        default: () =>
          h(NCard, null, {
            default: () => 'test'
          })
      }
    })
    expect(wrapper.find('.n-layout').attributes('style')).toMatchSnapshot()
  })

  it('should work with `bordered` prop', async () => {
    const wrapper = mount(NLayout, {
      props: {
        'has-sider': true
      },
      slots: {
        default: () => [
          h(
            NLayoutHeader,
            { bordered: true },
            { default: () => 'test-header' }
          ),
          h(NLayoutSider, { bordered: true }, { default: () => 'test-sider' }),
          h(NLayoutFooter, { bordered: true }, { default: () => 'test-footer' })
        ]
      }
    })
    expect(wrapper.find('.n-layout-header').classes()).toContain(
      'n-layout-header--bordered'
    )
    expect(wrapper.find('.n-layout-sider').classes()).toContain(
      'n-layout-sider--bordered'
    )
    expect(wrapper.find('.n-layout-footer').classes()).toContain(
      'n-layout-footer--bordered'
    )
  })

  it('should work with `absolute` prop', async () => {
    const wrapper = mount(NLayout, {
      props: {
        position: 'absolute'
      },
      slots: {
        default: () => [
          h(NLayoutHeader, null, { default: () => 'test-header' })
        ]
      }
    })
    expect(wrapper.find('.n-layout').classes()).toContain(
      'n-layout--absolute-positioned'
    )
  })
})
