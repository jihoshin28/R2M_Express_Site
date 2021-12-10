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
            <div>
                <Carousel 
                    showArrows = {true} 
                    showThumbs = {false}
                    showStatus = {false}
                    showIndicators = {false}
                    onChange={this.onChange} 
                    onClickItem={this.onClickItem}
                >
                <div>
                    <img src="https://www.roadtovr.com/wp-content/uploads/2015/03/youtube-logo2.jpg" />
                    
                </div>
                <div>
                    <img src="https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2017/07/moving-labor.jpg" />
                    
                </div>
                <div>
                    <img src="https://frick-transfer.com/wp-content/uploads/2016/08/moving.jpg"/>
                   
                </div>
            </Carousel>
            </div>

        )
    }    
}

export default ImageCarousel
