import React from 'react'

const Stars = ({rating}) => {
    return(
        <div className = "star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <i 
                        style = {index <= rating ? {color: 'rgb(255, 231, 19)'}: {color: 'gray'}}
                        class="fa fa-star" 
                        aria-hidden="true"
                    ></i>
                )
            })}
        </div>
    )
}

export default Stars