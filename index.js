"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React;
var Component = _React.Component;
var PropTypes = _React.PropTypes;
var _ReactRouter = ReactRouter;
var Link = _ReactRouter.Link;
var Route = _ReactRouter.Route;
var Router = _ReactRouter.Router;
var hashHistory = _ReactRouter.hashHistory;


var App = function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "App"
    ),
    React.createElement(
      Link,
      { to: "/sub-page" },
      "Sub Page"
    )
  );
};

var SubPage = function (_Component) {
  _inherits(SubPage, _Component);

  function SubPage() {
    _classCallCheck(this, SubPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SubPage).apply(this, arguments));
  }

  _createClass(SubPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.context.router.setRouteLeaveHook(this.props.route, function () {
        return false;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Sub Page"
        ),
        React.createElement(
          Link,
          { to: "/" },
          "App"
        )
      );
    }
  }]);

  return SubPage;
}(Component);

SubPage.contextTypes = {
  router: PropTypes.object
};

var Routes = function Routes() {
  return React.createElement(
    Router,
    { history: hashHistory },
    React.createElement(Route, { path: "/", component: App }),
    React.createElement(Route, { path: "/sub-page", component: SubPage })
  );
};

ReactDOM.render(React.createElement(Routes, null), document.getElementById('example'));
