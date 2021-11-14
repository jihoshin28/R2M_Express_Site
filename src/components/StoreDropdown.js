import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {selectStore, getCategories, getItems, removeCartItem, dropCart, startCart, storeCoords} from '../actions'

class StoreDropdown extends React.Component {

    componentDidMount(){
        this.getAddress()
    }

    componentDidUpdate(prevState){
        console.log(prevState, this.props)
        if(prevState.selectedStore.id !== this.props.selectedStore.id){
            this.props.getItems(this.props.selectedStore.attributes.id)
            this.props.dropCart(this.props.cartId)
            this.props.startCart({ shopper_id: this.props.shopperId })
            this.props.getCategories(this.props.selectedStore.attributes.id - 1)
            this.getAddress()
        }
    }

    getAddress = async () => {
        let location = await axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.store_params}&key=AIzaSyD-d4NIENxdIYOCE7gIRwvzTIZGRLobMdg`)
        console.log(location)
        this.props.storeCoords(location.data.results[0].geometry.location)
    }

    
    storeOptions = () => {
        return this.props.stores.map((store, id)=> {
            return (
                <button key = {id} class="dropdown-item" id = {store.attributes.id} value={store.attributes.name}>{store.attributes.name}</button>
            )
        })
    } 

    selectStore = (e) => {
        let store = this.props.stores.find(store => store.id == e.target.id)
        this.props.selectStore(store)
        // window.history.pushState({}, '', '/orderpage')
        // window.history.go()
    }

    render() {
        return (
            
            <div class = "mapSearchComponent">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.props.selectedStore.attributes.name}
                    </button>
                    <div onClick = {(e) => this.selectStore(e)} class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {this.storeOptions()}
                    </div>
                </div>
                <button class = "btn btn-primary" onClick={() => this.props.history.push('/map_page')}>See Location</button>     
            </div>
        )
    }
}

let mapStateToProps = state => {
    return ({
        shopperId: state.auth.currentShopper.id,
        stores: state.stores.storesList,
        selectedStore: state.stores.selectedStore,
        cartItems: state.cart.cart_items,
        cartId: state.cart.cart_id,
        store_params: [
            state.stores.selectedStore.attributes.address.street.split(' ').join('+'),
            state.stores.selectedStore.attributes.address.city.split(' ').join('+'),
            state.stores.selectedStore.attributes.address.state
        ].join('+')
    })
}

export default connect(mapStateToProps, {selectStore, getCategories, getItems, removeCartItem, dropCart, startCart, storeCoords})(StoreDropdown)