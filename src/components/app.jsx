import React from 'react';
import giphy from 'giphy-api';
import Gif from './gif';
import GifList from './gif-list';
import SearchBar from './searchbar';

const GIPHY_API_KEY = 'yJIMtur7mrHZDrPQnDFmrfMnI1XoXLAS';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "fUN9Jal2W57RqQXL2s"
    };
  }


  search = (query) => {
    const giphEndPoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`;
    fetch(giphEndPoint)
    .then(response => response.json())
    .then((data) => {
      const gifs = data.data.map(giph => giph.id);
      this.setState({
        gifs: gifs
      })
    })
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <Gif id={this.state.selectedGifId} />
        </div>
        <div className="right-scene">
          <GifList id={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
