import React, { Component } from "react";
import styles1 from "./styles1.module.css";
import Cabeza from "./Cabeza";
import Boton from "./Boton";
import Cuerpo from "./Cuerpo";
import Singup from "./Singup";
import Login from "./Login";

import 'bootstrap/dist/css/bootstrap.min.css';

//import Create from "./createaccount/Create";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Pie from "./Pie";

class Lpage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        
        <Cabeza />
        <Cuerpo />
        <Link to="/Cities">
          <Boton />
        </Link>
        <p className={styles1.inicio}>Want to build your own MYtinerary?</p>
        <div className={styles1.inicio}>
          <Link to="/login/Login" className={styles1.bigblue}>
            <Login />
          </Link>
          <Link to="/create/Create" className={styles1.bigblue}>
            <Singup />
          </Link>
        </div>
        <Link to="/ ">
          <Pie />
        </Link>
   
      </div>
    );
  }
}

export default Lpage;
