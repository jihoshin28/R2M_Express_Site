import React from 'react'
import CategoryLink from '../components/CategoryLink'

const FoodCategories = props => {
    return (
        <div class="row justify-content-center foodCategoryNav" >
            {props.categories.map(category => {
                return <CategoryLink history = {props.history} name = {category.name} title = {category.title} />
            })}
        </div>
    )
}

export default FoodCategories