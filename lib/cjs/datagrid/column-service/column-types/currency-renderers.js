'use strict';

exports.__esModule = true;

var _formatUtils = require('@opuscapita/format-utils');

// TODO: Missing edit/create/filter support

exports.default = {
  // currencyValueRender
  valRender: function valRender(col, gridData, rowIndex, thousandSeparator, decimalSeparator, valueRender) {
    var currencyKeyPath = col.valueOptions && (col.valueOptions.currencyKeyPath || ['currency']);
    return valueRender(rowIndex, function (v) {
      return (0, _formatUtils.formatCurrencyAmount)(v, {
        currency: gridData.getIn([rowIndex].concat(currencyKeyPath)),
        decimals: col.valueOptions && col.valueOptions.decimals,
        thousandSeparator: col.valueOptions && (col.valueOptions.thousandSeparator || thousandSeparator),
        decimalSeparator: col.valueOptions && (col.valueOptions.decimalSeparator || decimalSeparator)
      });
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kYXRhZ3JpZC9jb2x1bW4tc2VydmljZS9jb2x1bW4tdHlwZXMvY3VycmVuY3ktcmVuZGVyZXJzLmpzeCJdLCJuYW1lcyI6WyJ2YWxSZW5kZXIiLCJjb2wiLCJncmlkRGF0YSIsInJvd0luZGV4IiwidGhvdXNhbmRTZXBhcmF0b3IiLCJkZWNpbWFsU2VwYXJhdG9yIiwidmFsdWVSZW5kZXIiLCJjdXJyZW5jeUtleVBhdGgiLCJ2YWx1ZU9wdGlvbnMiLCJ2IiwiY3VycmVuY3kiLCJnZXRJbiIsImRlY2ltYWxzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7O2tCQUVlO0FBQ2I7QUFDQUEsV0FGYSxxQkFFSEMsR0FGRyxFQUVFQyxRQUZGLEVBRVlDLFFBRlosRUFFc0JDLGlCQUZ0QixFQUV5Q0MsZ0JBRnpDLEVBRTJEQyxXQUYzRCxFQUV3RTtBQUNuRixRQUFNQyxrQkFBa0JOLElBQUlPLFlBQUosS0FBcUJQLElBQUlPLFlBQUosQ0FBaUJELGVBQWpCLElBQW9DLENBQUMsVUFBRCxDQUF6RCxDQUF4QjtBQUNBLFdBQU9ELFlBQVlILFFBQVosRUFBc0I7QUFBQSxhQUFLLHVDQUFxQk0sQ0FBckIsRUFBd0I7QUFDeERDLGtCQUFVUixTQUFTUyxLQUFULEVBQWdCUixRQUFoQixTQUE2QkksZUFBN0IsRUFEOEM7QUFFeERLLGtCQUFVWCxJQUFJTyxZQUFKLElBQW9CUCxJQUFJTyxZQUFKLENBQWlCSSxRQUZTO0FBR3hEUiwyQkFDRUgsSUFBSU8sWUFBSixLQUFxQlAsSUFBSU8sWUFBSixDQUFpQkosaUJBQWpCLElBQXNDQSxpQkFBM0QsQ0FKc0Q7QUFLeERDLDBCQUNFSixJQUFJTyxZQUFKLEtBQXFCUCxJQUFJTyxZQUFKLENBQWlCSCxnQkFBakIsSUFBcUNBLGdCQUExRDtBQU5zRCxPQUF4QixDQUFMO0FBQUEsS0FBdEIsQ0FBUDtBQVFEO0FBWlksQyIsImZpbGUiOiJjdXJyZW5jeS1yZW5kZXJlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXRDdXJyZW5jeUFtb3VudCB9IGZyb20gJ0BvcHVzY2FwaXRhL2Zvcm1hdC11dGlscyc7XG5cbi8vIFRPRE86IE1pc3NpbmcgZWRpdC9jcmVhdGUvZmlsdGVyIHN1cHBvcnRcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBjdXJyZW5jeVZhbHVlUmVuZGVyXG4gIHZhbFJlbmRlcihjb2wsIGdyaWREYXRhLCByb3dJbmRleCwgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IsIHZhbHVlUmVuZGVyKSB7XG4gICAgY29uc3QgY3VycmVuY3lLZXlQYXRoID0gY29sLnZhbHVlT3B0aW9ucyAmJiAoY29sLnZhbHVlT3B0aW9ucy5jdXJyZW5jeUtleVBhdGggfHwgWydjdXJyZW5jeSddKTtcbiAgICByZXR1cm4gdmFsdWVSZW5kZXIocm93SW5kZXgsIHYgPT4gZm9ybWF0Q3VycmVuY3lBbW91bnQodiwge1xuICAgICAgY3VycmVuY3k6IGdyaWREYXRhLmdldEluKFtyb3dJbmRleCwgLi4uY3VycmVuY3lLZXlQYXRoXSksXG4gICAgICBkZWNpbWFsczogY29sLnZhbHVlT3B0aW9ucyAmJiBjb2wudmFsdWVPcHRpb25zLmRlY2ltYWxzLFxuICAgICAgdGhvdXNhbmRTZXBhcmF0b3I6XG4gICAgICAgIGNvbC52YWx1ZU9wdGlvbnMgJiYgKGNvbC52YWx1ZU9wdGlvbnMudGhvdXNhbmRTZXBhcmF0b3IgfHwgdGhvdXNhbmRTZXBhcmF0b3IpLFxuICAgICAgZGVjaW1hbFNlcGFyYXRvcjpcbiAgICAgICAgY29sLnZhbHVlT3B0aW9ucyAmJiAoY29sLnZhbHVlT3B0aW9ucy5kZWNpbWFsU2VwYXJhdG9yIHx8IGRlY2ltYWxTZXBhcmF0b3IpLFxuICAgIH0pKTtcbiAgfSxcbn07XG4iXX0=