'use strict';

exports.__esModule = true;
exports.checkboxRender = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _check = require('react-icons/lib/fa/check');

var _check2 = _interopRequireDefault(_check);

var _reactCheckbox = require('@opuscapita/react-checkbox');

var _reactCheckbox2 = _interopRequireDefault(_reactCheckbox);

var _selectRenderers = require('./select-renderers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkboxRender = exports.checkboxRender = function checkboxRender(checkboxProps) {
  return _react2.default.createElement(_reactCheckbox2.default, checkboxProps);
};

exports.default = {
  valRender: function valRender(rowIndex, valueRender) {
    return valueRender(rowIndex, function (v) {
      return v ? _react2.default.createElement(_check2.default, { size: 20 }) : null;
    });
  },
  cellEdit: function cellEdit(col, column, rowIndex, tabIndex, gridId, functions) {
    var cellName = 'edit';
    var cbValueParser = function cbValueParser(rIndx) {
      return function () {
        return !(functions.getItemValue(rIndx, col) || false);
      };
    };
    var cbProps = _extends({
      id: 'ocDatagridEditInput-' + gridId + '-' + column.columnKey + '-' + rowIndex,
      tabIndex: tabIndex,
      checked: functions.getItemValue(rowIndex, col) || false,
      onChange: functions.onCellValueChange(rowIndex, col, cbValueParser(rowIndex)),
      onKeyDown: functions.onCellKeyDown(rowIndex, col),
      onBlur: functions.onCellBlur(rowIndex, col),
      onFocus: functions.onCellFocus(cellName, col.componentType, rowIndex, column.columnKey),
      inputRef: functions.handleCellRef(rowIndex, col)
    }, col.editComponentProps);
    return checkboxRender(cbProps);
  },
  cellCreate: function cellCreate(col, column, rowIndex, tabIndex, gridId, functions) {
    var cbValueParser = function cbValueParser(rIndx) {
      return function () {
        return !(functions.getItemValue(rIndx, col) || false);
      };
    };
    var cbProps = _extends({
      id: 'ocDatagridCreateInput-' + gridId + '-' + column.columnKey + '-' + rowIndex,
      tabIndex: tabIndex,
      checked: functions.getItemValue(rowIndex, col) || false,
      onChange: functions.onCellValueChange(rowIndex, col, cbValueParser(rowIndex)),
      onKeyDown: functions.onCellKeyDown(rowIndex, col),
      onBlur: functions.onCellBlur(rowIndex, col),
      inputRef: functions.handleCellRef(rowIndex, col)
    }, col.createComponentProps);
    return checkboxRender(cbProps);
  },
  cellFilter: function cellFilter(col, column, tabIndex, gridId, intl, functions) {
    var cbValueParser = function cbValueParser(val) {
      return val;
    };
    var selectOptions = [{ value: true, label: intl.formatMessage({ id: 'Grid.Checked' }) }, { value: false, label: intl.formatMessage({ id: 'Grid.UnChecked' }) }];
    var selectTranslations = col.selectComponentTranslations || {
      placeholder: intl.formatMessage({ id: 'Grid.FloatingSelect.Select' }),
      noResultsText: intl.formatMessage({ id: 'Grid.FloatingSelect.NoResults' })
    };
    var cbProps = _extends({
      name: 'ocDatagridFilterInput-' + gridId + '-' + column.columnKey,
      options: selectOptions,
      value: functions.getItemValue(col, selectOptions),
      onChange: functions.onCellValueChange(col, cbValueParser),
      isSearchable: false,
      isClearable: true,
      tabSelectsValue: false,
      openMenuOnFocus: true,
      tabIndex: tabIndex
    }, col.filterComponentProps, selectTranslations);
    // checkbox filter is rendered as select - so use selectRender instead
    return (0, _selectRenderers.selectRender)(_extends({}, cbProps));
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kYXRhZ3JpZC9jb2x1bW4tc2VydmljZS9jb2x1bW4tdHlwZXMvY2hlY2tib3gtcmVuZGVyZXJzLmpzeCJdLCJuYW1lcyI6WyJjaGVja2JveFJlbmRlciIsImNoZWNrYm94UHJvcHMiLCJ2YWxSZW5kZXIiLCJyb3dJbmRleCIsInZhbHVlUmVuZGVyIiwidiIsImNlbGxFZGl0IiwiY29sIiwiY29sdW1uIiwidGFiSW5kZXgiLCJncmlkSWQiLCJmdW5jdGlvbnMiLCJjZWxsTmFtZSIsImNiVmFsdWVQYXJzZXIiLCJnZXRJdGVtVmFsdWUiLCJySW5keCIsImNiUHJvcHMiLCJpZCIsImNvbHVtbktleSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsIm9uQ2VsbFZhbHVlQ2hhbmdlIiwib25LZXlEb3duIiwib25DZWxsS2V5RG93biIsIm9uQmx1ciIsIm9uQ2VsbEJsdXIiLCJvbkZvY3VzIiwib25DZWxsRm9jdXMiLCJjb21wb25lbnRUeXBlIiwiaW5wdXRSZWYiLCJoYW5kbGVDZWxsUmVmIiwiZWRpdENvbXBvbmVudFByb3BzIiwiY2VsbENyZWF0ZSIsImNyZWF0ZUNvbXBvbmVudFByb3BzIiwiY2VsbEZpbHRlciIsImludGwiLCJ2YWwiLCJzZWxlY3RPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsImZvcm1hdE1lc3NhZ2UiLCJzZWxlY3RUcmFuc2xhdGlvbnMiLCJzZWxlY3RDb21wb25lbnRUcmFuc2xhdGlvbnMiLCJwbGFjZWhvbGRlciIsIm5vUmVzdWx0c1RleHQiLCJuYW1lIiwib3B0aW9ucyIsImlzU2VhcmNoYWJsZSIsImlzQ2xlYXJhYmxlIiwidGFiU2VsZWN0c1ZhbHVlIiwib3Blbk1lbnVPbkZvY3VzIiwiZmlsdGVyQ29tcG9uZW50UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVPLElBQU1BLDBDQUFpQixTQUFqQkEsY0FBaUI7QUFBQSxTQUFrQiw4QkFBQyx1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LGdCQUFnQixTQUFoQkEsYUFBZ0I7QUFBQSxhQUFPdUIsR0FBUDtBQUFBLEtBQXRCO0FBQ0EsUUFBTUMsZ0JBQWdCLENBQ3BCLEVBQUVDLE9BQU8sSUFBVCxFQUFlQyxPQUFPSixLQUFLSyxhQUFMLENBQW1CLEVBQUV2QixJQUFJLGNBQU4sRUFBbkIsQ0FBdEIsRUFEb0IsRUFFcEIsRUFBRXFCLE9BQU8sS0FBVCxFQUFnQkMsT0FBT0osS0FBS0ssYUFBTCxDQUFtQixFQUFFdkIsSUFBSSxnQkFBTixFQUFuQixDQUF2QixFQUZvQixDQUF0QjtBQUlBLFFBQU13QixxQkFBcUJsQyxJQUFJbUMsMkJBQUosSUFBbUM7QUFDNURDLG1CQUFhUixLQUFLSyxhQUFMLENBQW1CLEVBQUV2QixJQUFJLDRCQUFOLEVBQW5CLENBRCtDO0FBRTVEMkIscUJBQWVULEtBQUtLLGFBQUwsQ0FBbUIsRUFBRXZCLElBQUksK0JBQU4sRUFBbkI7QUFGNkMsS0FBOUQ7QUFJQSxRQUFNRDtBQUNKNkIsdUNBQStCbkMsTUFBL0IsU0FBeUNGLE9BQU9VLFNBRDVDO0FBRUo0QixlQUFTVCxhQUZMO0FBR0pDLGFBQU8zQixVQUFVRyxZQUFWLENBQXVCUCxHQUF2QixFQUE0QjhCLGFBQTVCLENBSEg7QUFJSmpCLGdCQUFVVCxVQUFVVSxpQkFBVixDQUE0QmQsR0FBNUIsRUFBaUNNLGFBQWpDLENBSk47QUFLSmtDLG9CQUFjLEtBTFY7QUFNSkMsbUJBQWEsSUFOVDtBQU9KQyx1QkFBaUIsS0FQYjtBQVFKQyx1QkFBaUIsSUFSYjtBQVNKekM7QUFUSSxPQVVERixJQUFJNEMsb0JBVkgsRUFXRFYsa0JBWEMsQ0FBTjtBQWFBO0FBQ0EsV0FBTyxnREFBa0J6QixPQUFsQixFQUFQO0FBQ0Q7QUEvRFksQyIsImZpbGUiOiJjaGVja2JveC1yZW5kZXJlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZhQ2hlY2sgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZWNrJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1jaGVja2JveCc7XG5pbXBvcnQgeyBzZWxlY3RSZW5kZXIgfSBmcm9tICcuL3NlbGVjdC1yZW5kZXJlcnMnO1xuXG5leHBvcnQgY29uc3QgY2hlY2tib3hSZW5kZXIgPSBjaGVja2JveFByb3BzID0+ICg8Q2hlY2tib3ggey4uLmNoZWNrYm94UHJvcHN9IC8+KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIHZhbFJlbmRlcihyb3dJbmRleCwgdmFsdWVSZW5kZXIpIHtcbiAgICByZXR1cm4gdmFsdWVSZW5kZXIocm93SW5kZXgsIHYgPT4gKHYgPyA8RmFDaGVjayBzaXplPXsyMH0gLz4gOiBudWxsKSk7XG4gIH0sXG5cbiAgY2VsbEVkaXQoY29sLCBjb2x1bW4sIHJvd0luZGV4LCB0YWJJbmRleCwgZ3JpZElkLCBmdW5jdGlvbnMpIHtcbiAgICBjb25zdCBjZWxsTmFtZSA9ICdlZGl0JztcbiAgICBjb25zdCBjYlZhbHVlUGFyc2VyID0gckluZHggPT4gKCkgPT4gIShmdW5jdGlvbnMuZ2V0SXRlbVZhbHVlKHJJbmR4LCBjb2wpIHx8IGZhbHNlKTtcbiAgICBjb25zdCBjYlByb3BzID0ge1xuICAgICAgaWQ6IGBvY0RhdGFncmlkRWRpdElucHV0LSR7Z3JpZElkfS0ke2NvbHVtbi5jb2x1bW5LZXl9LSR7cm93SW5kZXh9YCxcbiAgICAgIHRhYkluZGV4LFxuICAgICAgY2hlY2tlZDogZnVuY3Rpb25zLmdldEl0ZW1WYWx1ZShyb3dJbmRleCwgY29sKSB8fCBmYWxzZSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbnMub25DZWxsVmFsdWVDaGFuZ2Uocm93SW5kZXgsIGNvbCwgY2JWYWx1ZVBhcnNlcihyb3dJbmRleCkpLFxuICAgICAgb25LZXlEb3duOiBmdW5jdGlvbnMub25DZWxsS2V5RG93bihyb3dJbmRleCwgY29sKSxcbiAgICAgIG9uQmx1cjogZnVuY3Rpb25zLm9uQ2VsbEJsdXIocm93SW5kZXgsIGNvbCksXG4gICAgICBvbkZvY3VzOiBmdW5jdGlvbnMub25DZWxsRm9jdXMoY2VsbE5hbWUsIGNvbC5jb21wb25lbnRUeXBlLCByb3dJbmRleCwgY29sdW1uLmNvbHVtbktleSksXG4gICAgICBpbnB1dFJlZjogZnVuY3Rpb25zLmhhbmRsZUNlbGxSZWYocm93SW5kZXgsIGNvbCksXG4gICAgICAuLi5jb2wuZWRpdENvbXBvbmVudFByb3BzLFxuICAgIH07XG4gICAgcmV0dXJuIGNoZWNrYm94UmVuZGVyKGNiUHJvcHMpO1xuICB9LFxuXG4gIGNlbGxDcmVhdGUoY29sLCBjb2x1bW4sIHJvd0luZGV4LCB0YWJJbmRleCwgZ3JpZElkLCBmdW5jdGlvbnMpIHtcbiAgICBjb25zdCBjYlZhbHVlUGFyc2VyID0gckluZHggPT4gKCkgPT4gIShmdW5jdGlvbnMuZ2V0SXRlbVZhbHVlKHJJbmR4LCBjb2wpIHx8IGZhbHNlKTtcbiAgICBjb25zdCBjYlByb3BzID0ge1xuICAgICAgaWQ6IGBvY0RhdGFncmlkQ3JlYXRlSW5wdXQtJHtncmlkSWR9LSR7Y29sdW1uLmNvbHVtbktleX0tJHtyb3dJbmRleH1gLFxuICAgICAgdGFiSW5kZXgsXG4gICAgICBjaGVja2VkOiBmdW5jdGlvbnMuZ2V0SXRlbVZhbHVlKHJvd0luZGV4LCBjb2wpIHx8IGZhbHNlLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9ucy5vbkNlbGxWYWx1ZUNoYW5nZShyb3dJbmRleCwgY29sLCBjYlZhbHVlUGFyc2VyKHJvd0luZGV4KSksXG4gICAgICBvbktleURvd246IGZ1bmN0aW9ucy5vbkNlbGxLZXlEb3duKHJvd0luZGV4LCBjb2wpLFxuICAgICAgb25CbHVyOiBmdW5jdGlvbnMub25DZWxsQmx1cihyb3dJbmRleCwgY29sKSxcbiAgICAgIGlucHV0UmVmOiBmdW5jdGlvbnMuaGFuZGxlQ2VsbFJlZihyb3dJbmRleCwgY29sKSxcbiAgICAgIC4uLmNvbC5jcmVhdGVDb21wb25lbnRQcm9wcyxcbiAgICB9O1xuICAgIHJldHVybiBjaGVja2JveFJlbmRlcihjYlByb3BzKTtcbiAgfSxcblxuICBjZWxsRmlsdGVyKGNvbCwgY29sdW1uLCB0YWJJbmRleCwgZ3JpZElkLCBpbnRsLCBmdW5jdGlvbnMpIHtcbiAgICBjb25zdCBjYlZhbHVlUGFyc2VyID0gdmFsID0+IHZhbDtcbiAgICBjb25zdCBzZWxlY3RPcHRpb25zID0gW1xuICAgICAgeyB2YWx1ZTogdHJ1ZSwgbGFiZWw6IGludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnR3JpZC5DaGVja2VkJyB9KSB9LFxuICAgICAgeyB2YWx1ZTogZmFsc2UsIGxhYmVsOiBpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ0dyaWQuVW5DaGVja2VkJyB9KSB9LFxuICAgIF07XG4gICAgY29uc3Qgc2VsZWN0VHJhbnNsYXRpb25zID0gY29sLnNlbGVjdENvbXBvbmVudFRyYW5zbGF0aW9ucyB8fCB7XG4gICAgICBwbGFjZWhvbGRlcjogaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdHcmlkLkZsb2F0aW5nU2VsZWN0LlNlbGVjdCcgfSksXG4gICAgICBub1Jlc3VsdHNUZXh0OiBpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ0dyaWQuRmxvYXRpbmdTZWxlY3QuTm9SZXN1bHRzJyB9KSxcbiAgICB9O1xuICAgIGNvbnN0IGNiUHJvcHMgPSB7XG4gICAgICBuYW1lOiBgb2NEYXRhZ3JpZEZpbHRlcklucHV0LSR7Z3JpZElkfS0ke2NvbHVtbi5jb2x1bW5LZXl9YCxcbiAgICAgIG9wdGlvbnM6IHNlbGVjdE9wdGlvbnMsXG4gICAgICB2YWx1ZTogZnVuY3Rpb25zLmdldEl0ZW1WYWx1ZShjb2wsIHNlbGVjdE9wdGlvbnMpLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9ucy5vbkNlbGxWYWx1ZUNoYW5nZShjb2wsIGNiVmFsdWVQYXJzZXIpLFxuICAgICAgaXNTZWFyY2hhYmxlOiBmYWxzZSxcbiAgICAgIGlzQ2xlYXJhYmxlOiB0cnVlLFxuICAgICAgdGFiU2VsZWN0c1ZhbHVlOiBmYWxzZSxcbiAgICAgIG9wZW5NZW51T25Gb2N1czogdHJ1ZSxcbiAgICAgIHRhYkluZGV4LFxuICAgICAgLi4uY29sLmZpbHRlckNvbXBvbmVudFByb3BzLFxuICAgICAgLi4uc2VsZWN0VHJhbnNsYXRpb25zLFxuICAgIH07XG4gICAgLy8gY2hlY2tib3ggZmlsdGVyIGlzIHJlbmRlcmVkIGFzIHNlbGVjdCAtIHNvIHVzZSBzZWxlY3RSZW5kZXIgaW5zdGVhZFxuICAgIHJldHVybiBzZWxlY3RSZW5kZXIoeyAuLi5jYlByb3BzIH0pO1xuICB9LFxufTtcbiJdfQ==