import './App.css';
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from 'react-router-dom'
import Home from './view/Home'
import List from './view/List'
import MyPage from './view/MyPage'
import Product from './view/Product'
import ErrorPage from './view/ErrorPage'
function App() {
  return (
    <div className="App">
      <Router>
      <nav>
      <Link to="/">首页</Link>
      <Link to="/list">列表</Link>
      <Link to="/my-page">我的</Link>
      <Link to="/product/1">产品1</Link>
      </nav>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/list" component={List}></Route>
      <Route exact path="/my-page" component={MyPage}></Route>
      <Route exact path="/product/:id" render={() => <Product></Product>}></Route>
      <Route component={ErrorPage}></Route>
      </Switch>
      
      </Router>
      
    </div>
  );
}

export default App;
