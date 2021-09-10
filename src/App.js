import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"
import StarWars from './components/StarWars';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="mb-3" >Use the Force to find what you seek</h1>
        <Search></Search>
      </div>
      <Switch>
        <div className="App mt-5">
          <Route exact path ="/:cat/:id">
            <StarWars></StarWars>
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;