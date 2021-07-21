import "./App.css";
import Age from "./pages/Age";
import Gender from "./pages/Gender";
import Nation from "./pages/Nation";
import { Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1>Guess your Age</h1>
      </header>
      <main className="App__main">
        <form>
          <input
            type="text"
            name="inputName"
            id="inputName"
            placeholder="Type a name"
          ></input>
          <button type="submit">Submit</button>
        </form>
        <Switch>
          <Route path="/age">
            <Age />
          </Route>
        </Switch>
        <Switch>
          <Route path="/nation">
            <Nation />
          </Route>
        </Switch>
        <Switch>
          <Route path="/gender">
            <Gender />
          </Route>
        </Switch>
      </main>
      <footer>
        <nav className="App__footer">
          <NavLink to="Age">Age</NavLink>
          <NavLink to="Nation">Nation</NavLink>
          <NavLink to="Gender">Gender</NavLink>
        </nav>
      </footer>
    </div>
  );
}

export default App;
