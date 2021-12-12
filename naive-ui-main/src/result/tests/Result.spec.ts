import { mount } from '@vue/test-utils'
import { NResult } from '../index'

describe('n-result', () => {
  it('should work with import on demand', () => {
    mount(NResult)
  })

  it('should work with `description` prop', async () => {
    const wrapper = mount(NResult, {
      props: { description: 'test-description' }
    })
    expect(wrapper.find('.n-result-header__description').exists()).toBe(true)
    expect(wrapper.find('.n-result-header__description').text()).toBe(
      'test-description'
    )
  })

  it('should work with `title` prop', async () => {
    const wrapper = mount(NResult, {
      props: { title: 'test-title' }
    })
    expect(wrapper.find('.n-result-header__title').exists()).toBe(true)
    expect(wrapper.find('.n-result-header__title').text()).toBe('test-title')
  })

  it('should work with `size` prop', async () => {
    ;(['small', 'medium', 'large', 'huge'] as const).forEach((item) => {
      const wrapper = mount(NResult, {
        props: { size: item }
      })
      expect(wrapper.find('.n-result').attributes('style')).toMatchSnapshot()
    })
  })

  it('should work with slots', async () => {
    const wrapper = mount(NResult, {
      slots: { default: () => 'test-default', footer: () => 'test-footer' }
    })
    expect(wrapper.find('.n-result-content').exists()).toBe(true)
    expect(wrapper.find('.n-result-content').text()).toBe('test-default')
    expect(wrapper.find('.n-result-footer').exists()).toBe(true)
    expect(wrapper.find('.n-result-footer').text()).toBe('test-footer')
  })

  it('should work with `status` prop', async () => {
    const wrapper = mount(NResult, {
      props: { status: 'success' }
    })
    expect(wrapper.find('.n-result-icon').exists()).toBe(true)
  })
})
