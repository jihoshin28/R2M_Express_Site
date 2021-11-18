import React, { Component } from 'react'
import { connect } from 'react-redux'
import {items} from '../items'

export class GetQuote extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        // this.props.testRoute(this.props.history)
    }

    changeCount = (e, key, type) => {
        e.preventDefault()
        if(this.state.items[key] === undefined){
            if(type === '+'){
                this.setState({
                    items: [...this.state.items, {key: 1}]
                })
            } else {
                return
            }
        } else {
            let currentCount = this.state.items[key]
            if(type === '+'){
                this.setState({
                    items: [...this.state.items, {key: currentCount + 1}]
                })
            } else {
                this.setState({
                    items: [...this.state.items, {key: currentCount - 1}]
                })
            }
        }
        
    }

    editCount = (key, count) => {
        if(this.state.items === undefined){
            this.setState({
                items: [...this.state.items, {key: count}]
            })
        }
    }

    requestQuote = () => {

    }

    renderItems = () => {
        let itemKeys = Object.keys(items)
        return itemKeys.map((itemKey) => {
            let item = items[itemKey]
            return(
                <div class="getQuote-item">
                    <div>
                        <h4>
                            {item.name}
                        </h4>
                    </div>

                    <div class = "row">
                        <button class = "btn btn-danger" onClick = {(e) => this.changeCount(e, itemKey, '-')}>-</button> 
                        <input onChange = {(e) => this.editCount(itemKey, e.target.value)}></input>
                        <button class = "btn btn-primary" onClick = {(e) => this.changeCount(e, itemKey, '+')}>+</button> 
                    </div>
                </div>
            ) 
        })
    }

    render() {
        console.log(this.state.items)
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
                                        {this.renderItems()}
                                    
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
