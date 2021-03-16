import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path ="/Saved" component={Saved} />
        </Switch>
      </div>
    </Router>

    </>
  );
}


export default App;
