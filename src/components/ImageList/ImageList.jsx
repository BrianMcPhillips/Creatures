import React, { Component } from 'react';
import styles from './ImageList.module.css';
import ImageItem from './ImageItem/ImageItem';

export default class ImageList extends Component {
  render() {
    return (
      <div>
        <h1>ImageList</h1>
        <div className={styles.imageList}>
          {
            this.props.data.map(creature => <ImageItem key={creature} data={creature} />)
          }
        </div>
      </div>
    )
  }
}
