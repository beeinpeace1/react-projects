import React, { Component } from "react";
import ReactDom from "react-dom";
import SearchBar from "./Components/Search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./Components/Video_list";

const API_KEY = "AIzaSyAYpegE6HsBo5Bi-wK_w-7bDupusLJ7HNk";

YTSearch({ key: API_KEY, term: "surfboards" }, function(data) {
  console.log(data);
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({ videos });
      // this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
