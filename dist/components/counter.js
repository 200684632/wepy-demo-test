'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class, _class2, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _counter = require('./../store/types/counter.js');

var _actions = require('./../store/actions/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = (_dec = (0, _wepyRedux.connect)({
  stateNum: function stateNum(state) {
    return state.counter.num;
  },
  asyncNum: function asyncNum(state) {
    return state.counter.asyncNum;
  },
  name: function name(state) {
    return state.counter.name;
  }
}, {
  incNum: _counter.INCREMENT,
  decNum: _counter.DECREMENT,
  asyncName: (0, _counter.TEST)('我被雷浦修改了'),
  asyncInc: _actions.asyncInc
}), _dec(_class = (_temp2 = _class2 = function (_wepy$component) {
  _inherits(Counter, _wepy$component);

  function Counter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Counter;
}(_wepy2.default.component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.props = {
    num: {
      type: [Number, String],
      coerce: function coerce(v) {
        return +v;
      },
      default: 50
    }
  };
  this.data = {};
  this.events = {
    'index-broadcast': function indexBroadcast() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.methods = {
    plus: function plus() {
      this.num = this.num + 1;
      console.log(this.$name + ' plus tap');

      this.$emit('index-emit', 1, 2, 3);
    },
    minus: function minus() {
      this.num = this.num - 1;
      console.log(this.$name + ' minus tap');
    }
  };
}, _temp2)) || _class);
exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsInN0YXRlTnVtIiwic3RhdGUiLCJjb3VudGVyIiwibnVtIiwiYXN5bmNOdW0iLCJuYW1lIiwiaW5jTnVtIiwiZGVjTnVtIiwiYXN5bmNOYW1lIiwiYXN5bmNJbmMiLCJjb21wb25lbnQiLCJwcm9wcyIsInR5cGUiLCJOdW1iZXIiLCJTdHJpbmciLCJjb2VyY2UiLCJ2IiwiZGVmYXVsdCIsImRhdGEiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiJG5hbWUiLCJzb3VyY2UiLCJtZXRob2RzIiwicGx1cyIsIiRlbWl0IiwibWludXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFrQnFCQSxPLFdBaEJwQix3QkFBUTtBQUNQQyxVQURPLG9CQUNHQyxLQURILEVBQ1U7QUFDZixXQUFPQSxNQUFNQyxPQUFOLENBQWNDLEdBQXJCO0FBQ0QsR0FITTtBQUlQQyxVQUpPLG9CQUlHSCxLQUpILEVBSVU7QUFDZixXQUFPQSxNQUFNQyxPQUFOLENBQWNFLFFBQXJCO0FBQ0QsR0FOTTtBQU9QQyxNQVBPLGdCQU9GSixLQVBFLEVBT0s7QUFDVixXQUFPQSxNQUFNQyxPQUFOLENBQWNHLElBQXJCO0FBQ0Q7QUFUTSxDQUFSLEVBVUU7QUFDREMsNEJBREM7QUFFREMsNEJBRkM7QUFHREMsYUFBVyxtQkFBSyxTQUFMLENBSFY7QUFJREM7QUFKQyxDQVZGLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWdCb0MsZUFBS0MsUzs7O09BQ3hDQyxLLEdBQVE7QUFDTlIsU0FBSztBQUNIUyxZQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQURIO0FBRUhDLGNBQVEsZ0JBQVVDLENBQVYsRUFBYTtBQUNuQixlQUFPLENBQUNBLENBQVI7QUFDRCxPQUpFO0FBS0hDLGVBQVM7QUFMTjtBQURDLEc7T0FVUkMsSSxHQUFPLEU7T0FFUEMsTSxHQUFTO0FBQ1AsdUJBQW1CLDBCQUFhO0FBQUE7O0FBQzlCLFVBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBQyxjQUFRQyxHQUFSLENBQWUsT0FBS0MsS0FBcEIsaUJBQXFDSixPQUFPZixJQUE1QyxjQUF5RGUsT0FBT0ssTUFBUCxDQUFjRCxLQUF2RTtBQUNEO0FBSk0sRztPQU9URSxPLEdBQVU7QUFDUkMsUUFEUSxrQkFDQTtBQUNOLFdBQUt4QixHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLENBQXRCO0FBQ0FtQixjQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBTCxHQUFhLFdBQXpCOztBQUVBLFdBQUtJLEtBQUwsQ0FBVyxZQUFYLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CO0FBQ0QsS0FOTztBQU9SQyxTQVBRLG1CQU9DO0FBQ1AsV0FBSzFCLEdBQUwsR0FBVyxLQUFLQSxHQUFMLEdBQVcsQ0FBdEI7QUFDQW1CLGNBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsWUFBekI7QUFDRDtBQVZPLEc7O2tCQXBCU3pCLE8iLCJmaWxlIjoiY291bnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXHJcbiAgaW1wb3J0IHsgSU5DUkVNRU5ULCBERUNSRU1FTlQsIFRFU1QgfSBmcm9tICcuLi9zdG9yZS90eXBlcy9jb3VudGVyJ1xyXG4gIGltcG9ydCB7IGFzeW5jSW5jIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucydcclxuXHJcbiAgQGNvbm5lY3Qoe1xyXG4gICAgc3RhdGVOdW0gKHN0YXRlKSB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLm51bVxyXG4gICAgfSxcclxuICAgIGFzeW5jTnVtIChzdGF0ZSkge1xyXG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5hc3luY051bVxyXG4gICAgfSxcclxuICAgIG5hbWUoc3RhdGUpIHtcclxuICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubmFtZVxyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIGluY051bTogSU5DUkVNRU5ULFxyXG4gICAgZGVjTnVtOiBERUNSRU1FTlQsXHJcbiAgICBhc3luY05hbWU6IFRFU1QoJ+aIkeiiq+mbt+a1puS/ruaUueS6hicpLFxyXG4gICAgYXN5bmNJbmNcclxuICB9KVxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgbnVtOiB7XHJcbiAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuICAgICAgICBjb2VyY2U6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICByZXR1cm4gK3ZcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlZmF1bHQ6IDUwXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgfVxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICAnaW5kZXgtYnJvYWRjYXN0JzogKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgcGx1cyAoKSB7XHJcbiAgICAgICAgdGhpcy5udW0gPSB0aGlzLm51bSArIDFcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyBwbHVzIHRhcCcpXHJcblxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2luZGV4LWVtaXQnLCAxLCAyLCAzKVxyXG4gICAgICB9LFxyXG4gICAgICBtaW51cyAoKSB7XHJcbiAgICAgICAgdGhpcy5udW0gPSB0aGlzLm51bSAtIDFcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyBtaW51cyB0YXAnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=