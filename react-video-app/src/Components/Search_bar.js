import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  render() {
    return (
      <div>
        value = {this.state.term}
        <input onChange={e => this.setState({ term: e.target.value })} />
      </div>
    );
  }
}
export default SearchBar;
