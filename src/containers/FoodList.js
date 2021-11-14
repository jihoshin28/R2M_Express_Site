import React from 'react'
import ItemCard from '../components/ItemCard'

const FoodList = props => {
    let itemCards = props.items.map((item, id) => {
        return <ItemCard key = {id} item_id = {parseInt(item.id)} image = {item.attributes.image} price = {(item.attributes.price * .01).toFixed(2)} name = {item.attributes.name} unit = {item.attributes.quantity_unit}/>
    })

    return (
        <div class= "container">
            <br></br>
                <div class = "row justify-content-center">
                    {itemCards}
                </div>
        </div>
    )
}

export default FoodList