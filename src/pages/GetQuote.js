import React, { Component } from 'react'
import { connect } from 'react-redux'

export class GetQuote extends Component {
    componentDidMount() {
        // this.props.testRoute(this.props.history)
    }

    requestQuote = () => {

    }

    changeCount = (key, count) => {

    }

    render() {
        return (
            <div class = "container">
                <div class = "getQuote-header">
                    <h1>
                        Get your free quote.
                    </h1>
                </div> 

                <div class = "getQuote">
                    <div >
                        <section class="mb-4">
                            <div class="row">
                                <div class="col-md-12 mb-md-0 mb-5">
                                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                        <div class = "getQuote-title">
                                            <h3>What items will you be moving?</h3>
                                        </div>
                                        <div class="getQuote-item">
                                            <div>
                                                <h4>
                                                    A Household Good - 1000 lbs 
                                                </h4>
                                            </div>

                                            <div class = "row">
                                                <button class = "btn btn-danger" onClick = {() => this.changeCount()}>-</button> 
                                                <input onChange = {() => this.changeCount()}></input>
                                                <button class = "btn btn-primary" onClick = {() => this.changeCount()}>+</button> 
                                            </div>
                                        </div>
                                        <div class="getQuote-item">
                                            <div>
                                                <h4>
                                                    A Household Good - 1000 lbs 
                                                </h4>
                                            </div>

                                            <div class = "row">
                                                <button class = "btn btn-danger" onClick = {() => this.changeCount()}>-</button> 
                                                <input onChange = {() => this.changeCount()}></input>
                                                <button class = "btn btn-primary" onClick = {() => this.changeCount()}>+</button> 
                                            </div>
                                        </div>
                                        <div class="getQuote-item">
                                            <div>
                                                <h4>
                                                    A Household Good - 1000 lbs 
                                                </h4>
                                            </div>

                                            <div class = "row">
                                                <button class = "btn btn-danger" onClick = {() => this.changeCount()}>-</button> 
                                                <input onChange = {() => this.changeCount()}></input>
                                                <button class = "btn btn-primary" onClick = {() => this.changeCount()}>+</button> 
                                            </div>
                                        </div>
                                    
                                    
                                        <div class="row">
                                            <div class = "col-md-12">
                                                <a class="btn" onClick = {() => this.requestQuote()} style = {{marginTop: '25px', padding: '15px', backgroundColor: "rgb(130, 212, 37)"}}><h3>Get Quote</h3></a>
                                            </div>
                                            <div class="status"></div>
                                        </div>
                                    </form>
                                </div>                            
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(GetQuote)
