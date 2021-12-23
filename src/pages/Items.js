import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuote, getItems, addQuoteItem, editQuote} from '../actions'

export class Items extends Component {

    constructor(props){
        super(props)
        this.state = {
            orderData: {},
            itemsData: [],
            loading: true,
            items: {},
            addedItems: {},
            addedItemData: [],
            addedItemText: ''
        }
    }

    async componentDidMount () {
        
        let id = this.props.match.params.id
        console.log(id)
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
        let keyType = typeof key
        let current
        if(keyType === "string"){
            current = this.state.addedItems
        } else {
            current = this.state.items
        }
        let target = {}
        target[key] = newCount
        let newObject = Object.assign(current, target)
        
        this.setState(prevState => ({
            ...prevState, 
            [current]: newObject
        }))
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
                            <input class = "getQuote-item-count" disabled = "disabled" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" id = {`${item.id}`} ></input>
                            <button class = "btn btn-primary" onClick = {(e) => this.changeCount(e, item.id, '+')}>+</button> 
                        </div>
                    </div>
                ) 
            })
        }
    }

    renderAddedItems = () => {
        if(this.state.addedItemData !== undefined){
            return this.state.addedItemData.map((item, key) => {
                console.log(item,key)
                return(
                    <div class="getQuote-item">
                        <div>
                            <h4>
                                {item}
                            </h4>
                        </div>
    
                        <div class = "row">
                            <button class = "btn btn-danger" onClick = {(e) => this.changeCount(e, `a-${key + 1}`, '-')}>-</button> 
                            <input class = "getQuote-item-count" disabled = "disabled" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" id = {`a-${key + 1}`} ></input>
                            <button class = "btn btn-primary" onClick = {(e) => this.changeCount(e, `a-${key + 1}`, '+')}>+</button> 
                        </div>
                    </div>
                ) 
            })
        }
    }

    addItem = () => {
        if(this.state.addedItemText !== ""){
            let addedItemData = this.state.addedItemData
            this.setState({
                addedItemData: [...addedItemData, 
                    this.state.addedItemText
                ],
                addedItemText: ""
            })
            
        }
        console.log(this.state.addedItemData)

    }

    changeAddItem = (e) => {
        this.setState({
            addedItemText: e.target.value
        })
        console.log(this.state.addedItemText)
    }

    createOrderItems =() => {
        let itemIdArray = Object.keys(this.state.items)
      
        let quoteItemPromises = itemIdArray.map((item_id) => {
            let quantity = this.state.items[item_id]
            if(quantity > 0){
                return this.props.addQuoteItem(
                    {
                        item_id: item_id,
                        quantity: this.state.items[item_id],
                        quote_id: this.state.orderData.id
                    }
                )
            }
        })
        return quoteItemPromises
    }

    confirmItems = async() => {
        this.setState({
            loading: true
        })
        console.log(this.state.addedItems, this.state.addedItemData)
        let added_items_keys = Object.keys(this.state.addedItems)
        let added_items = {}
        for(let i = 0; i < added_items_keys.length; i++){
            let added_key = added_items_keys[i]
            let key = added_key.split('-')[1]
            let item_count = this.state.addedItems[added_key]
            let item_name = this.state.addedItemData[parseInt(key) - 1]
            if(item_count > 0){
                added_items[item_name] = item_count
            }
        }
        console.log(added_items)
        let quoteId = this.props.match.params.id
        let editResult = await this.props.editQuote(quoteId, {added_items: JSON.stringify(added_items)})
        let orderItemPromises = this.createOrderItems()
        console.log(orderItemPromises)
        if(!!editResult.status){
            await Promise.all([...orderItemPromises])
            .then(res => {
                console.log(res)
                this.props.history.push(`/enter_location/${quoteId}`)
                this.props.history.go()
            })
            .catch(err => console.log('error', err)) // This is executed   
        }
        // this.props.history.push(`/enter_location/${quoteId}`)
        // this.props.history.go()
        
    }


    render() {
        console.log(this.state.items, this.state.addedItems)
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
                       
                        <h1>
                            Select items for quote.
                        </h1> 
                            
                    </div> 

                    <div class = "getQuote">
                        <div >
                            <section class="mb-4">
                                <div class="row">
                                    <div class="col-md-12 mb-md-0 mb-5">
                                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                            <div class = "getQuote-title">
                                                <h2>Items</h2>
                                            </div>
                                            <div class = "border" style = {{marginBottom: '20px'}}></div>

                                            {this.renderItems()}

                                            <div class = "getQuote-title" style = {{marginTop: '35px'}}>
                                                <h2>Add Item</h2>
                                            </div>
                                            <div class = "border" style = {{marginBottom: '20px'}}></div>
                                            
                                            
                                            <div class="getQuote-add-item-row">
                                                <div class = "col-md-10">
                                                    <input value = {this.state.addedItemText} onChange = {(e) => this.changeAddItem(e)} style = {{width: '100%'}}/> 
                                                </div>
                                                <div class = "col-md-2">
                                                    <a class="btn" onClick = {() => this.addItem()} style = {{ padding: '10px', backgroundColor: "rgb(130, 212, 37)"}}>
                                                        <h4>Add Item</h4>
                                                    </a>
                                                </div>
                                            </div>

                                            {this.renderAddedItems()}
                                        
                                            <div class="row">
                                                <div class = "col-md-12">
                                                    <a class="btn" onClick = {() => this.confirmItems()} style = {{marginTop: '25px', padding: '15px', backgroundColor: "rgb(130, 212, 37)"}}>
                                                        <h3>Confirm Items</h3>
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
    
    export default connect(mapStateToProps, {getQuote, getItems, addQuoteItem, editQuote})(Items)
    