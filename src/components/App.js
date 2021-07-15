import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './Header/Header';
import ImageList from './ImageList/ImageList';
import data from '../assets/data';

const options = [
  'Unilego',
  'Narwhal',
  'Rhino',
  'Unicorn',
  'Markhor',
  'Mouflon',
  'Chameleon',
  'Lizard',
  'Dragon'
];

export default class App extends Component {
  state = {
    filter: 'Unilego'
  };

  handleOptionChange = (e) => {
    this.setState({ filter: e.target.value });
  }

  render() {
    const filteredImages = data.filter(creature => creature.keyword === this.state.filter);
    return (
      <div className={styles.App}>
        <Header /> 
        <div>
          <select onChange={this.handleOptionChange}>
            {
              options.map(keyword => <option key={keyword} value={keyword}>{keyword}</option>)
            }
          </select>
        </div>
        <ImageList data={filteredImages}/>
      </div>
    )
  }
}
