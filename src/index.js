import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDfnLmLjl_rpzUCQmh0oVdHN5ODIOnZ9uw';

// Create a new component. This component should produce some HTML
// Constant never change
// Class can use extends
// () => equal to function()
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
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
        });
    }

    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
        <div>
            <SearchBar onSearchTermChange = {videoSearch} />
            <VideoDetail video = {this.state.selectedVideo} />
            <VideoList 
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos = {this.state.videos} />
        </div>
        );
    }
};

// Take this component's generated HTML and put it on the page (in the DOM)
// Need instance in parameter
// If u want to make class into an instance u have to render first (after coma)
ReactDOM.render(<App />, document.querySelector('.container'));