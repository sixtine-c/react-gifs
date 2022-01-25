import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Gif extends Component {
  render() {
    const src = `https://giphy.com/embed/${this.props.id}`;
    return (
      <div className='selected-gif'>
        <iframe src={src} width="300" height="300" frameBorder="0" className="gif" allowFullScreen></iframe>
      </div>
    );
  }
}

export default Gif;
