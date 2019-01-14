import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider/Slider';
import ImageList from './components/UserInput/ImageList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://images.unsplash.com/photo-1547319795-8af22c2607fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      ]
    }
  }

  addImage = (e) => {
    e.preventDefault(); //very important because it will stop reloading the page
    let val = document.getElementById('imageUrl').value;
    const images = [...this.state.images, val]

    // use sperad operator to store the images in reverse.
    // const images = [val, ...this.state.images]

    this.setState({
      images: images
    });
    document.getElementById('imageUrl').value = ''
    // console.log(this.state.images)

  }
  render() {
    return (
      <div >
        <ImageList images={this.state.images} addImage={this.addImage} />
        <Slider images={this.state.images} />
      </div>
    );
  }
}

export default App;
