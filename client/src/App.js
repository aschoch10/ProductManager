import './App.css';
import {Link, Switch, Route, Redirect} from 'react-router-dom'
import Main from "./components/Main"
import Create from "./components/Create"
import ViewOne from './components/ViewOne';

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


      </Switch>
    </div>
  );
}

export default App;
