'use strict';

exports.__esModule = true;
exports.dateRender = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactIntl = require('react-intl');

var _reactDatetime = require('@opuscapita/react-datetime');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateRender = exports.dateRender = function dateRender(dateProps) {
  return _react2.default.createElement(_reactDatetime.DateInput, dateProps);
};

var dateIsValid = function dateIsValid(val) {
  return (0, _moment2.default)(val).isValid();
};

var dateIsValidFormat = function dateIsValidFormat(val, dateFormat) {
  return (0, _moment2.default)(val, dateFormat, true).isValid();
};

var className = 'oc-data-grid-date';

exports.default = {
  // dateValueRender
  valRender: function valRender(rowIndex, dateFormat, valueRender) {
    return valueRender(rowIndex, function (v) {
      if (dateIsValidFormat(v, dateFormat)) {
        return _moment2.default.utc(v, dateFormat).format(dateFormat);
      }
      if (dateIsValid(v)) {
        return _moment2.default.utc(v).format(dateFormat);
      }
      return _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'Grid.InvalidDate' });
    });
  },

  // dateCellEdit
  cellEdit: function cellEdit(col, column, rowIndex, tabIndex, gridId, region, dateFormat, valueParser, functions, getComponentDisabledState) {
    var cellName = 'edit';
    var dateProps = _extends({
      className: className,
      dateFormat: dateFormat,
      locale: region,
      value: functions.getItemValue(rowIndex, col),
      onChange: functions.onCellValueChange(rowIndex, col, valueParser),
      inputRef: functions.handleCellRef(rowIndex, col),
      inputProps: {
        tabIndex: tabIndex,
        id: 'ocDatagridEditInput-' + gridId + '-' + column.columnKey + '-' + rowIndex,
        onKeyDown: functions.onCellKeyDown(rowIndex, col),
        onBlur: functions.onCellBlur(rowIndex, col),
        onFocus: functions.onCellFocus(cellName, col.componentType, rowIndex, column.columnKey),
        style: column.style
      },
      disabled: getComponentDisabledState(rowIndex, col, cellName)
    }, col.editComponentProps);
    return dateRender(_extends({}, dateProps));
  },

  // dateCellCreate
  cellCreate: function cellCreate(col, column, rowIndex, tabIndex, gridId, region, dateFormat, valueParser, functions, getComponentDisabledState) {
    var cellName = 'create';
    var dateProps = _extends({
      className: className,
      dateFormat: dateFormat,
      locale: region,
      value: functions.getItemValue(rowIndex, col),
      onChange: functions.onCellValueChange(rowIndex, col, valueParser),
      inputRef: functions.handleCellRef(rowIndex, col),
      inputProps: {
        tabIndex: tabIndex,
        id: 'ocDatagridCreateInput-' + gridId + '-' + column.columnKey + '-' + rowIndex,
        onKeyDown: functions.onCellKeyDown(rowIndex, col),
        onBlur: functions.onCellBlur(rowIndex, col),
        onFocus: functions.onCellFocus(cellName, col.componentType, rowIndex, column.columnKey),
        style: column.style
      },
      disabled: getComponentDisabledState(rowIndex, col, cellName)
    }, col.createComponentProps);
    return dateRender(_extends({}, dateProps));
  },

  // dateFilterCell
  cellFilter: function cellFilter(col, column, tabIndex, gridId, region, dateFormat, valueParser, functions) {
    var dateProps = _extends({
      className: className,
      dateFormat: dateFormat,
      value: functions.getItemValue(col),
      onChange: functions.onCellValueChange(col, valueParser),
      locale: region,
      inputProps: {
        tabIndex: tabIndex,
        id: 'ocDatagridFilterInput-' + gridId + '-' + column.columnKey,
        style: column.style
      }
    }, col.filterComponentProps);
    return dateRender(_extends({}, dateProps));
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kYXRhZ3JpZC9jb2x1bW4tc2VydmljZS9jb2x1bW4tdHlwZXMvZGF0ZS1yZW5kZXJlcnMuanN4Il0sIm5hbWVzIjpbImRhdGVSZW5kZXIiLCJkYXRlUHJvcHMiLCJkYXRlSXNWYWxpZCIsInZhbCIsImlzVmFsaWQiLCJkYXRlSXNWYWxpZEZvcm1hdCIsImRhdGVGb3JtYXQiLCJjbGFzc05hbWUiLCJ2YWxSZW5kZXIiLCJyb3dJbmRleCIsInZhbHVlUmVuZGVyIiwidiIsIm1vbWVudCIsInV0YyIsImZvcm1hdCIsImNlbGxFZGl0IiwiY29sIiwiY29sdW1uIiwidGFiSW5kZXgiLCJncmlkSWQiLCJyZWdpb24iLCJ2YWx1ZVBhcnNlciIsImZ1bmN0aW9ucyIsImdldENvbXBvbmVudERpc2FibGVkU3RhdGUiLCJjZWxsTmFtZSIsImxvY2FsZSIsInZhbHVlIiwiZ2V0SXRlbVZhbHVlIiwib25DaGFuZ2UiLCJvbkNlbGxWYWx1ZUNoYW5nZSIsImlucHV0UmVmIiwiaGFuZGxlQ2VsbFJlZiIsImlucHV0UHJvcHMiLCJpZCIsImNvbHVtbktleSIsIm9uS2V5RG93biIsIm9uQ2VsbEtleURvd24iLCJvbkJsdXIiLCJvbkNlbGxCbHVyIiwib25Gb2N1cyIsIm9uQ2VsbEZvY3VzIiwiY29tcG9uZW50VHlwZSIsInN0eWxlIiwiZGlzYWJsZWQiLCJlZGl0Q29tcG9uZW50UHJvcHMiLCJjZWxsQ3JlYXRlIiwiY3JlYXRlQ29tcG9uZW50UHJvcHMiLCJjZWxsRmlsdGVyIiwiZmlsdGVyQ29tcG9uZW50UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxrQ0FBYSxTQUFiQSxVQUFhO0FBQUEsU0FBYyw4QkFBQyx3QkFBRCxFQUFlQyxTQUFmLENBQWQ7QUFBQSxDQUFuQjs7QUFFUCxJQUFNQyxjQUFjLFNBQWRBLFdBQWM7QUFBQSxTQUFPLHNCQUFPQyxHQUFQLEVBQVlD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MUIsSUFBSWdDLG9CQVhILENBQU47QUFhQSxXQUFPaEQsd0JBQWdCQyxTQUFoQixFQUFQO0FBQ0Q7QUExR1ksQyIsImZpbGUiOiJkYXRlLXJlbmRlcmVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIGFzIE0gfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRhdGV0aW1lJztcblxuZXhwb3J0IGNvbnN0IGRhdGVSZW5kZXIgPSBkYXRlUHJvcHMgPT4gKDxEYXRlSW5wdXQgey4uLmRhdGVQcm9wc30gLz4pO1xuXG5jb25zdCBkYXRlSXNWYWxpZCA9IHZhbCA9PiBtb21lbnQodmFsKS5pc1ZhbGlkKCk7XG5cbmNvbnN0IGRhdGVJc1ZhbGlkRm9ybWF0ID0gKHZhbCwgZGF0ZUZvcm1hdCkgPT4gbW9tZW50KHZhbCwgZGF0ZUZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpO1xuXG5jb25zdCBjbGFzc05hbWUgPSAnb2MtZGF0YS1ncmlkLWRhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIGRhdGVWYWx1ZVJlbmRlclxuICB2YWxSZW5kZXIocm93SW5kZXgsIGRhdGVGb3JtYXQsIHZhbHVlUmVuZGVyKSB7XG4gICAgcmV0dXJuIHZhbHVlUmVuZGVyKHJvd0luZGV4LCAodikgPT4ge1xuICAgICAgaWYgKGRhdGVJc1ZhbGlkRm9ybWF0KHYsIGRhdGVGb3JtYXQpKSB7XG4gICAgICAgIHJldHVybiBtb21lbnQudXRjKHYsIGRhdGVGb3JtYXQpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRlSXNWYWxpZCh2KSkge1xuICAgICAgICByZXR1cm4gbW9tZW50LnV0Yyh2KS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gPE0gaWQ9XCJHcmlkLkludmFsaWREYXRlXCIgLz47XG4gICAgfSk7XG4gIH0sXG4gIC8vIGRhdGVDZWxsRWRpdFxuICBjZWxsRWRpdChcbiAgICBjb2wsXG4gICAgY29sdW1uLFxuICAgIHJvd0luZGV4LFxuICAgIHRhYkluZGV4LFxuICAgIGdyaWRJZCxcbiAgICByZWdpb24sXG4gICAgZGF0ZUZvcm1hdCxcbiAgICB2YWx1ZVBhcnNlcixcbiAgICBmdW5jdGlvbnMsXG4gICAgZ2V0Q29tcG9uZW50RGlzYWJsZWRTdGF0ZSxcbiAgKSB7XG4gICAgY29uc3QgY2VsbE5hbWUgPSAnZWRpdCc7XG4gICAgY29uc3QgZGF0ZVByb3BzID0ge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgIGxvY2FsZTogcmVnaW9uLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9ucy5nZXRJdGVtVmFsdWUocm93SW5kZXgsIGNvbCksXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb25zLm9uQ2VsbFZhbHVlQ2hhbmdlKHJvd0luZGV4LCBjb2wsIHZhbHVlUGFyc2VyKSxcbiAgICAgIGlucHV0UmVmOiBmdW5jdGlvbnMuaGFuZGxlQ2VsbFJlZihyb3dJbmRleCwgY29sKSxcbiAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgdGFiSW5kZXgsXG4gICAgICAgIGlkOiBgb2NEYXRhZ3JpZEVkaXRJbnB1dC0ke2dyaWRJZH0tJHtjb2x1bW4uY29sdW1uS2V5fS0ke3Jvd0luZGV4fWAsXG4gICAgICAgIG9uS2V5RG93bjogZnVuY3Rpb25zLm9uQ2VsbEtleURvd24ocm93SW5kZXgsIGNvbCksXG4gICAgICAgIG9uQmx1cjogZnVuY3Rpb25zLm9uQ2VsbEJsdXIocm93SW5kZXgsIGNvbCksXG4gICAgICAgIG9uRm9jdXM6IGZ1bmN0aW9ucy5vbkNlbGxGb2N1cyhjZWxsTmFtZSwgY29sLmNvbXBvbmVudFR5cGUsIHJvd0luZGV4LCBjb2x1bW4uY29sdW1uS2V5KSxcbiAgICAgICAgc3R5bGU6IGNvbHVtbi5zdHlsZSxcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlZDogZ2V0Q29tcG9uZW50RGlzYWJsZWRTdGF0ZShyb3dJbmRleCwgY29sLCBjZWxsTmFtZSksXG4gICAgICAuLi5jb2wuZWRpdENvbXBvbmVudFByb3BzLFxuICAgIH07XG4gICAgcmV0dXJuIGRhdGVSZW5kZXIoeyAuLi5kYXRlUHJvcHMgfSk7XG4gIH0sXG4gIC8vIGRhdGVDZWxsQ3JlYXRlXG4gIGNlbGxDcmVhdGUoXG4gICAgY29sLFxuICAgIGNvbHVtbixcbiAgICByb3dJbmRleCxcbiAgICB0YWJJbmRleCxcbiAgICBncmlkSWQsXG4gICAgcmVnaW9uLFxuICAgIGRhdGVGb3JtYXQsXG4gICAgdmFsdWVQYXJzZXIsXG4gICAgZnVuY3Rpb25zLFxuICAgIGdldENvbXBvbmVudERpc2FibGVkU3RhdGUsXG4gICkge1xuICAgIGNvbnN0IGNlbGxOYW1lID0gJ2NyZWF0ZSc7XG4gICAgY29uc3QgZGF0ZVByb3BzID0ge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgIGxvY2FsZTogcmVnaW9uLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9ucy5nZXRJdGVtVmFsdWUocm93SW5kZXgsIGNvbCksXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb25zLm9uQ2VsbFZhbHVlQ2hhbmdlKHJvd0luZGV4LCBjb2wsIHZhbHVlUGFyc2VyKSxcbiAgICAgIGlucHV0UmVmOiBmdW5jdGlvbnMuaGFuZGxlQ2VsbFJlZihyb3dJbmRleCwgY29sKSxcbiAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgdGFiSW5kZXgsXG4gICAgICAgIGlkOiBgb2NEYXRhZ3JpZENyZWF0ZUlucHV0LSR7Z3JpZElkfS0ke2NvbHVtbi5jb2x1bW5LZXl9LSR7cm93SW5kZXh9YCxcbiAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbnMub25DZWxsS2V5RG93bihyb3dJbmRleCwgY29sKSxcbiAgICAgICAgb25CbHVyOiBmdW5jdGlvbnMub25DZWxsQmx1cihyb3dJbmRleCwgY29sKSxcbiAgICAgICAgb25Gb2N1czogZnVuY3Rpb25zLm9uQ2VsbEZvY3VzKGNlbGxOYW1lLCBjb2wuY29tcG9uZW50VHlwZSwgcm93SW5kZXgsIGNvbHVtbi5jb2x1bW5LZXkpLFxuICAgICAgICBzdHlsZTogY29sdW1uLnN0eWxlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVkOiBnZXRDb21wb25lbnREaXNhYmxlZFN0YXRlKHJvd0luZGV4LCBjb2wsIGNlbGxOYW1lKSxcbiAgICAgIC4uLmNvbC5jcmVhdGVDb21wb25lbnRQcm9wcyxcbiAgICB9O1xuICAgIHJldHVybiBkYXRlUmVuZGVyKHsgLi4uZGF0ZVByb3BzIH0pO1xuICB9LFxuICAvLyBkYXRlRmlsdGVyQ2VsbFxuICBjZWxsRmlsdGVyKFxuICAgIGNvbCxcbiAgICBjb2x1bW4sXG4gICAgdGFiSW5kZXgsXG4gICAgZ3JpZElkLFxuICAgIHJlZ2lvbixcbiAgICBkYXRlRm9ybWF0LFxuICAgIHZhbHVlUGFyc2VyLFxuICAgIGZ1bmN0aW9ucyxcbiAgKSB7XG4gICAgY29uc3QgZGF0ZVByb3BzID0ge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbnMuZ2V0SXRlbVZhbHVlKGNvbCksXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb25zLm9uQ2VsbFZhbHVlQ2hhbmdlKGNvbCwgdmFsdWVQYXJzZXIpLFxuICAgICAgbG9jYWxlOiByZWdpb24sXG4gICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgIHRhYkluZGV4LFxuICAgICAgICBpZDogYG9jRGF0YWdyaWRGaWx0ZXJJbnB1dC0ke2dyaWRJZH0tJHtjb2x1bW4uY29sdW1uS2V5fWAsXG4gICAgICAgIHN0eWxlOiBjb2x1bW4uc3R5bGUsXG4gICAgICB9LFxuICAgICAgLi4uY29sLmZpbHRlckNvbXBvbmVudFByb3BzLFxuICAgIH07XG4gICAgcmV0dXJuIGRhdGVSZW5kZXIoeyAuLi5kYXRlUHJvcHMgfSk7XG4gIH0sXG59O1xuIl19