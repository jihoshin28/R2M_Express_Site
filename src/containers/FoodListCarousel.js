import React, { Component } from 'react';
import FoodList from '../containers/FoodList'
import '../Carousel.css'
import { Carousel } from 'react-responsive-carousel';

class FoodListCarousel extends Component {

    splitItems = (start, end) => {
        let currentItems = this.props.items.slice(start, end)
        return <FoodList items = {currentItems}/>
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
                    
                    dyanamicHeight= {true}
                    statusFormatter = {(current, total)=> 
                        `${current} / ${total}`
                    }
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                            </button>
                        )
                    }

                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                            </button>
                        )
                    }
                >
                        <div class= "carousel-div" >
                            {this.splitItems(0, 6)}
                        </div> 
                        <div class = "carousel-div">
                            {this.splitItems(6, 12)}
                        </div> 
                </Carousel>
            </div>

        )
    }    
}

export default FoodListCarousel
