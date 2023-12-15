import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} ><h3>Home</h3></Link>
            <Link to={"/Products"}><h3>Products</h3></Link>
            <Link to={"/About"}><h3>About</h3></Link>
        </nav>
    )
}

export default Navbar;