import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyAS55Wx_lb19RJt60At4J9rkZDifMnFh5k';

// Create a new component. This component should produce some HTML.
// const App will never change at any point througout the app.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // You can only trigger a new search once every 300 ms.
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
        // All search bar has to do is call props.onSearchTermChange with a new search term
        // and that will call on our searching function and fetch new list of videos
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoLit
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
// Take this component's generated HTML and put it on the page(in the DOM).
ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
