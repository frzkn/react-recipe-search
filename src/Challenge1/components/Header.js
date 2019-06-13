import React, { Component } from "react"
import "./Header.css"
export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Title">
          <h1>Recipe Search</h1>
          <p>A search engine to find recipes by their ingredients</p>
        </div>
        <div className="Images">
          <img src={require('../assets/images/img-1.png')} alt="header" />
          <img src={require('../assets/images/img-2.png')} alt="header" />
          <img src={require('../assets/images/img-3.png')} alt="header" />
        </div>
      </div>
    )
  }
}
