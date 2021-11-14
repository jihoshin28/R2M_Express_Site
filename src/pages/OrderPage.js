import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getItems, getCategories, selectStore, dropCart, getCart, getActiveOrders, userCoords, getItem} from '../actions'
import StoreDropdown from '../components/StoreDropdown'
import Searchbar from '../components/Searchbar'
import FoodCategoryNav from '../containers/FoodCategoryNav'
import FoodListCarousel from '../containers/FoodListCarousel'
import {Link} from 'react-router-dom'
class OrderPage extends Component {

    componentDidMount(){
        console.log(this.props.cartId, this.props.shopperId)
        navigator.geolocation.getCurrentPosition(this.success.bind(this), this.error)
        this.props.getItems(this.props.selectedStore.attributes.id)
        this.props.getActiveOrders(this.props.shopperId)
        this.props.getCategories(this.props.selectedStore.attributes.id - 1)
    }

    success(pos){
        console.log(this.props)
        if(!!pos){
            var crd = pos.coords
            console.log("YOU ARE CURRENTLY HERE -->", { lat: crd.latitude, lng: crd.longitude })
            this.props.userCoords({lat: crd.latitude, lng: crd.longitude})
        }
    }
    
    error(err){
        console.warn(`ERROR: ${err.code}: ${err.message}`)
    }

    componentDidUpdate(prevState){
        if (prevState.cartId !== this.props.cartId){
            this.props.getCart(this.props.cartId)
        }
    }

    render() {
        return (
            <div class = "App-margin">
                <br></br><br></br>
                <div class = "row">
                    <div class="col-sm-4 storeDropdown">
                        <StoreDropdown history = {this.props.history}/>
                    </div>
                    
                    <div class="col-sm-4 storeName">
                        <h1>{this.props.selectedStore.attributes.name}</h1>
                        <img style = {{height: '70%', width: '25%', borderRadius: '10px'}} src = {`${this.props.selectedStore.attributes.logo}`}></img>
                    </div>
                    <div class="col-sm-4 searchBar">
                        <Searchbar history = {this.props.history}/>
                    </div>
                </div>
                <br></br>
                <div class = "row justify-content-center">
                    <FoodCategoryNav history={this.props.history} categories= {this.props.categories}/>
                </div>
                <br></br><br></br>
                
                {
                    this.props.categories.map(category => {
                        let items = this.props.items.filter(item => item.attributes.category === category.name)
                        return (
                            <div class = "food-items-section">
                                <h1>{category.title}</h1>
                                <FoodListCarousel items = {items}/> 
                            </div>
                        )   
                    })
                }
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        activeOrders: state.order.active_orders,
        items: state.items.itemsList.data,
        categories: state.categories,
        stores: state.stores.storesList,
        selectedStore: state.stores.selectedStore,
        shopperId: state.auth.currentShopper.id,
        cartId: state.cart.cart_id,
        cartItems: state.cart.cart_items,
        item: state.items.selectedItem,
        item_ids: state.cart.item_ids
    })
}

export default connect(mapStateToProps, {getItems, getItem, getCategories, selectStore, dropCart, getCart, getActiveOrders, userCoords})(OrderPage)
