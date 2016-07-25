const {Component, PropTypes} = React;
const {Link, Route, Router, hashHistory} = ReactRouter;

const App = () =>
  <div>
    <h1>App</h1>
    <Link to="/sub-page">Sub Page</Link>
  </div>

const SubPage = class extends Component {
  
  componentDidMount() {
    this.context.router.setRouteLeaveHook(
      this.props.route,
      () => false
    )
  }
  
  render() {
    return (
      <div>
        <h1>Sub Page</h1>
        <Link to="/">App</Link>
      </div>
    );
  }
};

SubPage.contextTypes = {
  router: PropTypes.object
}
  
const Routes = () =>
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/sub-page" component={SubPage} />
  </Router>

ReactDOM.render(
  <Routes />,
  document.getElementById('example')
);
