import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Down from "./components/Down";
import Changbackground from "./components/Changbackground";
import BoxSx from "./components/BoxSx";
import Helloworld from "./components/Helloworld";
// import Login from "./components/Login";
import Log from "./components/Log";
import Signup from "./components/Signup";

import Dashborad from "./components/Dashborad";
import Error from "./components/Error";
import Protected from "./components/Protected";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      {/* <Down /> */}
      {/* <Changbackground />, */}
      {/* <BoxSx /> */}
      {/* <Helloworld /> */}
      {/* <Dashborad /> */}
      {/* <Login />, */}
      {/* <Log /> */}
 
       <Router>
                <Switch>
                    <Route exact path="/">
                        <Log />
                    </Route>
                    <Route path="/Dashborad">
                        <Protected Cmp={Dashborad} />

                    </Route>
                    <Route path="/Error">
                        <Error />
                    </Route>
                    <Route path="/Signup">
                       <Signup />
                    </Route>
                </Switch>
            </Router>  
        


    </div>
  );
}

export default App;
