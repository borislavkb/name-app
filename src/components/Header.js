import { Switch, Route } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Switch>
        <Route path="/age">
          <h1>Check the age for your name !</h1>
        </Route>
        <Route path="/nation">
          <h1>Check the nation of your name !</h1>
        </Route>
        <Route path="/gender">
          <h1>Identify the gender of your name!</h1>
        </Route>
      </Switch>
    </header>
  );
}
