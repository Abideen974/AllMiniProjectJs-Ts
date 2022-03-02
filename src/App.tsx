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
import AdminD from "./components/AdminD";
import ReactDashboard from "./components/ReactDashboard";
import AdminDash from "./components/AdminDash";
import MaterialAdmin from "./components/MaterialAdmin";



function App() {
  const user = true;
  return (
    <div className="App" >
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
                        <Protected Cmp={Log} />
                        {/* <Log /> */}
                    </Route>
                    <Route path="/Dashborad">
                        {user? <Redirect to="/Dashborad" /> : <Log />}
                        <Protected Cmp={Dashborad} />
                      </Route>
                    
                    <Route path="/Error">
                        <Error />
                    </Route>
                    <Route path="/Signup">
                       <Protected Cmp={Signup} />
                       {/* <Signup /> */}
                    </Route> 
                     <Route path="/Sig.mnup">
                       {/* <Protected Cmp={Signup} /> */}
                    </Route>
                </Switch>
            </Router>  
            {/* <AdminD /> */}
            {/* <ReactDashboard /> */}
            {/* <AdminDash /> */}
            {/* <MaterialAdmin /> */}
        


    </div>
  );
}

export default App;
