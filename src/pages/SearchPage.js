import React from 'react'
import { connect } from 'react-redux'
import Searchbar from '../components/Searchbar'
import FoodList from '../containers/FoodList'

class SearchPage extends React.Component{

    componentDidMount(){
        console.log(!!this.props.items.find(item => item.attributes.name == this.props.match.params.item))
    }

    // searchTerm = () => {
    //     // store results in array   
    //     //find if current items from current store that include this search term
    //     //items must be checked in lower case
    //     let filteredItems = this.props.items.filter(item => 
    //         item.attributes.name.toLowerCase().includes(this.props.match.params.item)
    //     )
    // }
    render(){
        let filteredItems = this.props.items.filter(item =>
            item.attributes.name.toLowerCase().includes(this.props.match.params.item)
        )
        // let categoryData = this.props.categories.find((category) => category.name === this.props.match.params.category)
        // let categoryTitle = categoryData.title
        return(
            <div class="content">
                <div class="container-fluid justify-content-center">
                    <h1 class="productsHeader">Search</h1>
                    <div class="row productsHeader">
                        <div className="col-sm-5">
                            <h2>{this.props.selectedStore.attributes.name}</h2>
                        </div>
                        <div className="col-sm-5">
                            <Searchbar history = {this.props.history}/>
                        </div>
                    </div>
                    <div className = 'searchResult'>
                        {(filteredItems.length > 0) ? <FoodList items={filteredItems} /> : <h1>Sorry item doesn't exist!</h1>}
                    </div>
                </div>
            </div>

        )
        
    }
}
const mapStateToProps = state => {
    return ({
        items: state.items.itemsList.data,
        selectedStore: state.stores.selectedStore
    })
}
export default connect(mapStateToProps)(SearchPage)