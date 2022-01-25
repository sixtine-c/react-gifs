import React from 'react';
import Gif from './gif';
import GifList from './gif-list';
import SearchBar from './searchbar';
// import ReactDOM from 'react-dom';

class App extends React.Component {
  render () {
    const GifIds = ["fUN9Jal2W57RqQXL2s", "Urc6QYceSk9O3FtgYL"];
    return (
      <div>
        <div className='left-scene'>
          <SearchBar />
          <Gif id="fUN9Jal2W57RqQXL2s" />
        </div>
        <div className='right-scene'>
          <GifList id = {GifIds}/>
        </div>
      </div>
    );
  }
}

export default App;
