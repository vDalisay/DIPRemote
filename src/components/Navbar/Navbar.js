import React from 'react';
import './Navbar.css';
import { MdAccountCircle } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {MdAddBox} from "react-icons/md";

const Navbar = props => (
    <header className="navbar">
        <nav className="navbar_navigation">
            <div className="navbar_logo"><a href="/">Philips Workshops</a></div>
            <div className="spacer"> </div>
            <div className="navbar_navigation-items">
                <ul>
                    <li><Link to="/AllProjects"><MdSearch/></Link></li>
                    <li><Link to="/CreateProject"><MdAddBox/></Link></li>
                    <li><Link to="/Profile"><MdAccountCircle/></Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Navbar;