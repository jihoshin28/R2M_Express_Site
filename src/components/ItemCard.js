import React, {useState, useEffect} from 'react'
import ItemPic from './ItemPic'
import { connect } from 'react-redux'
import { addCartItem, removeCartItem } from '../actions'

const ItemCard = (props) => {
    let[ref] = useState(React.createRef())
    
    useEffect(() => {
        if (!!props.cart_item_ids.find(item => item[0] === props.item_id)){
            buttonToggle("add")
        } else {
            buttonToggle("remove")
        }
    })

    let buttonToggle = (toggle) => {
        let button = ref.current.children[1].children[2]
        let mouseOverFxn = (e)=> {
            button.children[0].src = `${process.env.PUBLIC_URL}/minus.svg`
            button.classList.remove('btn-success')
            button.classList.add('btn-danger')
        }
        let mouseOutFxn = (e) => {
            button.children[0].src = `${process.env.PUBLIC_URL}/check.svg`
            button.classList.remove('btn-danger')
            button.classList.add('btn-success')
        }
        if(toggle === "add"){
            button.children[0].src = `${process.env.PUBLIC_URL}/check.svg`
            button.classList.add('btn-success')
            button.addEventListener("mouseover", mouseOverFxn, true)
            button.addEventListener("mouseout", mouseOutFxn, true)
            button.addEventListener('click', () => {
                button.removeEventListener("mouseover", mouseOverFxn, true)
            })
            button.addEventListener('click', () => {
                button.removeEventListener("mouseout", mouseOutFxn, true)
            })
        } else if(toggle === "remove"){
            button.children[0].src = `${process.env.PUBLIC_URL}/plus.svg`
            button.classList.remove('btn-danger')
            button.classList.add('btn-primary')
        }
    }

    let cartItemToggle = (e) => {
        e.preventDefault()
        let cartItem = props.cart_item_ids.find(item => item[0] === props.item_id)
        if (!cartItem){
            buttonToggle("add")
            let cartItemInfo = {
                cart_id: props.cart_id,
                item_id: props.item_id,
                quantity_num: 1
            }
            props.addCartItem(cartItemInfo)
        } else {
            console.log(cartItem, props.cart_item_ids)
            buttonToggle("remove")
            props.removeCartItem(cartItem[1], props.item_id)
        }
    }

    return (
        <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <div class="card" ref = {ref}>
                <div >
                    {/* <ModalButton toggle= {()=> console.log('hello')} data-toggle="modal" data-target="#exampleModal"> */}
                    <ItemPic image = {props.image} item_id = {props.item_id} />
                </div>
                
                <div class="card-body-2">
                    <p class="card-title" style = {{ fontSize: "12px"}}>{props.name}</p>
                    <p style={{fontSize: "10px"}}> ${props.price}/{props.unit}</p>
                    <a class= "btn btn-primary" onClick={cartItemToggle}>
                        <img class = "card-button-img" alt="Image" />
                    </a>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = state => {
    return({
        cart_item_ids: state.cart.item_ids,
        cart_id: state.cart.cart_id,
        cart_items: state.cart.cart_items
    })
}


export default connect(mapStateToProps, {addCartItem, removeCartItem })(ItemCard)