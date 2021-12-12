import { inject, computed, ref, ComputedRef } from 'vue'
import { get } from 'lodash-es'
import type { FormItemSetupProps } from './FormItem'
import { formInjectionKey } from './interface'
import type { Size, FormItemRule } from './interface'
import { formatLength } from '../../_utils'

export function formItemSize (props: FormItemSetupProps): {
  mergedSize: ComputedRef<Size>
} {
  const NForm = inject(formInjectionKey, null)
  return {
    mergedSize: computed(() => {
      if (props.size !== undefined) return props.size
      if (NForm?.size !== undefined) return NForm.size
      return 'medium'
    })
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function formItemMisc (props: FormItemSetupProps) {
  const NForm = inject(formInjectionKey, null)
  const mergedLabelWidthRef = computed(() => {
    if (mergedLabelPlacementRef.value === 'top') return
    const { labelWidth } = props

    if (labelWidth !== undefined) {
      return formatLength(labelWidth)
    }

    if (NForm?.labelWidth !== undefined) {
      return formatLength(NForm.labelWidth)
    }
    return undefined
  })
  const mergedLabelPlacementRef = computed(() => {
    const { labelPlacement } = props
    if (labelPlacement !== undefined) return labelPlacement
    if (NForm?.labelPlacement) return NForm.labelPlacement
    return 'top'
  })
  const mergedLabelAlignRef = computed(() => {
    const { labelAlign } = props
    if (labelAlign) return labelAlign
    if (NForm?.labelAlign) return NForm.labelAlign
    return undefined
  })
  const mergedLabelStyleRef = computed(() => {
    return [
      {
        width: mergedLabelWidthRef.value
      },
      props.labelStyle
    ]
  })
  const mergedShowRequireMarkRef = computed(() => {
    const { showRequireMark } = props
    if (showRequireMark !== undefined) return showRequireMark
    return NForm?.showRequireMark
  })
  const mergedRequireMarkPlacementRef = computed(() => {
    const { requireMarkPlacement } = props
    if (requireMarkPlacement !== undefined) return requireMarkPlacement
    return NForm?.requireMarkPlacement
  })
  const validationErroredRef = ref(false)
  const mergedValidationStatusRef = computed(() => {
    const { validationStatus } = props
    if (validationStatus !== undefined) return validationStatus
    if (validationErroredRef.value) return 'error'
    return undefined
  })
  const mergedShowFeedbackRef = computed(() => {
    const { showFeedback } = props
    if (showFeedback !== undefined) return showFeedback
    if (NForm?.showFeedback !== undefined) return NForm.showFeedback
    return true
  })
  const mergedShowLabelRef = computed(() => {
    const { showLabel } = props
    if (showLabel !== undefined) return showLabel
    if (NForm?.showLabel !== undefined) return NForm.showLabel
    return true
  })
  return {
    validationErrored: validationErroredRef,
    mergedLabelStyle: mergedLabelStyleRef,
    mergedLabelPlacement: mergedLabelPlacementRef,
    mergedLabelAlign: mergedLabelAlignRef,
    mergedShowRequireMark: mergedShowRequireMarkRef,
    mergedRequireMarkPlacement: mergedRequireMarkPlacementRef,
    mergedValidationStatus: mergedValidationStatusRef,
    mergedShowFeedback: mergedShowFeedbackRef,
    mergedShowLabel: mergedShowLabelRef
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function formItemRule (props: FormItemSetupProps) {
  const NForm = inject(formInjectionKey, null)
  const compatibleRulePathRef = computed(() => {
    const { rulePath } = props
    if (rulePath !== undefined) return rulePath
    const { path } = props
    if (path !== undefined) return path
    return undefined
  })
  const mergedRulesRef = computed(() => {
    const rules = []
    const { rule } = props
    if (rule !== undefined) {
      if (Array.isArray(rule)) rules.push(...rule)
      else rules.push(rule)
    }
    if (NForm) {
      const { rules: formRules } = NForm
      const { value: rulePath } = compatibleRulePathRef
      if (formRules !== undefined && rulePath !== undefined) {
        const formRule = get(formRules, rulePath)
        if (formRule !== undefined) {
          if (Array.isArray(formRule)) {
            rules.push(...formRule)
          } else {
            // terminate object must be a form item rule
            rules.push(formRule as FormItemRule)
          }
        }
      }
    }
    return rules
  })
  const hasRequiredRuleRef = computed(() => {
    return mergedRulesRef.value.some((rule) => rule.required)
  })
  // deprecated
  const mergedRequiredRef = computed(() => {
    return hasRequiredRuleRef.value || props.required
  })
  return {
    mergedRules: mergedRulesRef,
    mergedRequired: mergedRequiredRef
  }
}
