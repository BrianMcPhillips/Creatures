import React, { Component } from 'react';
import styles from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.AppHeader}>
        <h1>Famous Horned Creatures</h1>
      </header>
    )
  }
}
