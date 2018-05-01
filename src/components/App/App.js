import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
// Import Components
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      businesses: []
    };
    this.seachYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
