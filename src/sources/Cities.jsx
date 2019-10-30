import React, { Component } from "react";
import {Link} from "react-router-dom";
import Pie from "./Pie"


class  Cities extends React.Component{
    render(){
        return(
            <div>
            <h1>Cities</h1>
            <Link to="/">
                <Pie/>
            </Link>
            </div>

        )
    }
} 

export default Cities;