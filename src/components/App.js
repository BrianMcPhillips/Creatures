import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './Header/Header';
import ImageList from './ImageList/ImageList';
import { data, options, numbers } from '../assets/data';


export default class App extends Component {
  state = {
    filter: 'All',
    filterTwo: 'All'
  };

  handleKeywordChange = (e) => {
    this.setState({ filter: e.target.value })
  }

  handleNumberChange = (e) => {
    this.setState({ filterTwo: e.target.value })
  }

  render() {
    const filteredImages = data.filter(creature => 
      this.state.filter === 'All' ? true : creature.keyword === this.state.filter);

    const newFilterImages = filteredImages.filter(creature => 
      this.state.filterTwo === 'All' ? true : creature.horns === Number(this.state.filterTwo));
    return (
      <div className={styles.App}>
        <Header /> 
        <div>
          <select onChange={this.handleKeywordChange}>
            {
              options.map(keyword => <option key={keyword} value={keyword}>{keyword}</option>)
            }
          </select>
          <select onChange={this.handleNumberChange}>
            {
              numbers.map(num => <option key={num} value={num}>{num}</option>)
            }
          </select>
        </div>
        <ImageList data={newFilterImages}/>
      </div>
    )
  }
}
