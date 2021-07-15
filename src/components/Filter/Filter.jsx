import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div>
        <select onChange={this.props.handleKeyword}>
          {
            this.props.options.map(keyword => <option key={keyword} value={keyword}>{keyword}</option>)
          }
        </select>
        <select onChange={this.props.handleNumber}>
          {
            this.props.numbers.map(num => <option key={num} value={num}>{num}</option>)
          }
          </select>
      </div>
    )
  }
}
