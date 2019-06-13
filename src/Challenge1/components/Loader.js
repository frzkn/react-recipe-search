import React, { Component } from 'react'
import './Loader.css'
export default class Loader extends Component {
  render() {
    return (
      <div className="Loader">
        <h1>Loading </h1>
        <div className="dot1" />
        <div className="dot2" />
        <div className="dot3" />
      </div>
    )
  }
}