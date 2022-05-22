/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import App from "./App"
import "./Header.css"
import logo from "./logo.png"

function Header() {
    return (
      <div class="container">
        <a href="#">
          <img src={logo} />
        </a>
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>News</li>
          <li class="active">About</li>
          <li>Contact</li>
        </ul>
      </div>
    )
}

export default Header

