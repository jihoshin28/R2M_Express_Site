import React, {Component} from 'react'
import {connect} from 'react-redux'
import Searchbar from '../components/Searchbar'
import FoodListCarousel from '../containers/FoodListCarousel'


class Products extends Component {
    constructor(){
        super()
        this.state= {
            mountState: true
        }
    }

    componentDidUpdate(){
        if(!this.state.mountState){
            this.setState({
                mountState: true
            })
        }
    }
 
    onCategoryChange = (e) => {
        console.log(e.target.value)
        this.setState({
            mountState: false
        })
        this.props.history.push(`/products/${e.target.value}`, {mountState: true})
    }

    renderSideBar = (categoryTitle) => {
        return (
            this.props.categories.map( category => {
                
                if(category.title === categoryTitle){
                    return (
                        <div class="input-group-text category-radio">
                            <input type="radio" id = {`${category.name}`} name= "food-category" value={`${category.name}`} aria-label="Meat/Seafood Input" checked/> 
                            <p>{`${category.title}`}</p>
                        </div>
                    )
                } else {
                    return (
                        <div class="input-group-text category-radio">
                            <input type="radio" id = {`${category.name}`} name= "food-category" value={`${category.name}`} aria-label="Meat/Seafood Input"/>
                            <p>{`${category.title}`}</p>
                        </div>
                    )
                }
            })
        )
    }

    render(){
        let categoryData = this.props.categories.find((category) => category.name === this.props.match.params.category)
        let categoryTitle = categoryData.title
    
        return (
            <div class = "products">
                <div class = "sidebar">
                    
                    <div class = "sidebar-menu">
                        <h3>Categories</h3>
                        <form id= "category-form" onChange = {this.onCategoryChange}>
                            {this.renderSideBar(categoryTitle)}
                        </form>
                
                    </div>
                    
                </div>

                <div class = "content"> 
                    <div class = "container-fluid justify-content-center">
                        <h1 class = "productsHeader">{categoryTitle}</h1>
                        <div class = "row productsHeader">
                            <div class="col-sm-5">
                                <div className = "productsStore">
                                    <img style = {{height: '100%', width: '25%', marginBottom: "3%"}} src = {`${this.props.selectedStore.attributes.logo}`}></img>

                                </div>
                               
                            </div>
                            <div className = "col-sm-5">
                                <Searchbar history = {this.props.history} onSearchSubmit={this.props.onSearchSubmit} onSearchChange={this.props.onSearchChange}/>
                            </div>
                        </div>
                        {this.state.mountState ?
                            <FoodListCarousel items = {this.props.items}/>
                            :
                            <div></div>
                        }
                    </div>
                </div>
            </div>
        )
    }
    
}

        
const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return({
        categories: state.categories,
        items: state.items.itemsList.data.filter(item => item.attributes.category === ownProps.match.params.category),
        item: state.items.selectedItem,
        selectedStore: state.stores.selectedStore
    })
}

export default connect(mapStateToProps)(Products)
