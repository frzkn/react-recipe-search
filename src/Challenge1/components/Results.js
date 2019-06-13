import React, { Component } from 'react'
import Card from './Card'
import './Results.css'
import NotFound from './NotFound'
import Loader from './Loader'

export default class Results extends Component {
  render() {
    return (
      <div className="Results">
        {this.props.loading && <Loader />}

        {this.props.results.results &&
          this.props.results.results.map((card) => <Card data={card} />) }

        {this.props.results.results && <div ref="loadMore" />}
      </div>
    )
  }
}
