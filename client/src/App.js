import './App.css';
import {Link, Switch, Route, Redirect} from 'react-router-dom'
import Main from "./components/Main"

function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      <Link to="/">home</Link> &nbsp;&nbsp;&nbsp;
      <Link to="/create">create</Link>
      <br/>
      <Switch>
        <Route path="/products">
          <Main/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
