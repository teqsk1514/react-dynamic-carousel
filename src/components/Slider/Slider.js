import React, { Component } from 'react'
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            translateValue: 0
        };
    }

    prevSlide = () => {
        console.log('prev');

        // if (this.state.currentIndex === 0) {
        //     return this.setState({
        //         currentIndex: this.state.images.length - 1,
        //         translateValue: this.state.translateValue + -(this.slideWidth())
        //     })
        // }


        // Exiting the method early if we are at the end of the images array.
        if (this.state.currentIndex === 0) {
            return
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue - -(this.slideWidth())
        }));
        console.log(this.state.translateValue);
        console.log(this.state.currentIndex);
    }

    nextSlide = () => {
        // also reset currentIndex and translateValue, so we return
        // to the first image in the array.
        if (this.state.currentIndex === this.props.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }


        console.log('next')
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
        console.log(this.state.currentIndex);
        console.log(this.state.translateValue);
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        const imageList = [...this.props.images]; //use sperad operatoe to duplicate the prop array
        const slides = imageList.reverse().map((image, index) => {
            return <Slide key={index} image={image} />
        });
        return (
            <div className="slider">
                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}>
                    {slides}
                </div>
                {this.state.currentIndex === 0 ? null : <LeftArrow click={this.prevSlide} />}

                <RightArrow click={this.nextSlide} />
            </div>
        )
    }
}

