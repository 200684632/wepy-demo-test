'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _list = require('./../components/list.js');

var _list2 = _interopRequireDefault(_list);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _wepyRedux.connect)({
  num: function num(state) {
    return state.counter.num;
  },
  asyncNum: function asyncNum(state) {
    return state.counter.asyncNum;
  },
  sumNum: function sumNum(state) {
    return state.counter.num + state.counter.asyncNum;
  }
}), _dec(_class = (_temp2 = _class2 = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.normalTitle = '标题已被修改';

        self.setTimeoutTitle = '标题三秒后会被修改';
        setTimeout(function () {
          self.setTimeoutTitle = '到三秒了';
          self.$apply();
        }, 3000);

        self.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: 'test'
  };
  this.$props = { "group": { "v-bind:grouplist.once": { "for": "groupList", "item": "item", "index": "index", "key": "key", "value": "index" }, "v-bind:indexa.once": { "for": "groupList", "item": "item", "index": "index", "key": "key", "value": "index" } }, "counter1": { "bindindex-emit": "counterEmit" }, "counter2": { "xmlns:v-bind": "", "v-bind:num.sync": "mynum" } };
  this.$events = {};
  this.components = {
    panel: _panel2.default,
    counter1: _counter2.default,
    counter2: _counter2.default,
    list: _list2.default,
    group: _group2.default,
    toast: _wepyComToast2.default
  };
  this.mixins = [_test2.default];
  this.data = {
    mynum: 20,
    userInfo: {
      nickName: '加载中...'
    },
    normalTitle: '原始标题',
    setTimeoutTitle: '标题三秒后会被修改',
    count: 0,
    netrst: '',
    groupList: [{
      id: 1,
      name: '点击改变',
      list: [{
        childid: '1.1',
        childname: '子项，点我改变'
      }, {
        childid: '1.2',
        childname: '子项，点我改变'
      }, {
        childid: '1.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 2,
      name: '点击改变',
      list: [{
        childid: '2.1',
        childname: '子项，点我改变'
      }, {
        childid: '2.2',
        childname: '子项，点我改变'
      }, {
        childid: '2.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 3,
      name: '点击改变',
      list: [{
        childid: '3.1',
        childname: '子项，点我改变'
      }]
    }]
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.methods = {
    plus: function plus() {
      this.mynum++;
    },
    toast: function toast() {
      var promise = this.$invoke('toast', 'show', {
        title: '自定义标题',
        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
      });

      promise.then(function (d) {
        console.log('toast done');
      });
    },
    tap: function tap() {
      console.log('do noting from ' + this.$name);
    },
    communicate: function communicate() {
      console.log(this.$name + ' tap');

      this.$invoke('counter2', 'minus', 45, 6);
      this.$invoke('counter1', 'plus', 45, 6);

      this.$broadcast('index-broadcast', 1, 3, 4);
    },
    request: function request() {
      var self = this;
      var i = 10;
      var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
      while (i--) {
        _wepy2.default.request({
          url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
          success: function success(d) {
            self.netrst += d.data + '.';
            self.$apply();
          }
        });
      }
    },
    counterEmit: function counterEmit() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.events = {
    'index-emit': function indexEmit() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
}, _temp2)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwibnVtIiwic3RhdGUiLCJjb3VudGVyIiwiYXN5bmNOdW0iLCJzdW1OdW0iLCJzZWxmIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJub3JtYWxUaXRsZSIsInNldFRpbWVvdXRUaXRsZSIsInNldFRpbWVvdXQiLCIkYXBwbHkiLCJwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicGFuZWwiLCJjb3VudGVyMSIsImNvdW50ZXIyIiwibGlzdCIsImdyb3VwIiwidG9hc3QiLCJtaXhpbnMiLCJkYXRhIiwibXludW0iLCJuaWNrTmFtZSIsImNvdW50IiwibmV0cnN0IiwiZ3JvdXBMaXN0IiwiaWQiLCJuYW1lIiwiY2hpbGRpZCIsImNoaWxkbmFtZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJwbHVzIiwicHJvbWlzZSIsIiRpbnZva2UiLCJ0aXRsZSIsImltZyIsInRoZW4iLCJkIiwiY29uc29sZSIsImxvZyIsInRhcCIsIiRuYW1lIiwiY29tbXVuaWNhdGUiLCIkYnJvYWRjYXN0IiwicmVxdWVzdCIsImkiLCJtYXAiLCJ1cmwiLCJzdWNjZXNzIiwiY291bnRlckVtaXQiLCIkZXZlbnQiLCJsZW5ndGgiLCJzb3VyY2UiLCJldmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQWFxQkEsSyxXQVhwQix3QkFBUTtBQUNQQyxLQURPLGVBQ0ZDLEtBREUsRUFDSztBQUNWLFdBQU9BLE1BQU1DLE9BQU4sQ0FBY0YsR0FBckI7QUFDRCxHQUhNO0FBSVBHLFVBSk8sb0JBSUdGLEtBSkgsRUFJVTtBQUNmLFdBQU9BLE1BQU1DLE9BQU4sQ0FBY0MsUUFBckI7QUFDRCxH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QUFBOztBQUNwQixVQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQWIsY0FBUUMsR0FBUixDQUFlLEtBQUtFLEtBQXBCLGlCQUFxQ1MsT0FBTzFCLElBQTVDLGNBQXlEMEIsT0FBT0UsTUFBUCxDQUFjWCxLQUF2RTtBQUNEO0FBMUNPLEc7T0E2Q1ZZLE0sR0FBUztBQUNQLGtCQUFjLHFCQUFhO0FBQUE7O0FBQ3pCLFVBQUlILGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBYixjQUFRQyxHQUFSLENBQWUsT0FBS0UsS0FBcEIsaUJBQXFDUyxPQUFPMUIsSUFBNUMsY0FBeUQwQixPQUFPRSxNQUFQLENBQWNYLEtBQXZFO0FBQ0Q7QUFKTSxHOztrQkEzSFVuRCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcclxuICBpbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnXHJcbiAgaW1wb3J0IFBhbmVsIGZyb20gJy4uL2NvbXBvbmVudHMvcGFuZWwnXHJcbiAgaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb3VudGVyJ1xyXG4gIGltcG9ydCBHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2dyb3VwJ1xyXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcclxuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xyXG5cclxuICBAY29ubmVjdCh7XHJcbiAgICBudW0gKHN0YXRlKSB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLm51bVxyXG4gICAgfSxcclxuICAgIGFzeW5jTnVtIChzdGF0ZSkge1xyXG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5hc3luY051bVxyXG4gICAgfSxcclxuICAgIHN1bU51bSAoc3RhdGUpIHtcclxuICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubnVtICsgc3RhdGUuY291bnRlci5hc3luY051bVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndGVzdCdcclxuICAgIH1cclxuICAgJHByb3BzID0ge1wiZ3JvdXBcIjp7XCJ2LWJpbmQ6Z3JvdXBsaXN0Lm9uY2VcIjp7XCJmb3JcIjpcImdyb3VwTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcImluZGV4XCJ9LFwidi1iaW5kOmluZGV4YS5vbmNlXCI6e1wiZm9yXCI6XCJncm91cExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIixcInZhbHVlXCI6XCJpbmRleFwifX0sXCJjb3VudGVyMVwiOntcImJpbmRpbmRleC1lbWl0XCI6XCJjb3VudGVyRW1pdFwifSxcImNvdW50ZXIyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpudW0uc3luY1wiOlwibXludW1cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBwYW5lbDogUGFuZWwsXHJcbiAgICAgIGNvdW50ZXIxOiBDb3VudGVyLFxyXG4gICAgICBjb3VudGVyMjogQ291bnRlcixcclxuICAgICAgbGlzdDogTGlzdCxcclxuICAgICAgZ3JvdXA6IEdyb3VwLFxyXG4gICAgICB0b2FzdDogVG9hc3RcclxuICAgIH1cclxuXHJcbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG15bnVtOiAyMCxcclxuICAgICAgdXNlckluZm86IHtcclxuICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcclxuICAgICAgfSxcclxuICAgICAgbm9ybWFsVGl0bGU6ICfljp/lp4vmoIfpopgnLFxyXG4gICAgICBzZXRUaW1lb3V0VGl0bGU6ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknLFxyXG4gICAgICBjb3VudDogMCxcclxuICAgICAgbmV0cnN0OiAnJyxcclxuICAgICAgZ3JvdXBMaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjEnLFxyXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjInLFxyXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjMnLFxyXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjEnLFxyXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjInLFxyXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjMnLFxyXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICczLjEnLFxyXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICBub3cgKCkge1xyXG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgcGx1cyAoKSB7XHJcbiAgICAgICAgdGhpcy5teW51bSsrXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvYXN0ICgpIHtcclxuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcclxuICAgICAgICAgIHRpdGxlOiAn6Ieq5a6a5LmJ5qCH6aKYJyxcclxuICAgICAgICAgIGltZzogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZydcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBwcm9taXNlLnRoZW4oKGQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2FzdCBkb25lJylcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB0YXAgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkbyBub3RpbmcgZnJvbSAnICsgdGhpcy4kbmFtZSlcclxuICAgICAgfSxcclxuICAgICAgY29tbXVuaWNhdGUgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIHRhcCcpXHJcblxyXG4gICAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjInLCAnbWludXMnLCA0NSwgNilcclxuICAgICAgICB0aGlzLiRpbnZva2UoJ2NvdW50ZXIxJywgJ3BsdXMnLCA0NSwgNilcclxuXHJcbiAgICAgICAgdGhpcy4kYnJvYWRjYXN0KCdpbmRleC1icm9hZGNhc3QnLCAxLCAzLCA0KVxyXG4gICAgICB9LFxyXG4gICAgICByZXF1ZXN0ICgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgICBsZXQgaSA9IDEwXHJcbiAgICAgICAgbGV0IG1hcCA9IFsnTUE9PScsICdNUW89JywgJ01nPT0nLCAnTXc9PScsICdOQT09JywgJ05RPT0nLCAnTmc9PScsICdOdz09JywgJ09BPT0nLCAnT1E9PSddXHJcbiAgICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cubWFkY29kZXIuY24vdGVzdHMvc2xlZXAucGhwP3RpbWU9MSZ0PWNzcyZjPScgKyBtYXBbaV0gKyAnJmk9JyArIGksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgICAgc2VsZi5uZXRyc3QgKz0gZC5kYXRhICsgJy4nXHJcbiAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY291bnRlckVtaXQgKC4uLmFyZ3MpIHtcclxuICAgICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbiAodXNlckluZm8pIHtcclxuICAgICAgICBpZiAodXNlckluZm8pIHtcclxuICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLm5vcm1hbFRpdGxlID0gJ+agh+mimOW3suiiq+S/ruaUuSdcclxuXHJcbiAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5J1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5Yiw5LiJ56eS5LqGJ1xyXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICAgIH0sIDMwMDApXHJcblxyXG4gICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiJdfQ==