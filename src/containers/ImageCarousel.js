import React, { Component } from 'react';
import '../Carousel.css'
import { Carousel } from 'react-responsive-carousel';

class ImageCarousel extends Component {

    onChange = () => {

    }

    onClickItem = () => {
        
    }

    onClickThumb = () => {
        
    }

    renderCarouselPics = () => {
        return this.props.pics.map((pic) => {
            return <div class = {`carousel-pic-div-${this.props.page}`}>
                <img class = "carousel-pic" src={process.env.PUBLIC_URL + `/r2m_pics/${pic}.jpeg`} />
            </div>
        })
    }

    render(){

        const arrowStyles = {
            position: 'absolute',
            zIndex: 2,
            top: 'calc(50% - 15px)',
            width: 30,
            height: 30,
            outline: 0,
            background:'transparent',
            border: 'none',
            color: 'transparent', 
            cursor: 'pointer',
        };

        return (
            <div class = {this.props.page === "labor" || this.props.page === "junk" ? "carousel-pic-short-div": "carousel-pic-div"}>
                <Carousel 
                    showArrows = {true} 
                    showThumbs = {false}
                    showStatus = {false}
                    showIndicators = {false}
                    interval = {3000}
                    autoPlay = {true}
                    infiniteLoop = {true}
                    onChange={this.onChange} 
                    onClickItem={this.onClickItem}
                >
                
                {this.renderCarouselPics()}
            </Carousel>
            </div>

        )
    }    
}

export default ImageCarousel
