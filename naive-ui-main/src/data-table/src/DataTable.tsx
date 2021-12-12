import {
  h,
  computed,
  defineComponent,
  ref,
  provide,
  PropType,
  ExtractPropTypes,
  toRef,
  renderSlot,
  CSSProperties,
  Transition
} from 'vue'
import { createId } from 'seemly'
import { useConfig, useLocale, useTheme } from '../../_mixins'
import type { ThemeProps } from '../../_mixins'
import { NBaseLoading } from '../../_internal'
import { NEmpty } from '../../empty'
import { NPagination } from '../../pagination'
import { PaginationProps } from '../../pagination/src/Pagination'
import { warn, createKey } from '../../_utils'
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils'
import { dataTableLight, DataTableTheme } from '../styles'
import MainTable from './MainTable'
import { useCheck } from './use-check'
import { useTableData } from './use-table-data'
import { useScroll } from './use-scroll'
import type {
  CreateRowClassName,
  CreateRowKey,
  OnUpdateCheckedRowKeys,
  OnUpdateSorter,
  RowKey,
  TableColumns,
  RowData,
  OnUpdateFilters,
  MainTableRef,
  DataTableInst,
  OnUpdateExpandedRowKeys,
  CreateSummary,
  CreateRowProps
} from './interface'
import { dataTableInjectionKey } from './interface'
import style from './styles/index.cssr'
import { useGroupHeader } from './use-group-header'
import { useExpand } from './use-expand'

export const dataTableProps = {
  ...(useTheme.props as ThemeProps<DataTableTheme>),
  pagination: {
    type: [Object, Boolean] as PropType<false | PaginationProps>,
    default: false
  },
  minHeight: [Number, String] as PropType<string | number>,
  maxHeight: [Number, String] as PropType<string | number>,
  // Use any type as row data to make prop data acceptable
  columns: {
    type: Array as PropType<TableColumns<any>>,
    default: () => []
  },
  rowClassName: [String, Function] as PropType<
  string | CreateRowClassName<any>
  >,
  rowProps: Function as PropType<CreateRowProps<any>>,
  rowKey: Function as PropType<CreateRowKey<any>>,
  summary: [Function] as PropType<CreateSummary<any>>,
  data: {
    type: Array as PropType<RowData[]>,
    default: () => []
  },
  loading: Boolean,
  bordered: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  bottomBordered: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  striped: Boolean,
  scrollX: [Number, String] as PropType<string | number>,
  defaultCheckedRowKeys: {
    type: Array as PropType<RowKey[]>,
    default: () => []
  },
  checkedRowKeys: Array as PropType<RowKey[]>,
  singleLine: {
    type: Boolean,
    default: true
  },
  singleColumn: Boolean,
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium'
  },
  remote: Boolean,
  defaultExpandedRowKeys: {
    type: Array as PropType<RowKey[]>,
    default: []
  },
  expandedRowKeys: Array as PropType<RowKey[]>,
  virtualScroll: Boolean,
  tableLayout: {
    type: String as PropType<'auto' | 'fixed'>,
    default: 'auto'
  },
  cascade: {
    type: Boolean,
    default: true
  },
  childrenKey: {
    type: String,
    default: 'children'
  },
  indent: {
    type: Number,
    default: 16
  },
  flexHeight: Boolean,
  'onUpdate:page': [Function, Array] as PropType<
  PaginationProps['onUpdate:page']
  >,
  onUpdatePage: [Function, Array] as PropType<PaginationProps['onUpdate:page']>,
  'onUpdate:pageSize': [Function, Array] as PropType<
  PaginationProps['onUpdate:pageSize']
  >,
  onUpdatePageSize: [Function, Array] as PropType<
  PaginationProps['onUpdate:pageSize']
  >,
  'onUpdate:sorter': [Function, Array] as PropType<MaybeArray<OnUpdateSorter>>,
  onUpdateSorter: [Function, Array] as PropType<MaybeArray<OnUpdateSorter>>,
  'onUpdate:filters': [Function, Array] as PropType<
  MaybeArray<OnUpdateFilters>
  >,
  onUpdateFilters: [Function, Array] as PropType<MaybeArray<OnUpdateFilters>>,
  'onUpdate:checkedRowKeys': [Function, Array] as PropType<
  MaybeArray<OnUpdateCheckedRowKeys>
  >,
  onUpdateCheckedRowKeys: [Function, Array] as PropType<
  MaybeArray<OnUpdateCheckedRowKeys>
  >,
  'onUpdate:expandedRowKeys': [Function, Array] as PropType<
  MaybeArray<OnUpdateExpandedRowKeys>
  >,
  onUpdateExpandedRowKeys: [Function, Array] as PropType<
  MaybeArray<OnUpdateExpandedRowKeys>
  >,
  // deprecated
  onPageChange: {
    type: [Function, Array] as PropType<PaginationProps['onUpdate:page']>,
    validator: () => {
      if (__DEV__) {
        warn(
          'data-table',
          '`on-page-change` is deprecated, please use `on-update:page` instead.'
        )
      }
      return true
    },
    default: undefined
  },
  onPageSizeChange: {
    type: [Function, Array] as PropType<PaginationProps['onUpdate:pageSize']>,
    validator: () => {
      if (__DEV__) {
        warn(
          'data-table',
          '`on-page-size-change` is deprecated, please use `on-update:page-size` instead.'
        )
      }
      return true
    },
    default: undefined
  },
  onSorterChange: {
    type: [Function, Array] as PropType<MaybeArray<OnUpdateSorter> | undefined>,
    validator: () => {
      if (__DEV__) {
        warn(
          'data-table',
          '`on-sorter-change` is deprecated, please use `on-update:sorter` instead.'
        )
      }
      return true
    },
    default: undefined
  },
  onFiltersChange: {
    type: [Function, Array] as PropType<
    MaybeArray<OnUpdateFilters> | undefined
    >,
    validator: () => {
      if (__DEV__) {
        warn(
          'data-table',
          '`on-filters-change` is deprecated, please use `on-update:filters` instead.'
        )
      }
      return true
    },
    default: undefined
  },
  onCheckedRowKeysChange: {
    type: [Function, Array] as PropType<
    MaybeArray<OnUpdateCheckedRowKeys> | undefined
    >,
    validator: () => {
      if (__DEV__) {
        warn(
          'data-table',
          '`on-checked-row-keys-change` is deprecated, please use `on-update:checked-row-keys` instead.'
        )
      }
      return true
    },
    default: undefined
  }
} as const

export type DataTableProps = ExtractPublicPropTypes<typeof dataTableProps>
export type DataTableSetupProps = ExtractPropTypes<typeof dataTableProps>

export default defineComponent({
  name: 'DataTable',
  alias: ['AdvancedTable'],
  props: dataTableProps,
  setup (props) {
    const { mergedBorderedRef, mergedClsPrefixRef } = useConfig(props)
    const mergedBottomBorderedRef = computed(() => {
      const { bottomBordered } = props
      // do not add bottom bordered class if bordered is true
      // since border is displayed on wrapper
      if (mergedBorderedRef.value) return false
      if (bottomBordered !== undefined) return bottomBordered
      return true
    })
    const themeRef = useTheme(
      'DataTable',
      'DataTable',
      style,
      dataTableLight,
      props,
      mergedClsPrefixRef
    )
    const bodyWidthRef = ref<number | null>(null)
    const scrollPartRef = ref<'head' | 'body'>('body')
    const mainTableInstRef = ref<MainTableRef | null>(null)
    const { rowsRef, colsRef, dataRelatedColsRef, hasEllipsisRef } =
      useGroupHeader(props)
    const {
      treeMateRef,
      mergedCurrentPageRef,
      paginatedDataRef,
      rawPaginatedDataRef,
      selectionColumnRef,
      hoverKeyRef,
      mergedPaginationRef,
      mergedFilterStateRef,
      mergedSortStateRef,
      firstContentfulColIndexRef,
      doUpdateFilters,
      deriveNextSorter,
      filter,
      filters,
      clearFilter,
      clearFilters,
      clearSorter,
      page,
      sort
    } = useTableData(props, { dataRelatedColsRef })
    const {
      doCheckAll,
      doUncheckAll,
      doCheck,
      doUncheck,
      headerCheckboxDisabledRef,
      someRowsCheckedRef,
      allRowsCheckedRef,
      mergedCheckedRowKeySetRef,
      mergedInderminateRowKeySetRef
    } = useCheck(props, {
      selectionColumnRef,
      treeMateRef,
      paginatedDataRef
    })
    const {
      mergedExpandedRowKeysRef,
      renderExpandRef,
      doUpdateExpandedRowKeys
    } = useExpand(props)
    const {
      handleTableBodyScroll,
      handleTableHeaderScroll,
      syncScrollState,
      setHeaderScrollLeft,
      leftActiveFixedColKeyRef,
      rightActiveFixedColKeyRef,
      leftFixedColumnsRef,
      rightFixedColumnsRef,
      fixedColumnLeftMapRef,
      fixedColumnRightMapRef
    } = useScroll(props, {
      scrollPartRef,
      bodyWidthRef,
      mainTableInstRef,
      mergedCurrentPageRef
    })
    const { localeRef } = useLocale('DataTable')
    const mergedTableLayoutRef = computed(() => {
      // Layout
      // virtual |descrete header | ellpisis => fixed
      //    = virtual | maxHeight | ellpisis => fixed
      if (
        props.virtualScroll ||
        props.flexHeight ||
        props.maxHeight !== undefined ||
        hasEllipsisRef.value
      ) {
        return 'fixed'
      }
      return props.tableLayout
    })
    provide(dataTableInjectionKey, {
      indentRef: toRef(props, 'indent'),
      firstContentfulColIndexRef,
      bodyWidthRef,
      componentId: createId(),
      hoverKeyRef,
      mergedClsPrefixRef,
      mergedThemeRef: themeRef,
      scrollXRef: computed(() => props.scrollX),
      rowsRef,
      colsRef,
      paginatedDataRef,
      leftActiveFixedColKeyRef,
      rightActiveFixedColKeyRef,
      leftFixedColumnsRef,
      rightFixedColumnsRef,
      fixedColumnLeftMapRef,
      fixedColumnRightMapRef,
      mergedCurrentPageRef,
      someRowsCheckedRef,
      allRowsCheckedRef,
      mergedSortStateRef,
      mergedFilterStateRef,
      loadingRef: toRef(props, 'loading'),
      rowClassNameRef: toRef(props, 'rowClassName'),
      mergedCheckedRowKeySetRef,
      mergedExpandedRowKeysRef,
      mergedInderminateRowKeySetRef,
      localeRef,
      scrollPartRef,
      rowKeyRef: toRef(props, 'rowKey'),
      renderExpandRef,
      summaryRef: toRef(props, 'summary'),
      virtualScrollRef: toRef(props, 'virtualScroll'),
      rowPropsRef: toRef(props, 'rowProps'),
      stripedRef: toRef(props, 'striped'),
      checkOptionsRef: computed(() => {
        const { value: selectionColumn } = selectionColumnRef
        return selectionColumn?.options
      }),
      rawPaginatedDataRef,
      hasChildrenRef: computed(() => {
        return treeMateRef.value.maxLevel > 0
      }),
      filterMenuCssVarsRef: computed(() => {
        const {
          self: { actionDividerColor, actionPadding, actionButtonMargin }
        } = themeRef.value
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return {
          '--action-padding': actionPadding,
          '--action-button-margin': actionButtonMargin,
          '--action-divider-color': actionDividerColor
        } as CSSProperties
      }),
      mergedTableLayoutRef,
      maxHeightRef: toRef(props, 'maxHeight'),
      minHeightRef: toRef(props, 'minHeight'),
      flexHeightRef: toRef(props, 'flexHeight'),
      headerCheckboxDisabledRef,
      syncScrollState,
      doUpdateFilters,
      deriveNextSorter,
      doCheck,
      doUncheck,
      doCheckAll,
      doUncheckAll,
      doUpdateExpandedRowKeys,
      handleTableHeaderScroll,
      handleTableBodyScroll,
      setHeaderScrollLeft
    })
    const exposedMethods: DataTableInst = {
      filter,
      filters,
      clearFilters,
      clearSorter,
      page,
      sort,
      clearFilter
    }
    return {
      mainTableInstRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      paginatedData: paginatedDataRef,
      mergedBordered: mergedBorderedRef,
      mergedBottomBordered: mergedBottomBorderedRef,
      mergedPagination: mergedPaginationRef,
      ...exposedMethods,
      cssVars: computed(() => {
        const { size } = props
        const {
          common: { cubicBezierEaseInOut },
          self: {
            borderColor,
            tdColorHover,
            thColor,
            thColorHover,
            tdColor,
            tdTextColor,
            thTextColor,
            thFontWeight,
            thButtonColorHover,
            thIconColor,
            thIconColorActive,
            filterSize,
            borderRadius,
            lineHeight,
            tdColorModal,
            thColorModal,
            borderColorModal,
            thColorHoverModal,
            tdColorHoverModal,
            borderColorPopover,
            thColorPopover,
            tdColorPopover,
            tdColorHoverPopover,
            thColorHoverPopover,
            paginationMargin,
            emptyPadding,
            boxShadowAfter,
            boxShadowBefore,
            sorterSize,
            loadingColor,
            loadingSize,
            opacityLoading,
            tdColorStriped,
            tdColorStripedModal,
            tdColorStripedPopover,
            [createKey('fontSize', size)]: fontSize,
            [createKey('thPadding', size)]: thPadding,
            [createKey('tdPadding', size)]: tdPadding
          }
        } = themeRef.value
        return {
          '--font-size': fontSize,
          '--th-padding': thPadding,
          '--td-padding': tdPadding,
          '--bezier': cubicBezierEaseInOut,
          '--border-radius': borderRadius,
          '--line-height': lineHeight,
          '--border-color': borderColor,
          '--border-color-modal': borderColorModal,
          '--border-color-popover': borderColorPopover,
          '--th-color': thColor,
          '--th-color-hover': thColorHover,
          '--th-color-modal': thColorModal,
          '--th-color-hover-modal': thColorHoverModal,
          '--th-color-popover': thColorPopover,
          '--th-color-hover-popover': thColorHoverPopover,
          '--td-color': tdColor,
          '--td-color-hover': tdColorHover,
          '--td-color-modal': tdColorModal,
          '--td-color-hover-modal': tdColorHoverModal,
          '--td-color-popover': tdColorPopover,
          '--td-color-hover-popover': tdColorHoverPopover,
          '--th-text-color': thTextColor,
          '--td-text-color': tdTextColor,
          '--th-font-weight': thFontWeight,
          '--th-button-color-hover': thButtonColorHover,
          '--th-icon-color': thIconColor,
          '--th-icon-color-active': thIconColorActive,
          '--filter-size': filterSize,
          '--pagination-margin': paginationMargin,
          '--empty-padding': emptyPadding,
          '--box-shadow-before': boxShadowBefore,
          '--box-shadow-after': boxShadowAfter,
          '--sorter-size': sorterSize,
          '--loading-size': loadingSize,
          '--loading-color': loadingColor,
          '--opacity-loading': opacityLoading,
          '--td-color-striped': tdColorStriped,
          '--td-color-striped-modal': tdColorStripedModal,
          '--td-color-striped-popover': tdColorStripedPopover
        }
      })
    }
  },
  render () {
    const { mergedClsPrefix } = this
    return (
      <div
        class={[
          `${mergedClsPrefix}-data-table`,
          {
            [`${mergedClsPrefix}-data-table--bordered`]: this.mergedBordered,
            [`${mergedClsPrefix}-data-table--bottom-bordered`]:
              this.mergedBottomBordered,
            [`${mergedClsPrefix}-data-table--single-line`]: this.singleLine,
            [`${mergedClsPrefix}-data-table--single-column`]: this.singleColumn,
            [`${mergedClsPrefix}-data-table--loading`]: this.loading,
            [`${mergedClsPrefix}-data-table--flex-height`]: this.flexHeight
          }
        ]}
        style={this.cssVars as CSSProperties}
      >
        <div class={`${mergedClsPrefix}-data-table-wrapper`}>
          <MainTable ref="mainTableInstRef">
            {{
              default: () =>
                this.paginatedData.length === 0 ? (
                  <div
                    class={[
                      `${mergedClsPrefix}-data-table-empty`,
                      this.loading &&
                        `${mergedClsPrefix}-data-table-empty--hide`
                    ]}
                  >
                    {renderSlot(this.$slots, 'empty', undefined, () => [
                      <NEmpty
                        theme={this.mergedTheme.peers.Empty}
                        themeOverrides={this.mergedTheme.peerOverrides.Empty}
                      />
                    ])}
                  </div>
                ) : null
            }}
          </MainTable>
        </div>
        {this.pagination ? (
          <div class={`${mergedClsPrefix}-data-table__pagination`}>
            <NPagination
              theme={this.mergedTheme.peers.Pagination}
              themeOverrides={this.mergedTheme.peerOverrides.Pagination}
              disabled={this.loading}
              {...this.mergedPagination}
            />
          </div>
        ) : null}
        <Transition name="fade-in-scale-up-transition">
          {{
            default: () => {
              return this.loading ? (
                <NBaseLoading clsPrefix={mergedClsPrefix} strokeWidth={20} />
              ) : null
            }
          }}
        </Transition>
      </div>
    )
  }
})
