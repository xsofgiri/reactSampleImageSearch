import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    console.log(`in app class ${term}`);

    const response = await axios.get(
      'https://api.unsplash.com/search/photos?client_id=YpxV06JD3P2tJ21CUm94Eri3XZUH8yQdzhUX9gjDKTU',
      {
        params: { query: term }
      }
    );
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList imageList={this.state.images} />
      </div>
    );
  }
}

export default App;
