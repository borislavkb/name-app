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
      </main>
      <footer>
        <nav className="App__footer">
          <Switch>
            <a href="Age">Age</a>
            <a href="Nation">Nation</a>
            <a href="Gender">Gender</a>
          </Switch>
        </nav>
      </footer>
    </div>
  );
}

export default App;
