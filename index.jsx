const {Link, Route, Router, hashHistory} = ReactRouter;

const App = () =>
  <div>
    <h1>App</h1>
    <Link to="/sub-page">Sub Page</Link>
  </div>

const SubPage = () =>
  <div>
    <h1>Sub Page</h1>
  </div>;
  
const Routes = () =>
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/sub-page" component={SubPage} />
  </Router>

ReactDOM.render(
  <Routes />,
  document.getElementById('example')
);
