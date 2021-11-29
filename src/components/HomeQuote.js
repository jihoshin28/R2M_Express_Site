import React from 'react'

let HomeQuote = ({text, author, city}) => {
    return(
        <div class = "home-quote">
            <div>
                <i class="fa fa-quote-right home-quote-icon" aria-hidden="true"></i>
            </div>
            <div class = "home-quote-text">
                <h4>
                    {text}
                </h4>
            </div>
            <div style = {{marginTop: '20px'}}>
                <h2>
                    {author}
                </h2>
            </div>
            <div>
                <h4>
                    {city}
                </h4>
            </div>
        </div>
    )
}

export default HomeQuote