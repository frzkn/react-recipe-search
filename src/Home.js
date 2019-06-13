import React, { Component } from "react"
import { Link } from "react-router-dom"
export default class Home extends Component {
  render() {
    return (
      <div>
        <button>
          <Link to="/challenge1">Challenge 1</Link>
        </button>

        <button>
          <Link to="/challenge2">Challenge 2</Link>
        </button>
      </div>
    )
  }
}
