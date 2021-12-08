import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuote, getBooking, getItems, addQuoteItem, addBookingItem} from '../actions'

export class Items extends Component {

    constructor(props){
        super(props)
        this.state = {
            orderData: {},
            itemsData: {},
            loading: true,
            items: {}
        }
    }

    async componentDidMount () {
        
        let id = this.props.match.params.id

        let orderData = await this.props.getQuote(id)

        let itemsData = await this.props.getItems()
        
        this.setState({
            orderData,
            itemsData,
            loading: false
        })

    }

    changeCount = (e, key, type) => {
        e.preventDefault()
        let element = document.getElementById(key)
        let newCount
        if(element.value == "" || element.value == "0"){
            if(type === "+"){
                element.value = 1 
                newCount = 1
            } else if(type === "-"){
                return
            } 
        }  else {
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

    createOrderItems = () => {
        let itemIdArray = Object.keys(this.state.items)
        if(this.props.match.params.type=== 'quote'){
            console.log('quote hit')
            itemIdArray.forEach((item_id) => {
                let quantity = this.state.items[item_id]
                if(quantity > 0){
                    this.props.addQuoteItem(
                        {
                            item_id: item_id,
                            quantity: this.state.items[item_id],
                            quote_id: this.state.orderData.id
                        }
                    )
                }
            })
        } else if(this.props.match.params.type=== 'booking'){
            itemIdArray.forEach((item_id) => {
                let quantity = this.state.items[item_id]
                if(quantity > 0){
                    this.props.addBookingItem(
                        {
                            quantity,
                            item_id: item_id,
                            booking_id: this.state.orderData.id
                        }
                    )
                }
            })
        }
    }

    finalizeOrder = async() => {
        
        console.log(this.state.loading)
        await this.createOrderItems()
        this.setState({
            loading: false
        })
    }

    renderItems = () => {
        if(this.state.itemsData !== undefined){
            return this.state.itemsData.map((item) => {
                return(
                    <div class="getQuote-item">
                        <div>
                            <h4>
                                {item.name}
                            </h4>
                        </div>
    
                        <div class = "row">
                            <button class = "btn btn-danger" onClick = {(e) => this.changeCount(e, item.id, '-')}>-</button> 
                            <input disabled = "disabled" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" id = {`${item.id}`} ></input>
                            <button class = "btn btn-primary" onClick = {(e) => this.changeCount(e, item.id, '+')}>+</button> 
                        </div>
                    </div>
                ) 
            })
        }
    }

    render() {
        console.log(this.state.orderData)
        return (
            <div>
                {
                this.state.loading === true?
                <div class = "container loaderDiv" >
                    <div class = "loader">
                        
                    </div>
                    <h1>
                        Loading...
                    </h1>
                </div>
                :

                <div class = "container">
                    
                    <div class = "getQuote-header">
                        {
                            this.props.match.params.type === "quote" 
                            ?
                            <h1>
                                Select items for quote.
                            </h1> 
                            :
                            <h1>
                                Select items for booking.
                            </h1>
                        }
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
                                                    <a class="btn" onClick = {() => this.finalizeOrder()} style = {{marginTop: '25px', padding: '15px', backgroundColor: "rgb(130, 212, 37)"}}>
                                                    {
                                                        this.props.match.params.type === "quote" 
                                                        ?
                                                        <h3>
                                                            Get Quote
                                                        </h3> 
                                                        :
                                                        <h3>
                                                            Book Move
                                                        </h3>
                                                    }

                                                    </a>
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
                }   
            </div>
            )
        }
    }
    
    const mapStateToProps = state => {
        return {
            users: state.users
        }
    }
    
    export default connect(mapStateToProps, {getQuote, getBooking, getItems, addQuoteItem, addBookingItem})(Items)
    