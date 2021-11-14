import React from 'react'
import {Link } from 'react-router-dom'

const Category = props => {

    return (
        <div class = "col-sm-auto">
            <Link class = "category-btn menu-button roboFont" to = {`/products/${props.name}`} data-category = {props.name}>
                {props.title}
            </Link>
        </div>
    )
}
export default Category