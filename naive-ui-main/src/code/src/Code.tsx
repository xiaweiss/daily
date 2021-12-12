import {
  defineComponent,
  h,
  toRef,
  watch,
  onMounted,
  ref,
  computed,
  PropType,
  CSSProperties
} from 'vue'
import { useTheme, useHljs, Hljs, useConfig } from '../../_mixins'
import type { ThemeProps } from '../../_mixins'
import { codeLight } from '../styles'
import type { CodeTheme } from '../styles'
import style from './styles/index.cssr'
import type { ExtractPublicPropTypes } from '../../_utils'

const codeProps = {
  ...(useTheme.props as ThemeProps<CodeTheme>),
  language: String,
  code: {
    type: String,
    default: ''
  },
  trim: {
    type: Boolean,
    default: true
  },
  hljs: Object as PropType<Hljs>,
  uri: Boolean,
  inline: Boolean,
  // In n-log, we only need to mount code's style for highlight
  internalFontSize: Number,
  internalNoHighlight: Boolean
}

export type CodeProps = ExtractPublicPropTypes<typeof codeProps>

export default defineComponent({
  name: 'Code',
  props: codeProps,
  setup (props, { slots }) {
    const { internalNoHighlight } = props
    const { mergedClsPrefixRef } = useConfig()
    const codeRef = ref<HTMLElement | null>(null)
    const hljsRef = internalNoHighlight ? { value: undefined } : useHljs(props)
    const createCodeHtml = (
      language: string,
      code: string,
      trim: boolean
    ): string | null => {
      const { value: hljs } = hljsRef
      if (!hljs) {
        return null
      }
      if (!(language && hljs.getLanguage(language))) {
        return null
      }
      return hljs.highlight(trim ? code.trim() : code, {
        language
      }).value
    }
    const setCode = (): void => {
      if (slots.default) return
      const { value: codeEl } = codeRef
      if (!codeEl) return
      const { language } = props
      const code = props.uri
        ? window.decodeURIComponent(props.code)
        : props.code
      if (language) {
        const html = createCodeHtml(language, code, props.trim)
        if (html !== null) {
          codeEl.innerHTML = props.inline ? html : `<pre>${html}</pre>`
          return
        }
      }
      if (props.inline) {
        codeEl.textContent = code
        return
      }
      const warp = document.createElement('pre')
      warp.textContent = code
      codeEl.appendChild(warp)
    }
    onMounted(setCode)
    watch(toRef(props, 'language'), setCode)
    watch(toRef(props, 'code'), setCode)
    if (!internalNoHighlight) watch(hljsRef, setCode)
    const themeRef = useTheme(
      'Code',
      'Code',
      style,
      codeLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      codeRef,
      cssVars: computed(() => {
        const {
          common: { cubicBezierEaseInOut, fontFamilyMono },
          self: {
            textColor,
            fontSize,
            fontWeightStrong,
            // extracted from hljs atom-one-light.scss
            'mono-3': $1,
            'hue-1': $2,
            'hue-2': $3,
            'hue-3': $4,
            'hue-4': $5,
            'hue-5': $6,
            'hue-5-2': $7,
            'hue-6': $8,
            'hue-6-2': $9
          }
        } = themeRef.value
        const { internalFontSize } = props
        return {
          '--font-size': internalFontSize ? `${internalFontSize}px` : fontSize,
          '--font-family': fontFamilyMono,
          '--font-weight-strong': fontWeightStrong,
          '--bezier': cubicBezierEaseInOut,
          '--text-color': textColor,
          '--mono-3': $1,
          '--hue-1': $2,
          '--hue-2': $3,
          '--hue-3': $4,
          '--hue-4': $5,
          '--hue-5': $6,
          '--hue-5-2': $7,
          '--hue-6': $8,
          '--hue-6-2': $9
        }
      })
    }
  },
  render () {
    const { mergedClsPrefix } = this
    return (
      <code
        class={`${mergedClsPrefix}-code`}
        style={this.cssVars as CSSProperties}
        ref="codeRef"
      >
        {this.$slots}
      </code>
    )
  }
})
