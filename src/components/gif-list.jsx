import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render() {
    const gifList = this.props.id.map(gif => <Gif id = {gif} key={gif}/>);
    return (
      <div className='gif-list'>
          {gifList}
      </div>
    );
  }
}

export default GifList;
