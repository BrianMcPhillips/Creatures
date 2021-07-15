import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './Header/Header';
import Filter from './Filter/Filter';
import ImageList from './ImageList/ImageList';
import { data, options, numbers } from '../assets/data';


export default class App extends Component {
  state = {
    filter: 'All',
    filterTwo: 'All'
  };

  handleKeyword = (e) => {
    this.setState({ filter: e.target.value })
  }

  handleNumber = (e) => {
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
        <Filter 
          options={options} 
          numbers={numbers} 
          handleKeyword={this.handleKeyword}
          handleNumber={this.handleNumber}/>
        <ImageList data={newFilterImages}/>
      </div>
    )
  }
}
