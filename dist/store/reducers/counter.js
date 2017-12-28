'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _counter = require('./../types/counter.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _counter.INCREMENT, function (state) {
  return _extends({}, state, {
    num: state.num + 1
  });
}), _defineProperty(_handleActions, _counter.DECREMENT, function (state) {
  return _extends({}, state, {
    num: state.num - 1
  });
}), _defineProperty(_handleActions, _counter.ASYNC_INCREMENT, function (state, action) {
  return _extends({}, state, {
    asyncNum: state.asyncNum + action.payload
  });
}), _defineProperty(_handleActions, _counter.TEST, function (state, action) {
  return _extends({}, state, {
    name: action.name
  });
}), _handleActions), {
  num: 0,
  asyncNum: 0,
  name: '测试a'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsic3RhdGUiLCJudW0iLCJhY3Rpb24iLCJhc3luY051bSIsInBheWxvYWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7a0JBRWUscUhBQ0FBLEtBREEsRUFDTztBQUNsQixzQkFDS0EsS0FETDtBQUVFQyxTQUFLRCxNQUFNQyxHQUFOLEdBQVk7QUFGbkI7QUFJRCxDQU5ZLGlFQU9BRCxLQVBBLEVBT087QUFDbEIsc0JBQ0tBLEtBREw7QUFFRUMsU0FBS0QsTUFBTUMsR0FBTixHQUFZO0FBRm5CO0FBSUQsQ0FaWSx1RUFhTUQsS0FiTixFQWFhRSxNQWJiLEVBYXFCO0FBQ2hDLHNCQUNLRixLQURMO0FBRUVHLGNBQVVILE1BQU1HLFFBQU4sR0FBaUJELE9BQU9FO0FBRnBDO0FBSUQsQ0FsQlksNERBbUJOSixLQW5CTSxFQW1CQ0UsTUFuQkQsRUFtQlM7QUFDcEIsc0JBQ0tGLEtBREw7QUFFRUssVUFBS0gsT0FBT0c7QUFGZDtBQUlELENBeEJZLG9CQXlCWjtBQUNESixPQUFLLENBREo7QUFFREUsWUFBVSxDQUZUO0FBR0RFLFFBQUs7QUFISixDQXpCWSxDIiwiZmlsZSI6ImNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcclxuaW1wb3J0IHsgSU5DUkVNRU5ULCBERUNSRU1FTlQsIEFTWU5DX0lOQ1JFTUVOVCwgVEVTVCB9IGZyb20gJy4uL3R5cGVzL2NvdW50ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcclxuICBbSU5DUkVNRU5UXSAoc3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBudW06IHN0YXRlLm51bSArIDFcclxuICAgIH1cclxuICB9LFxyXG4gIFtERUNSRU1FTlRdIChzdGF0ZSkgeyBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBudW06IHN0YXRlLm51bSAtIDFcclxuICAgIH1cclxuICB9LFxyXG4gIFtBU1lOQ19JTkNSRU1FTlRdIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgYXN5bmNOdW06IHN0YXRlLmFzeW5jTnVtICsgYWN0aW9uLnBheWxvYWRcclxuICAgIH1cclxuICB9LFxyXG4gIFtURVNUXShzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgbmFtZTphY3Rpb24ubmFtZVxyXG4gICAgfVxyXG4gIH1cclxufSwge1xyXG4gIG51bTogMCxcclxuICBhc3luY051bTogMCxcclxuICBuYW1lOifmtYvor5VhJ1xyXG59KVxyXG4iXX0=