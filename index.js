"use strict";

// Code goes here

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
      { to: "sub-page" },
      "Sub Page"
    )
  );
};

var SubPage = function SubPage() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Sub Page"
    )
  );
};

var Routes = function Routes() {
  return React.createElement(
    Router,
    { history: hashHistory },
    React.createElement(
      Route,
      { path: "/", component: App },
      React.createElement(Route, { path: "sub-page", component: SubPage })
    )
  );
};

ReactDOM.render(React.createElement(Routes, null), document.getElementById('example'));
