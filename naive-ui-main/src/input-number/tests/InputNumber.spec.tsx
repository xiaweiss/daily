import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { NInputNumber } from '../index'
import { NButton } from '../../button'

describe('n-input-number', () => {
  it('should work with import on demand', () => {
    mount(NInputNumber)
  })

  it('props.value can be null', () => {
    ;<NInputNumber value={null} />
  })

  it('should work with `show-button` prop', async () => {
    // Here is a strange case, we must make input number's slots flag to 2
    // (dynamic) to make it work.
    const wrapper = mount(NInputNumber)
    expect(wrapper.findComponent(NButton).exists()).toBe(true)
    await wrapper.setProps({ showButton: false })
    expect(wrapper.findComponent(NButton).exists()).toBe(false)
  })

  it('should work with default value', async () => {
    const wrapper = mount(NInputNumber, {
      props: {
        defaultValue: 1
      }
    })
    expect(wrapper.find('input').element.value).toEqual('1')
  })

  it('should not trigger update if value is same', async () => {
    const onUpdateValue = jest.fn()
    const wrapper = mount(NInputNumber, {
      attachTo: document.body,
      props: {
        defaultValue: 1,
        onUpdateValue
      }
    })
    wrapper.find('input').element.value = ''
    await wrapper.find('input').trigger('input')
    expect(onUpdateValue).toHaveBeenCalledWith(null)
    wrapper.unmount()
  })

  it('trigger focus & blur event', () => {
    const onFocus = jest.fn()
    const onBlur = jest.fn()
    const wrapper = mount(NInputNumber, {
      attachTo: document.body,
      props: {
        onFocus,
        onBlur
      }
    })
    wrapper.find('input').element.focus()
    expect(onFocus).toHaveBeenCalledTimes(1)
    wrapper.find('input').element.blur()
    expect(onBlur).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })

  it('should work with `prefix` & `suffix` slots', async () => {
    const wrapper = mount(NInputNumber, {
      slots: { prefix: () => '$', suffix: () => '%' }
    })
    expect(wrapper.find('.n-input__prefix').exists()).toBe(true)
    expect(wrapper.find('.n-input__prefix').text()).toBe('$')
    expect(wrapper.find('.n-input__suffix').exists()).toBe(true)
    expect(wrapper.find('.n-input-number-suffix').exists()).toBe(true)
    expect(wrapper.find('.n-input-number-suffix').text()).toBe('%')
  })
  it('should work with decimal `step`', async () => {
    const wrapper = mount(NInputNumber, {
      props: {
        defaultValue: 0.2,
        min: 0,
        step: 0.1
      }
    })
    const input = wrapper.find('.n-input__input-el')
    expect((input.element as HTMLInputElement).value).toEqual('0.2')
    const buttons = wrapper.findAll('.n-input__suffix > button')
    const minusBtn = buttons[0]
    const addBtn = buttons[1]
    let arr = [0.1, 0]
    for (let i = 0; i < arr.length; i++) {
      await minusBtn.trigger('click')
      expect((input.element as HTMLInputElement).value).toEqual(
        arr[i].toString()
      )
    }
    expect(minusBtn.classes()).toContain('n-button--disabled')
    await wrapper.setProps({ step: 0.2 })
    await wrapper.setProps({ max: 0.6 })
    arr = [0.2, 0.4, 0.6]
    for (let i = 0; i < arr.length; i++) {
      await addBtn.trigger('click')
      expect((input.element as HTMLInputElement).value).toEqual(
        arr[i].toString()
      )
    }
    expect(addBtn.classes()).toContain('n-button--disabled')
  })

  it('should work with decimal value', async () => {
    const wrapper = mount(NInputNumber, {
      attachTo: document.body,
      props: {
        defaultValue: 0
      }
    })
    wrapper.find('input').element.value = '0.22'
    await wrapper.find('input').trigger('input')
    await wrapper.find('input').trigger('blur')
    expect(wrapper.find('input').element.value).toEqual('0.22')
    await wrapper.setProps({ step: 2 })
    wrapper.find('input').element.value = '0.3333'
    await wrapper.find('input').trigger('input')
    await wrapper.find('input').trigger('blur')
    expect(wrapper.find('input').element.value).toEqual('0.3333')
    const addBtn = wrapper.findAll('.n-input__suffix > button')[1]
    await addBtn.trigger('click')
    expect(wrapper.find('input').element.value).toEqual('2.3333')
    await wrapper.setProps({ step: 2.333333 })
    await addBtn.trigger('click')
    expect(wrapper.find('input').element.value).toEqual('4.666633')
    await wrapper.setProps({ step: 2.33 })
    await addBtn.trigger('click')
    expect(wrapper.find('input').element.value).toEqual('6.996633')
    wrapper.unmount()
  })

  it('should work with `updateValueOnInput` prop', async () => {
    const onUpdateValue = jest.fn()
    const wrapper = mount(NInputNumber, {
      attachTo: document.body,
      props: {
        defaultValue: 2,
        onUpdateValue
      }
    })
    wrapper.find('input').element.value = '2.'
    await wrapper.find('input').trigger('input')
    expect(onUpdateValue).toHaveBeenCalledTimes(0)
    wrapper.find('input').element.value = '2.2'
    await wrapper.find('input').trigger('input')
    expect(onUpdateValue).toHaveBeenCalledWith(2.2)
    wrapper.find('input').element.value = ''
    await wrapper.find('input').trigger('input')
    expect(onUpdateValue).toHaveBeenCalledTimes(2)
    await wrapper.setProps({ min: 20, max: 50 })
    wrapper.find('input').element.value = '18.'
    await wrapper.find('input').trigger('input')
    wrapper.find('input').element.value = '.18'
    expect(onUpdateValue).toHaveBeenCalledTimes(2)
    wrapper.find('input').element.value = '22.2'
    await wrapper.find('input').trigger('input')
    expect(onUpdateValue).toHaveBeenCalledWith(22.2)
    await wrapper.setProps({ updateValueOnInput: false })
    wrapper.find('input').element.value = '24'
    await wrapper.find('input').trigger('input')
    expect(onUpdateValue).toHaveBeenCalledTimes(3)
    await wrapper.find('input').trigger('blur')
    expect(onUpdateValue).toHaveBeenCalledWith(24)
    wrapper.unmount()
  })
})
