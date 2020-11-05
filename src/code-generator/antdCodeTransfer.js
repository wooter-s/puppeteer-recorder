
export const BaseSelectorType = {
  BUTTON: '.ant-btn',
  BUTTON_DETAIL: 'button.ant-btn span',

  ICON_MORE: '.anticon.anticon-more',
  ICON_DOWN: '.anticon.anticon-down',
  ICON_CLOSE: '.anticon.anticon-close',

  ANT_BREADCRUMB_LINK: '.ant-breadcrumb-link',
  ANT_DROPDOWN_LINK: '.ant-dropdown-link',
  ANT_DROPDOWN_MENU: '.ant-dropdown-menu',
  ANT_MENU_SUBMENU: '.ant-menu-submenu',
  ANT_MENU_ITEM: '.ant-menu-item',
  ANT_PAGINATION_ITEM: '.ant-pagination-item',
  ANT_PAGINATION_ITEM_LINK: '.ant-pagination-item-link',
  ANT_CHECKBOX_INPUT: '.ant-checkbox-input',
  ANT_CASCADER_PICKER: '.ant-cascader-picker',
  ANT_CASCADER_MENU_ITEM: '.ant-cascader-menu-item',
  ANT_CALENDAR_PICKER_INPUT: '.ant-calendar-picker-input',
  ANT_CALENDAR_PICKER_ICON: '.ant-calendar-picker-icon',
  ANT_CALENDAR_DATE: '.ant-calendar-date',
  ANT_CALENDAR_TODAY_BTN: '.ant-calendar-today-btn',
  ANT_CALENDAR_NEXT_MONTH_BTN: '.ant-calendar-next-month-btn',
  ANT_CALENDAR_PREV_MONTH_BTN: '.ant-calendar-prev-month-btn',
  ANT_CALENDAR_NEXT_YEAR_BTN: '.ant-calendar-next-year-btn',
  ANT_CALENDAR_PREV_YEAR_BTN: '.ant-calendar-prev-year-btn',
  ANT_CALENDAR_MONTH_PANEL_MONTH: '.ant-calendar-month-panel-month',
  ANT_CALENDAR_MONTH_PANEL_PREV_YEAR_BTN: '.ant-calendar-month-panel-prev-year-btn',
  ANT_CALENDAR_MONTH_PANEL_NEXT_YEAR_BTN: '.ant-calendar-month-panel-next-year-btn',
  ANT_CALENDAR_RANGE_PICKER_INPUT: '.ant-calendar-range-picker-input',
  ANT_INPUT: '.ant-input',
  ANT_INPUT_NUMBER_INPUT: '.ant-input-number-input',
  ANT_INPUT_NUMBER_HANDLER_UP: '.ant-input-number-handler-up',
  ANT_INPUT_NUMBER_HANDLER_DOWN: '.ant-input-number-handler-down',
  ANT_RADIO: '.ant-radio',
  ANT_RADIO_BUTTON_WRAPPER: '.ant-radio-button-wrapper',
  ANT_SELECT_SELECTION: '.ant-select-selection',
  ANT_SELECT_TREE_TREENODE_SWITCHER_CLOSE: '.ant-select-tree-treenode-switcher-close',
  ANT_SELECT_TREE_TREENODE_SWITCHER_OPEN: '.ant-select-tree-treenode-switcher-open',
  ANT_SELECT_DROPDOWN_MENU_ITEM: '.ant-select-dropdown-menu-item',
  ANT_SELECT_SELECTION__CHOICE__REMOVE: '.ant-select-selection__choice__remove',
  ANT_SELECT_SELECTION__CLEAR: '.ant-select-selection__clear',
  ANT_SELECT_TREE_SWITCHER: '.ant-select-tree-switcher',
  ANT_SELECT_TREE_NODE_CONTENT_WRAPPER: '.ant-select-tree-node-content-wrapper',
  ANT_TIME_PICKER_INPUT: '.ant-time-picker-input',
  ANT_TIME_PICKER_CLOSE: '.ant-time-picker > .anticon',

  ANT_COLLAPSE_HEADER: '.ant-collapse-header',
  ANT_TABS_TAB: '.ant-tabs-tab',
  ANT_TABS_CLOSE_X: '.ant-tabs-close-x',
  ANT_TABS_NEW_TAB: '.ant-tabs-new-tab',
  ANT_ALERT_CLOSE_ICON: '.ant-alert-close-icon',
  ANT_MODAL_CLOSE_X: '.ant-modal-close-x',

  SELECT: '.ant-select.ant-select-enabled .ant-select-selection__rendered',
  DIRECT_TREE_ORIGIN: '.ant-tree-node-content-wrapper',
  DIRECT_TREE: 'span.ant-tree-title span',
  TREE_NODE_TITLE: '.ant-select-tree-title',
  TREE_NODE_SWITCHER: '.ant-select-tree-switcher.ant-select-tree-switcher_close',
  TABLE_ITEM: 'td.ant-table-row-cell-break-word',
  DROPDOWN_LINK: 'a.ant-dropdown-link.ant-dropdown-trigger',
  DROPDOWN_SELECT_MENU_ITEM: '.ant-dropdown-menu-item'
}

export const BaseSelectorList = [
  // WOO TAG 按钮的顺序问题
  {
    displayName: '按钮group',
    valid: '.ant-btn-group',
    selectorCode: '.ant-btn-group > .ant-btn'
  },
  {
    displayName: '按钮',
    valid: '.ant-btn',
    selectorCode: '.ant-btn'
  },
  //    ------> icon
  {
    displayName: '更多icon',
    valid: '.anticon.anticon-more',
    selectorCode: '.anticon.anticon-more'
  },
  {
    displayName: '下icon',
    valid: '.anticon.anticon-down',
    selectorCode: '.anticon.anticon-down'
  },
  {
    displayName: '关闭icon',
    valid: '.anticon.anticon-close',
    selectorCode: '.anticon.anticon-close'
  }
]

export const NavTypeSelectorList = [
  //    ------> 面包屑导航
  {
    displayName: '面包屑',
    valid: '.ant-breadcrumb-link',
    selectorCode: '.ant-breadcrumb-link'
  },
  //    ------> Dropdown下拉菜单
  {
    displayName: '下拉菜单',
    valid: '.ant-dropdown-link',
    selectorCode: '.ant-dropdown-link'
  },
  {
    displayName: '下拉菜单选项',
    valid: '.ant-dropdown-menu',
    selectorCode: '.ant-dropdown-menu'
  },
  //    ------> Menu导航菜单
  {
    displayName: '导航菜单Group',
    valid: '.ant-menu-submenu',
    selectorCode: '.ant-menu-submenu'
  },
  {
    displayName: '导航菜单Item',
    valid: '.ant-menu-item',
    selectorCode: '.ant-menu-item'
  },
  //    ------> Pagination分页
  {
    displayName: '分页器上下页',
    valid: '.ant-pagination-item-link',
    selectorCode: 'ant-pagination-item-link'
  },
  {
    displayName: '分页项',
    valid: '.ant-pagination-item',
    selectorCode: '.ant-pagination-item'
  }
]

export const DataInputTypeSelectorList = [
  //    ------> Checkbox多选框
  {
    displayName: 'Checkbox多选框',
    valid: 'input.ant-checkbox-input',
    selectorCode: 'input.ant-checkbox-input'
  },
  //    ------> Cascader级联选择
  {
    displayName: 'Cascader级联选择',
    valid: '.ant-cascader-picker',
    selectorCode: '.ant-cascader-picker'
  },
  {
    displayName: 'Cascader选项',
    valid: '.ant-cascader-menu-item',
    selectorCode: '.ant-cascader-menu-item'
  },
  //    ------> DatePicker日期选择框
  {
    displayName: '日期选择框',
    valid: '.ant-calendar-picker-input',
    selectorCode: '.ant-calendar-picker-input'
  },
  {
    displayName: '日期选择框 -> 右边图标',
    valid: '.ant-calendar-picker-icon',
    selectorCode: '.ant-calendar-picker-icon'
  },
  {
    displayName: '日期选择框 -> 日期',
    valid: '.ant-calendar-date',
    selectorCode: '.ant-calendar-date'
  },
  {
    displayName: '日期选择框 -> 今天',
    valid: '.ant-calendar-today-btn',
    selectorCode: '.ant-calendar-today-btn'
  },
  {
    displayName: '日期选择框 -> 下月',
    valid: '.ant-calendar-next-month-btn',
    selectorCode: '.ant-calendar-next-month-btn'
  },
  {
    displayName: '日期选择框 -> 上月',
    valid: '.ant-calendar-prev-month-btn',
    selectorCode: '.ant-calendar-prev-month-btn'
  },
  {
    displayName: '日期选择框 -> 下年',
    valid: '.ant-calendar-next-year-btn',
    selectorCode: '.ant-calendar-next-year-btn'
  },
  {
    displayName: '日期选择框 -> 上年',
    valid: '.ant-calendar-prev-year-btn',
    selectorCode: '.ant-calendar-prev-year-btn'
  },
  {
    displayName: '月选择框 -> 月份',
    valid: '.ant-calendar-month-panel-month',
    selectorCode: '.ant-calendar-month-panel-month'
  },
  {
    displayName: '月选择框 -> 上年',
    valid: '.ant-calendar-month-panel-prev-year-btn',
    selectorCode: '.ant-calendar-month-panel-prev-year-btn'
  },
  {
    displayName: '月选择框 -> 下年',
    valid: '.ant-calendar-month-panel-next-year-btn',
    selectorCode: '.ant-calendar-month-panel-next-year-btn'
  },
  {
    displayName: '连续日期选择框',
    valid: '.ant-calendar-range-picker-input',
    selectorCode: '.ant-calendar-range-picker-input'
  },
  //    ------> InputNumber数字输入框
  {
    displayName: '数字输入框',
    valid: '.ant-input-number-input',
    selectorCode: '.ant-input-number-input'
  },
  // FIXME 要先hover在click
  {
    displayName: '数字输入框 -> 增加',
    valid: '.ant-input-number-handler-up',
    selectorCode: '.ant-input-number-handler-up'
  },
  // FIXME 要先hover在click
  {
    displayName: '数字输入框 -> 减少',
    valid: '.ant-input-number-handler-down',
    selectorCode: '.ant-input-number-handler-down'
  },
  //    ------> Form表单
  {
    displayName: '输入框',
    valid: '.ant-input',
    selectorCode: 'input.ant-input'
  },

  //    ------> Radio单选框
  {
    displayName: '按钮Radio',
    valid: '.ant-radio-button-wrapper',
    selectorCode: '.ant-radio-button-wrapper'
  },
  {
    displayName: 'Radio单选框',
    valid: '.ant-radio',
    selectorCode: '.ant-radio'
  },

  //    ------> Switch开关
  {
    displayName: 'Switch开关',
    valid: '.ant-switch',
    selectorCode: '.ant-switch'
  },
  //    ------> Select选择器
  {
    displayName: 'Select选择器 -> 选项',
    valid: '.ant-select-dropdown-menu-item',
    selectorCode: '.ant-select-dropdown-menu-item'
  },
  {
    displayName: 'Select选择器 -> 删除选项',
    valid: '.ant-select-selection__choice__remove',
    selectorCode: '.ant-select-selection__choice__remove'
  },
  {
    displayName: 'Select选择器',
    valid: '.ant-select-selection',
    selectorCode: '.ant-select-selection'
  },
  //    ------> TreeSelect树选择
  {
    displayName: '树选择 -> 删除选项',
    valid: '.ant-select-selection__clear',
    selectorCode: '.ant-select-selection__clear'
  },
  {
    displayName: '树选择 -> 选项展开器',
    valid: '.ant-select-tree-switcher',
    selectorCode: '.ant-select-tree-switcher'
  },
  {
    displayName: '树选择 -> 选项',
    valid: '.ant-select-tree-node-content-wrapper',
    selectorCode: '.ant-select-tree-node-content-wrapper'
  },
  {
    displayName: '树选择 -> 选项开',
    valid: BaseSelectorType.ANT_SELECT_TREE_TREENODE_SWITCHER_OPEN,
    selectorCode: BaseSelectorType.ANT_SELECT_TREE_TREENODE_SWITCHER_OPEN
  },
  {
    displayName: '树选择 -> 选项关',
    valid: BaseSelectorType.ANT_SELECT_TREE_TREENODE_SWITCHER_CLOSE,
    selectorCode: BaseSelectorType.ANT_SELECT_TREE_TREENODE_SWITCHER_CLOSE
  },
  //    ------> TimePicker时间选择框
  {
    displayName: '时间选择框',
    valid: '.ant-time-picker-input',
    selectorCode: '.ant-time-picker-input'
  },
  {
    displayName: '时间选择框 -> 删除选项',
    valid: '.ant-time-picker > .anticon',
    selectorCode: '.ant-time-picker > .anticon'
  }
  // TODO 确认时间选择器能正常选择
]

export const DataDisplayTypeSelectorList = [
  //    ------> Collapse折叠面板
  {
    displayName: 'Collapse折叠面板',
    valid: '.ant-collapse-header',
    selectorCode: '.ant-collapse-header'
  },
  //    ------> tab
  {
    displayName: 'tab',
    valid: '.ant-tabs-tab',
    selectorCode: '.ant-tabs-tab'
  },
  {
    displayName: 'tab -> 关闭',
    valid: '.ant-tabs-close-x',
    selectorCode: '.ant-tabs-close-x'
  },
  {
    displayName: 'tab -> 新开',
    valid: '.ant-tabs-new-tab',
    selectorCode: '.ant-tabs-new-tab'
  }
]

export const FeedBackTypeSelectorList = [
  //    ------> Alert警告提示
  {
    displayName: 'Alert警告提示 -> 关闭按钮',
    valid: '.ant-alert-close-icon',
    selectorCode: '.ant-alert-close-icon'
  },
  //    ------> Modal对话框
  {
    displayName: 'Modal对话框 -> 右上角关闭',
    valid: '.ant-modal-close-x',
    selectorCode: '.ant-modal-close-x'
  }
]

export const SelectorList = [
  ...BaseSelectorList,
  ...NavTypeSelectorList,
  ...DataInputTypeSelectorList,
  ...DataDisplayTypeSelectorList,
  ...FeedBackTypeSelectorList
]

const transformSelectorToAntdSelctor = (selector) => {
  // 去掉选择项
  // selector.replace(/:nth-child\(\d+\)/g, '')
  return selector
  if (!selector) {
    return selector
  }
  const target = SelectorList.find((s) => selector.includes(s.valid))
  return target ? target.selectorCode : selector
}

export default transformSelectorToAntdSelctor
