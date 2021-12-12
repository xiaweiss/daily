import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { NLoadingBarProvider, useLoadingBar } from '../index'

const Provider = defineComponent({
  render () {
    return <NLoadingBarProvider>{this.$slots}</NLoadingBarProvider>
  }
})

describe('n-loading-bar', () => {
  it('should work with import on demand', () => {
    mount(NLoadingBarProvider)
  })

  it('should have start type', (done) => {
    const Test = defineComponent({
      setup () {
        const loadingBar = useLoadingBar()
        loadingBar.start()
      },
      render () {
        return null
      }
    })
    const wrapper = mount(() => (
      <Provider>{{ default: () => <Test /> }}</Provider>
    ))
    setTimeout(() => {
      expect(document.querySelector('.n-loading-bar')).not.toEqual(null)
      wrapper.unmount()
      done()
    }, 0)
  })

  it('should have finish type', (done) => {
    const Test = defineComponent({
      setup () {
        const loadingBar = useLoadingBar()
        loadingBar.start()
        setTimeout(() => {
          loadingBar.finish()
        }, 0)
      },
      render () {
        return null
      }
    })
    const wrapper = mount(() => (
      <Provider>{{ default: () => <Test /> }}</Provider>
    ))
    setTimeout(() => {
      expect(document.querySelector('.n-loading-bar--finishing')).not.toEqual(
        null
      )
      wrapper.unmount()
      done()
    }, 0)
  })

  it('should have error type', () => {
    const Test = defineComponent({
      setup () {
        const loadingBar = useLoadingBar()
        loadingBar.error()
      },
      render () {
        return null
      }
    })
    const wrapper = mount(() => (
      <Provider>{{ default: () => <Test /> }}</Provider>
    ))
    setTimeout(() => {
      expect(document.querySelector('.n-loading-bar--error')).not.toEqual(null)
      wrapper.unmount()
    }, 0)
  })

  it('should have loadingBarStyle prop', (done) => {
    const Test = defineComponent({
      setup () {
        const loadingBar = useLoadingBar()
        loadingBar.error()
      },
      render () {
        return null
      }
    })
    const wrapper = mount(NLoadingBarProvider, {
      props: {
        loadingBarStyle: {
          error: {
            height: '5px',
            color: '#ccc'
          }
        }
      },
      slots: {
        default: () => <Test />
      }
    })
    setTimeout(() => {
      expect(
        document.querySelector('.n-loading-bar--error')?.getAttribute('style')
      ).toContain('height: 5px;')
      wrapper.unmount()
      done()
    }, 0)
  })
})
