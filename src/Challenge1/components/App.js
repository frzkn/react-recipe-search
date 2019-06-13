import React, { Component } from 'react'
import Header from './Header'
import Results from './Results'
import Search from './Search'

export default class App extends Component {
  state = {
    results: {},
    loading: false
  }

  getResults = (data) => {
    this.setState({
      ...this.state,
      results: data
    })
  }

  appendResults = (data) => {
    this.setState({
      ...this.state,
      results: { ...this.state.results, data }
    })
  }

  getLoading = (bool) => {
    this.setState({
      ...this.state,
      loading: bool
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Search getResults={this.getResults} getLoading={this.getLoading} />
        <Results loading={this.state.loading} results={this.state.results} />
      </div>
    )
  }
}
