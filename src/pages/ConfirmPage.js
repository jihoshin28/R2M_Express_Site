import React from 'react'

class ConfirmPage extends React.Component {

    goHome = () => {
        this.props.history.replace('/')
        this.props.history.go()
    }

    render(){
        return(
            
            <div class = "container">
                <div class = "addReview-header">
                    <h1>
                        Your quote was submitted!
                    </h1>
                </div> 
    
                <div class = "confirmPage">
                    <div class = "addReview-form">
                        <h2>
                            Thank you your quote has been submitted! 
                        </h2>
                        <h3>
                            We have sent you an email for confirmation, and we will follow up with you on your quote shortly!
                        </h3> 
                        <a class="btn" onClick = {() => this.goHome()} style = {{marginTop: '50px', padding: '15px', backgroundColor: "rgb(130, 212, 37)"}}><h3>Back Home</h3></a>
                    </div>
                </div>
            </div>
            
    
        )
    }
}

export default ConfirmPage