import React, { Component } from 'react'
import './Card.css'
export default class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div className="CardHeader">
          <h4 className="CardTitle">{this.props.data.title}</h4>
          <img
            class="CardImage"
            src={this.props.data.thumbnail}
            height="20"
            width="20"
            alt="recipe"
          />
        </div>

        <div className="CardBody">
          <h6>INGREDIENTS</h6>
          {this.props.data.ingredients
            .split(',')
            .slice(0, 8)
            .map((i) => (
              <span class="Chip ChipSmall">{i}</span>
            ))}
        </div>
        <h6
          className="CardFooter"
          onClick={() => window.open(this.props.data.href, '_blank')}
        >
          <p>VIEW RECIPE</p>
          <img
            width="15"
            height="15"
            src={require('../assets/images/arrow.png')}
            onClick={() => console.log('chip clicked')}
            alt="arrow"
          />
        </h6>
      </div>
    )
  }
}
