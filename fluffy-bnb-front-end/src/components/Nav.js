import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import FindAndReserve from "../pages/FindAndReserve";
import SignUp from "../pages/SignUp";

class Nav extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand" href="/">FluffyBnb</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <NavLink className="nav-link" exact to="/">Home </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/search">Find & Reserve </NavLink>
                            </li>

                        </ul>
                        {/*<form className="form-inline">*/}
                        <button type="button" className="btn btn-link text-white">Login</button>
                        <a className="btn btn-outline-light text-white" href="/signup">Sign Up</a>


                        {/*</form>*/}

                    </div>
                </nav>

                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/search" component={FindAndReserve}/>
                        <Route path="/signup" component={SignUp}/>

                    </Switch>

                </div>
            </Router>

        )
    }
}

export default Nav;