import React, { Component } from 'react';
import styles from './ImageItem.module.css';

export default class ImageItem extends Component {
  render() {
    return (
      <div className={styles.item}>
        <img src={this.props.data.url} alt={this.props.data.title}/>
      <h3>{this.props.data.title}</h3>
      </div>
    )
  }
}
