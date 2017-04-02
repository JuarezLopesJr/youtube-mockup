import _ from 'lodash' //' _ ' means Lodash, commom practice
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar' // search_bar.js file
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyDvdlt9FNnckxSGZJ_jpNvI9qQbbifruVw'

// class based component, used to store values, update the state and ReactDOM
// main class component, parent component, react uses downward flow, means that
// the child component inherit from the upper most class component (parent)
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('atom text editor')

  }

videoSearch(term) {
  YTSearch({key: API_KEY, term}, (videos) => {
    this.setState({
      videos,   // same as {videos: videos}
      selectedVideo: videos[0]
    })
  })
}

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

    return (
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
              onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})
            }} // same as {this.setState({selectedVideo; selectedVideo}
              videos={this.state.videos} />

        </div>
    )
  }
}

ReactDOM.render(
    <App/>, document.querySelector('.container')
  )
