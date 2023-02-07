import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    const jwtToken = sessionStorage.getItem("jwtToken");
    const role = sessionStorage.getItem("role");
    console.log(role);

    const Logout = async()=>{
      sessionStorage.removeItem("jwtToken");
      sessionStorage.removeItem("role");
      sessionStorage.removeItem("usertype");
      window.location = "/"
    }

    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="navbar-brand">FoodSC</div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/createUser" className="nav-link">
                Create User
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/createProduct" className="nav-link">
                Create Product
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/createOrder" className="nav-link">
                Create Order
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/transcatProduct" className="nav-link">
                Transact Product
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/queryProduct" className="nav-link">
                Query Product
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/orders" className="nav-link">
                Orders
              </Link>
            </li>
            { jwtToken ? 
              <li className="navbar-item" onClick={Logout}>
              <Link to="/" className="nav-link">
                Logout
              </Link>
            </li>
            : 
            <li className="navbar-item">
              <Link to="" className="nav-link">
                Login
              </Link>
            </li>
            }
            
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
