var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { FormattedMessage as M } from 'react-intl';
import { selectRender } from './select-renderers';

export default {
  // booleanValueRender
  valRender: function valRender(col, rowIndex, valueRender) {
    return valueRender(rowIndex, function (v) {
      return React.createElement(M, _extends({ id: v ? 'Grid.Yes' : 'Grid.No' }, col.renderComponentProps));
    });
  },

  // booleanCellEdit
  cellEdit: function cellEdit(col, column, rowIndex, tabIndex, gridId, selectOptions, selectTranslations, valueParser, functions, getComponentDisabledState) {
    var cellName = 'edit';
    var booleanProps = _extends({
      name: 'ocDatagridEditInput-' + gridId + '-' + column.columnKey + '-' + rowIndex,
      options: selectOptions,
      value: functions.getItemValue(rowIndex, col, selectOptions),
      onChange: functions.onCellValueChange(rowIndex, col, valueParser),
      onBlur: functions.onCellBlur(rowIndex, col),
      onFocus: functions.onCellFocus(cellName, col.componentType, rowIndex, column.columnKey),
      isSearchable: false,
      isClearable: !col.isRequired,
      backSpaceRemovesValue: false,
      tabSelectsValue: false,
      openMenuOnFocus: true,
      innerRef: functions.handleCellRef(rowIndex, col),
      isDisabled: getComponentDisabledState(rowIndex, col, cellName),
      tabIndex: tabIndex
    }, col.editComponentProps, selectTranslations);
    return selectRender(_extends({}, booleanProps));
  },

  // booleanCellCreate
  cellCreate: function cellCreate(col, column, rowIndex, tabIndex, gridId, selectOptions, selectTranslations, valueParser, functions, getComponentDisabledState) {
    var cellName = 'create';
    // closeOnMenuSelect
    var booleanProps = _extends({
      name: 'ocDatagridCreateInput-' + gridId + '-' + column.columnKey + '-' + rowIndex,
      options: selectOptions,
      value: functions.getItemValue(rowIndex, col, selectOptions),
      onChange: functions.onCellValueChange(rowIndex, col, valueParser),
      onBlur: functions.onCellBlur(rowIndex, col),
      onKeyDown: functions.onCellKeyDown,
      isSearchable: false,
      isClearable: !col.isRequired,
      backspaceRemovesValue: false,
      tabSelectsValue: false,
      openOnFocus: true,
      innerRef: functions.handleCellRef(rowIndex, col),
      isDisabled: getComponentDisabledState(rowIndex, col, cellName),
      tabIndex: tabIndex
    }, col.createComponentProps, selectTranslations);
    return selectRender(_extends({}, booleanProps));
  },

  // booleanCellFilter
  cellFilter: function cellFilter(col, column, tabIndex, gridId, selectOptions, selectTranslations, filterValueParser, functions) {
    var booleanProps = _extends({
      name: 'ocDatagridFilterInput-' + gridId + '-' + column.columnKey,
      options: selectOptions,
      value: functions.getItemValue(col, selectOptions),
      onChange: functions.onCellValueChange(col, filterValueParser),
      isSearchable: false,
      isClearable: true,
      tabSelectsValue: false,
      openMenuOnFocus: true,
      tabIndex: tabIndex
    }, col.filterComponentProps, selectTranslations);
    return selectRender(_extends({}, booleanProps));
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kYXRhZ3JpZC9jb2x1bW4tc2VydmljZS9jb2x1bW4tdHlwZXMvYm9vbGVhbi1yZW5kZXJlcnMuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybWF0dGVkTWVzc2FnZSIsIk0iLCJzZWxlY3RSZW5kZXIiLCJ2YWxSZW5kZXIiLCJjb2wiLCJyb3dJbmRleCIsInZhbHVlUmVuZGVyIiwidiIsInJlbmRlckNvbXBvbmVudFByb3BzIiwiY2VsbEVkaXQiLCJjb2x1bW4iLCJ0YWJJbmRleCIsImdyaWRJZCIsInNlbGVjdE9wdGlvbnMiLCJzZWxlY3RUcmFuc2xhdGlvbnMiLCJ2YWx1ZVBhcnNlciIsImZ1bmN0aW9ucyIsImdldENvbXBvbmVudERpc2FibGVkU3RhdGUiLCJjZWxsTmFtZSIsImJvb2xlYW5Qcm9wcyIsIm5hbWUiLCJjb2x1bW5LZXkiLCJvcHRpb25zIiwidmFsdWUiLCJnZXRJdGVtVmFsdWUiLCJvbkNoYW5nZSIsIm9uQ2VsbFZhbHVlQ2hhbmdlIiwib25CbHVyIiwib25DZWxsQmx1ciIsIm9uRm9jdXMiLCJvbkNlbGxGb2N1cyIsImNvbXBvbmVudFR5cGUiLCJpc1NlYXJjaGFibGUiLCJpc0NsZWFyYWJsZSIsImlzUmVxdWlyZWQiLCJiYWNrU3BhY2VSZW1vdmVzVmFsdWUiLCJ0YWJTZWxlY3RzVmFsdWUiLCJvcGVuTWVudU9uRm9jdXMiLCJpbm5lclJlZiIsImhhbmRsZUNlbGxSZWYiLCJpc0Rpc2FibGVkIiwiZWRpdENvbXBvbmVudFByb3BzIiwiY2VsbENyZWF0ZSIsIm9uS2V5RG93biIsIm9uQ2VsbEtleURvd24iLCJiYWNrc3BhY2VSZW1vdmVzVmFsdWUiLCJvcGVuT25Gb2N1cyIsImNyZWF0ZUNvbXBvbmVudFByb3BzIiwiY2VsbEZpbHRlciIsImZpbHRlclZhbHVlUGFyc2VyIiwiZmlsdGVyQ29tcG9uZW50UHJvcHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNB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cEMsRUFBeUNjLFFBQXpDLENBYlI7QUFjSlA7QUFkSSxPQWVEUCxJQUFJMkMsb0JBZkgsRUFnQkRqQyxrQkFoQkMsQ0FBTjtBQWtCQSxXQUFPWiwwQkFBa0JpQixZQUFsQixFQUFQO0FBQ0QsR0E3RVk7O0FBOEViO0FBQ0E2QixZQS9FYSxzQkFnRlg1QyxHQWhGVyxFQWlGWE0sTUFqRlcsRUFrRlhDLFFBbEZXLEVBbUZYQyxNQW5GVyxFQW9GWEMsYUFwRlcsRUFxRlhDLGtCQXJGVyxFQXNGWG1DLGlCQXRGVyxFQXVGWGpDLFNBdkZXLEVBd0ZYO0FBQ0EsUUFBTUc7QUFDSkMsdUNBQStCUixNQUEvQixTQUF5Q0YsT0FBT1csU0FENUM7QUFFSkMsZUFBU1QsYUFGTDtBQUdKVSxhQUFPUCxVQUFVUSxZQUFWLENBQXVCcEIsR0FBdkIsRUFBNEJTLGFBQTVCLENBSEg7QUFJSlksZ0JBQVVULFVBQVVVLGlCQUFWLENBQTRCdEIsR0FBNUIsRUFBaUM2QyxpQkFBakMsQ0FKTjtBQUtKakIsb0JBQWMsS0FMVjtBQU1KQyxtQkFBYSxJQU5UO0FBT0pHLHVCQUFpQixLQVBiO0FBUUpDLHVCQUFpQixJQVJiO0FBU0oxQjtBQVRJLE9BVURQLElBQUk4QyxvQkFWSCxFQVdEcEMsa0JBWEMsQ0FBTjtBQWFBLFdBQU9aLDBCQUFrQmlCLFlBQWxCLEVBQVA7QUFDRDtBQXZHWSxDQUFmIiwiZmlsZSI6ImJvb2xlYW4tcmVuZGVyZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgYXMgTSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHsgc2VsZWN0UmVuZGVyIH0gZnJvbSAnLi9zZWxlY3QtcmVuZGVyZXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBib29sZWFuVmFsdWVSZW5kZXJcbiAgdmFsUmVuZGVyKGNvbCwgcm93SW5kZXgsIHZhbHVlUmVuZGVyKSB7XG4gICAgcmV0dXJuIHZhbHVlUmVuZGVyKFxuICAgICAgcm93SW5kZXgsXG4gICAgICB2ID0+IDxNIGlkPXt2ID8gJ0dyaWQuWWVzJyA6ICdHcmlkLk5vJ30gey4uLmNvbC5yZW5kZXJDb21wb25lbnRQcm9wc30gLz4sXG4gICAgKTtcbiAgfSxcbiAgLy8gYm9vbGVhbkNlbGxFZGl0XG4gIGNlbGxFZGl0KFxuICAgIGNvbCxcbiAgICBjb2x1bW4sXG4gICAgcm93SW5kZXgsXG4gICAgdGFiSW5kZXgsXG4gICAgZ3JpZElkLFxuICAgIHNlbGVjdE9wdGlvbnMsXG4gICAgc2VsZWN0VHJhbnNsYXRpb25zLFxuICAgIHZhbHVlUGFyc2VyLFxuICAgIGZ1bmN0aW9ucyxcbiAgICBnZXRDb21wb25lbnREaXNhYmxlZFN0YXRlLFxuICApIHtcbiAgICBjb25zdCBjZWxsTmFtZSA9ICdlZGl0JztcbiAgICBjb25zdCBib29sZWFuUHJvcHMgPSB7XG4gICAgICBuYW1lOiBgb2NEYXRhZ3JpZEVkaXRJbnB1dC0ke2dyaWRJZH0tJHtjb2x1bW4uY29sdW1uS2V5fS0ke3Jvd0luZGV4fWAsXG4gICAgICBvcHRpb25zOiBzZWxlY3RPcHRpb25zLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9ucy5nZXRJdGVtVmFsdWUocm93SW5kZXgsIGNvbCwgc2VsZWN0T3B0aW9ucyksXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb25zLm9uQ2VsbFZhbHVlQ2hhbmdlKHJvd0luZGV4LCBjb2wsIHZhbHVlUGFyc2VyKSxcbiAgICAgIG9uQmx1cjogZnVuY3Rpb25zLm9uQ2VsbEJsdXIocm93SW5kZXgsIGNvbCksXG4gICAgICBvbkZvY3VzOiBmdW5jdGlvbnMub25DZWxsRm9jdXMoY2VsbE5hbWUsIGNvbC5jb21wb25lbnRUeXBlLCByb3dJbmRleCwgY29sdW1uLmNvbHVtbktleSksXG4gICAgICBpc1NlYXJjaGFibGU6IGZhbHNlLFxuICAgICAgaXNDbGVhcmFibGU6ICFjb2wuaXNSZXF1aXJlZCxcbiAgICAgIGJhY2tTcGFjZVJlbW92ZXNWYWx1ZTogZmFsc2UsXG4gICAgICB0YWJTZWxlY3RzVmFsdWU6IGZhbHNlLFxuICAgICAgb3Blbk1lbnVPbkZvY3VzOiB0cnVlLFxuICAgICAgaW5uZXJSZWY6IGZ1bmN0aW9ucy5oYW5kbGVDZWxsUmVmKHJvd0luZGV4LCBjb2wpLFxuICAgICAgaXNEaXNhYmxlZDogZ2V0Q29tcG9uZW50RGlzYWJsZWRTdGF0ZShyb3dJbmRleCwgY29sLCBjZWxsTmFtZSksXG4gICAgICB0YWJJbmRleCxcbiAgICAgIC4uLmNvbC5lZGl0Q29tcG9uZW50UHJvcHMsXG4gICAgICAuLi5zZWxlY3RUcmFuc2xhdGlvbnMsXG4gICAgfTtcbiAgICByZXR1cm4gc2VsZWN0UmVuZGVyKHsgLi4uYm9vbGVhblByb3BzIH0pO1xuICB9LFxuICAvLyBib29sZWFuQ2VsbENyZWF0ZVxuICBjZWxsQ3JlYXRlKFxuICAgIGNvbCxcbiAgICBjb2x1bW4sXG4gICAgcm93SW5kZXgsXG4gICAgdGFiSW5kZXgsXG4gICAgZ3JpZElkLFxuICAgIHNlbGVjdE9wdGlvbnMsXG4gICAgc2VsZWN0VHJhbnNsYXRpb25zLFxuICAgIHZhbHVlUGFyc2VyLFxuICAgIGZ1bmN0aW9ucyxcbiAgICBnZXRDb21wb25lbnREaXNhYmxlZFN0YXRlLFxuXG4gICkge1xuICAgIGNvbnN0IGNlbGxOYW1lID0gJ2NyZWF0ZSc7XG4gICAgLy8gY2xvc2VPbk1lbnVTZWxlY3RcbiAgICBjb25zdCBib29sZWFuUHJvcHMgPSB7XG4gICAgICBuYW1lOiBgb2NEYXRhZ3JpZENyZWF0ZUlucHV0LSR7Z3JpZElkfS0ke2NvbHVtbi5jb2x1bW5LZXl9LSR7cm93SW5kZXh9YCxcbiAgICAgIG9wdGlvbnM6IHNlbGVjdE9wdGlvbnMsXG4gICAgICB2YWx1ZTogZnVuY3Rpb25zLmdldEl0ZW1WYWx1ZShyb3dJbmRleCwgY29sLCBzZWxlY3RPcHRpb25zKSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbnMub25DZWxsVmFsdWVDaGFuZ2Uocm93SW5kZXgsIGNvbCwgdmFsdWVQYXJzZXIpLFxuICAgICAgb25CbHVyOiBmdW5jdGlvbnMub25DZWxsQmx1cihyb3dJbmRleCwgY29sKSxcbiAgICAgIG9uS2V5RG93bjogZnVuY3Rpb25zLm9uQ2VsbEtleURvd24sXG4gICAgICBpc1NlYXJjaGFibGU6IGZhbHNlLFxuICAgICAgaXNDbGVhcmFibGU6ICFjb2wuaXNSZXF1aXJlZCxcbiAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZTogZmFsc2UsXG4gICAgICB0YWJTZWxlY3RzVmFsdWU6IGZhbHNlLFxuICAgICAgb3Blbk9uRm9jdXM6IHRydWUsXG4gICAgICBpbm5lclJlZjogZnVuY3Rpb25zLmhhbmRsZUNlbGxSZWYocm93SW5kZXgsIGNvbCksXG4gICAgICBpc0Rpc2FibGVkOiBnZXRDb21wb25lbnREaXNhYmxlZFN0YXRlKHJvd0luZGV4LCBjb2wsIGNlbGxOYW1lKSxcbiAgICAgIHRhYkluZGV4LFxuICAgICAgLi4uY29sLmNyZWF0ZUNvbXBvbmVudFByb3BzLFxuICAgICAgLi4uc2VsZWN0VHJhbnNsYXRpb25zLFxuICAgIH07XG4gICAgcmV0dXJuIHNlbGVjdFJlbmRlcih7IC4uLmJvb2xlYW5Qcm9wcyB9KTtcbiAgfSxcbiAgLy8gYm9vbGVhbkNlbGxGaWx0ZXJcbiAgY2VsbEZpbHRlcihcbiAgICBjb2wsXG4gICAgY29sdW1uLFxuICAgIHRhYkluZGV4LFxuICAgIGdyaWRJZCxcbiAgICBzZWxlY3RPcHRpb25zLFxuICAgIHNlbGVjdFRyYW5zbGF0aW9ucyxcbiAgICBmaWx0ZXJWYWx1ZVBhcnNlcixcbiAgICBmdW5jdGlvbnMsXG4gICkge1xuICAgIGNvbnN0IGJvb2xlYW5Qcm9wcyA9IHtcbiAgICAgIG5hbWU6IGBvY0RhdGFncmlkRmlsdGVySW5wdXQtJHtncmlkSWR9LSR7Y29sdW1uLmNvbHVtbktleX1gLFxuICAgICAgb3B0aW9uczogc2VsZWN0T3B0aW9ucyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbnMuZ2V0SXRlbVZhbHVlKGNvbCwgc2VsZWN0T3B0aW9ucyksXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb25zLm9uQ2VsbFZhbHVlQ2hhbmdlKGNvbCwgZmlsdGVyVmFsdWVQYXJzZXIpLFxuICAgICAgaXNTZWFyY2hhYmxlOiBmYWxzZSxcbiAgICAgIGlzQ2xlYXJhYmxlOiB0cnVlLFxuICAgICAgdGFiU2VsZWN0c1ZhbHVlOiBmYWxzZSxcbiAgICAgIG9wZW5NZW51T25Gb2N1czogdHJ1ZSxcbiAgICAgIHRhYkluZGV4LFxuICAgICAgLi4uY29sLmZpbHRlckNvbXBvbmVudFByb3BzLFxuICAgICAgLi4uc2VsZWN0VHJhbnNsYXRpb25zLFxuICAgIH07XG4gICAgcmV0dXJuIHNlbGVjdFJlbmRlcih7IC4uLmJvb2xlYW5Qcm9wcyB9KTtcbiAgfSxcbn07XG4iXX0=