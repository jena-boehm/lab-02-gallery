import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="body">
        <div className="main">
          <Header />
          <ImageList />
        </div>
      </div>
    )
  }
}

