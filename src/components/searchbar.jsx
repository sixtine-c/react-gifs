import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class SearchBar extends Component {
  handleOnChange = (event) => {
    console.log(event.target.value);
  }
  render() {
    return (
      <input type= "text" className='form-control form-search' onChange= {this.handleOnChange} />
    );
  }
}

export default SearchBar;
