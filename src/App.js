import "./App.css";
import Age from "./pages/Age";
import Gender from "./pages/Gender";
import Nation from "./pages/Nation";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

import { Switch, Route, NavLink } from "react-router-dom";
import { even } from "check-types";

function App() {
  const [nationality, setNationality] = useState([]);

  //   const url = "https://api.nationalize.io/?name=michael";
  //   fetch(url)
  //   .then((response)=>response.json())
  //   .then((data)=>{
  //     setNationality(data.name)
  //   })
  // });

  return (
    <div className="App">
      <header className="App__header">
        <Header />
      </header>
      <main className="App__main">
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
