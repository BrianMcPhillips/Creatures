import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './Header/Header';

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header /> 
      </div>
    )
  }
}
