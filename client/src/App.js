import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Fav from "./pages/Fav"
import Search from "./pages/Search"

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path={["/", "/books"]}>
          <Search/>
        </Route>
        <Route exact path="/savedBooks">
          <Fav/>
        </Route>
      </Switch>
    </div>
  </Router>
          
          
  );
}


export default App;