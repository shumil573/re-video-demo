import logo from './logo.svg';
import React from 'react';
// import './App.css';

class Video extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    console.log(this.props.source)
    return (
        <video source={this.props.source}></video>
    )
  }
}

export default Video;
