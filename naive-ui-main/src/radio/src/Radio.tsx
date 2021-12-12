import { h, defineComponent, computed, CSSProperties } from 'vue'
import { useTheme } from '../../_mixins'
import type { ThemeProps } from '../../_mixins'
import { createKey } from '../../_utils'
import type { ExtractPublicPropTypes } from '../../_utils'
import { radioLight, RadioTheme } from '../styles'
import useRadio from './use-radio'
import style from './styles/radio.cssr'

export type RadioProps = ExtractPublicPropTypes<typeof useRadio.props>

export default defineComponent({
  name: 'Radio',
  props: {
    ...(useTheme.props as ThemeProps<RadioTheme>),
    ...useRadio.props
  },
  setup (props) {
    const radio = useRadio(props)
    const themeRef = useTheme(
      'Radio',
      'Radio',
      style,
      radioLight,
      props,
      radio.mergedClsPrefix
    )
    return Object.assign(radio, {
      cssVars: computed(() => {
        const {
          mergedSize: { value: size }
        } = radio
        const {
          common: { cubicBezierEaseInOut },
          self: {
            boxShadow,
            boxShadowActive,
            boxShadowDisabled,
            boxShadowFocus,
            boxShadowHover,
            color,
            colorDisabled,
            textColor,
            textColorDisabled,
            dotColorActive,
            dotColorDisabled,
            labelPadding,
            [createKey('fontSize', size)]: fontSize,
            [createKey('radioSize', size)]: radioSize
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--box-shadow': boxShadow,
          '--box-shadow-active': boxShadowActive,
          '--box-shadow-disabled': boxShadowDisabled,
          '--box-shadow-focus': boxShadowFocus,
          '--box-shadow-hover': boxShadowHover,
          '--color': color,
          '--color-disabled': colorDisabled,
          '--dot-color-active': dotColorActive,
          '--dot-color-disabled': dotColorDisabled,
          '--font-size': fontSize,
          '--radio-size': radioSize,
          '--text-color': textColor,
          '--text-color-disabled': textColorDisabled,
          '--label-padding': labelPadding
        }
      })
    })
  },
  render () {
    const { $slots, mergedClsPrefix } = this
    return (
      <div
        class={[
          `${mergedClsPrefix}-radio`,
          {
            [`${mergedClsPrefix}-radio--disabled`]: this.mergedDisabled,
            [`${mergedClsPrefix}-radio--checked`]: this.renderSafeChecked,
            [`${mergedClsPrefix}-radio--focus`]: this.focus
          }
        ]}
        style={this.cssVars as CSSProperties}
        onKeyup={this.handleKeyUp}
        onClick={this.handleClick}
        onMousedown={this.handleMouseDown}
      >
        <input
          ref="inputRef"
          type="radio"
          class={`${mergedClsPrefix}-radio__radio-input`}
          value={this.value}
          name={this.mergedName}
          checked={this.renderSafeChecked}
          disabled={this.mergedDisabled}
          onChange={this.handleRadioInputChange}
          onFocus={this.handleRadioInputFocus}
          onBlur={this.handleRadioInputBlur}
        />
        <div
          class={[
            `${mergedClsPrefix}-radio__dot`,
            this.renderSafeChecked && `${mergedClsPrefix}-radio__dot--checked`
          ]}
        />
        {$slots.default ? (
          <div ref="labelRef" class={`${mergedClsPrefix}-radio__label`}>
            {$slots.default()}
          </div>
        ) : null}
      </div>
    )
  }
})
