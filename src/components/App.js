import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './Header/Header';
import ImageList from './ImageList/ImageList';
import data from '../assets/data';

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header /> 
        <ImageList data={data}/>
      </div>
    )
  }
}
