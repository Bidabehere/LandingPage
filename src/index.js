import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
//import "./index.css";

import App from "./App";

//import * as serviceWorker from "./serviceWorker";

/* ReactDOM.render(<Cabeza />, document.getElementById("cabeza"));
ReactDOM.render(<Cuerpo />, document.getElementById("cuerpo"));
ReactDOM.render(<Boton />, document.getElementById("root"));
ReactDOM.render(<Pie />, document.getElementById("pie")); */

ReactDOM.render(<App />, document.getElementById("root"));
