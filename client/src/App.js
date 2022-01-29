import './App.css';
import {Link, Switch, Route, Redirect} from 'react-router-dom'
import Main from "./components/Main"
import Create from "./components/Create"
import ViewOne from './components/ViewOne';
import Update from './components/Update'

function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      <Link to="/products">home</Link> &nbsp;&nbsp;&nbsp;
      <Link to="/products/new">create</Link>
      <br/>
      <Switch>

        <Route exact path="/products">
          <Main/>
        </Route>

        <Route exact path ="/products/new">
          <Create/>
        </Route>

        <Route exact path="/products/:id">
          <ViewOne/>
        </Route>

        <Route exact path="/">
          <Redirect to="/products" />
        </Route>

        <Route exact path="/products/update/:id">
          <Update/>
        </Route>




      </Switch>
    </div>
  );
}

export default App;
