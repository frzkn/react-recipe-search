import React, { Component } from 'react'
import './Search.css'
import Loader from './Loader'
export default class Search extends Component {
  state = {
    ingredients: [],
    bottom: true
  }

  searchRecipes = (e) => {
    this.props.getLoading(true)
    const ingredients = this.state.ingredients.join()
    if (ingredients.length >= 1) {
      const API_URL = `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${ingredients}`
      this.setState((prevState, props) => {
        return {
          ...prevState,
          bottom: false,
          loading: false
        }
      })
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.length)
          this.props.getLoading(false)
          this.props.getResults(data)
        })
        .catch((err) => console.log(err))
    }
  }

  chipRemove = (e) => {
    const text = e.target.innerText
    const ar = this.state.ingredients
    this.setState({
      ...this.state,
      ingredients: ar.filter((a) => a !== text)
    })
  }

  _onChange = (e) => {
    if (
      e.target.value.split('').pop() === ',' ||
      e.target.value.split('').pop() === ' '
    ) {
      if (e.target.value !== '') {
        const arr = this.state.ingredients
        arr.push(e.target.value.slice(0, -1))
        e.target.value = ''
        this.setState({
          ...this.state,
          ingredients: arr
        })
      }
    }
  }
  render() {
    return [
      <div className={this.state.bottom ? 'Input' : 'Input InputUp'}>
        {this.state.loading && <Loader />}
        {this.state.ingredients && (
          <div className="ChipContainer">
            {this.state.ingredients.slice(0, 3).map((i) => (
              <span className="Chip" onClick={this.chipRemove} key={i.index}>
                {i}
                <img
                  src={require('../assets/images/cross.png')}
                  onClick={this.chipRemove}
                  key={i.index}
                  width="15"
                  height="15"
                  alt="cross"
                />
              </span>
            ))}
          </div>
        )}
        <input
          type="text"
          placeholder={
            this.state.ingredients.length === 0 ? 'Try: Onions, Garlic ...' : ''
          }
          onChange={this._onChange}
        />
        <button className="Mobile" onClick={this.searchRecipes}>
          <img
            src={require('../assets/images/search-icon.png')}
            width="12"
            height="12"
          />
        </button>
        <button className="MobilePlus" onClick={this.searchRecipes}>
          Search
        </button>
      </div>
      // <p className="SearchSubtext">
      //   Type in some ingredients you like and we will suggest you nice dishes
      //   that use it
      // </p>
    ]
  }
}
