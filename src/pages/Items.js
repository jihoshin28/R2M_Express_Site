import React, { Component } from 'react'
import { connect } from 'react-redux'
import {items} from '../items'

export class Items extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: {}
        }
    }
    componentDidMount() {
        // this.props.testRoute(this.props.history)
    }

    changeCount = (e, key, type) => {
        e.preventDefault()
        let element = document.getElementById(key)
        let newCount
    
        if(element.value == ""){
            element.value = 1 
            newCount = 1
        } else {
            let currentCount = parseInt(element.value)
            if(type === '+'){
                element.value = currentCount + 1
                newCount = currentCount + 1

            } else if(type === "-"){
                element.value = currentCount - 1
                newCount = currentCount - 1
            }
        }

        let current = this.state.items
        let target = {}
        target[key] = newCount
        let newObject = Object.assign(current, target)
        
        this.setState(prevState => ({
            ...prevState, 
            items: newObject
        }))
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
                        <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" id = {`${itemKey}`} onChange = {(e) => this.changeCount(e, itemKey, 'a')}></input>
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

export default connect(mapStateToProps)(Items)
