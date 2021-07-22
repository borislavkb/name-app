import "./App.css";
import Age from "./pages/Age";
import Gender from "./pages/Gender";
import Nation from "./pages/Nation";
import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import { Switch, Route, NavLink } from "react-router-dom";

export function App() {
  const [age, setAge] = useState(null);

  function handleSubmitForm(event) {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.inputName.value;
    console.log(inputValue);

    const ageURL = `https://api.agify.io/?name=${inputValue}`;
    fetch(ageURL)
      .then((response) => response.json())
      .then((data) => {
        setAge(data.age);
      });
    form.reset();
  }

  return (
    <div className="App">
      <header className="App__header">
        <Header onSubmit={handleSubmitForm} />
      </header>
      <main className="App__main">
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            name="inputName"
            id="inputName"
            placeholder="Type a name"
          ></input>
        </form>
        <Switch>
          <Route path="/age">
            <Age age={age} />
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
