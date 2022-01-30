//import things from react that I'm using
import { Link, Switch, Route, Redirect } from 'react-router-dom'
//import my own components
import Main from "./components/Main"
import Create from "./components/Create"
import ViewOne from './components/ViewOne';
import Update from './components/Update'

function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      {/* nbsp non breaking space, just for spaces */}
      <Link to="/products">home</Link> &nbsp;&nbsp;&nbsp;
      <Link to="/products/new">create</Link>
      <br />
      {/* Need to bring in switch to route between the components */}
      <Switch>
        {/* Paths go from most to least specific, if "/" route was first and didn't have 'exact' it would be loaded no matter what */}
        <Route exact path="/products/update/:id">
          <Update />
        </Route>

        <Route exact path="/products/new">
          <Create />
        </Route>

        <Route exact path="/products/:id">
          <ViewOne />
        </Route>

        <Route exact path="/products">
          <Main />
        </Route>

        <Route exact path="/">
          <Redirect to="/products" />
        </Route>






      </Switch>
    </div>
  );
}

export default App;
