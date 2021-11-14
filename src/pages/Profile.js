import React, { Component } from 'react'
import {connect} from 'react-redux'
import { isEmpty } from 'lodash'

class Profile extends Component{
    
    capitalize(word){
        if(!!word){
            return word.charAt(0).toUpperCase() + word.slice(1)
        }
    }
    renderAddress(){
        return (
            `${this.props.userInfo.address}, ${this.props.userInfo.city}, ${this.props.userInfo.state} ${this.props.userInfo.zip_code}`
        )
    }
 
    editPage = (e) => {
        this.props.history.push(`/edit_shopper/${e.target.value}`)
    }

    renderProfile(){
        if(!isEmpty(this.props.currentShopper)){
            return (
                <div>
                    {/* <i class="fas fa-envelope fa-2x"></i><span class="counter counter-lg"></span> */}
                    <div>
                        <img class="profilePageImage" src={this.props.userAuthPic}></img>
                    </div>
                    <div className="segment">
                        <button value="image" onClick={(e) => this.editPage(e)}>Change</button>
                    </div>
                    <h4>{this.capitalize(this.props.userFirstName) + ' ' + this.capitalize(this.props.userLastName)}</h4>

                    <div>
                        <h4>Age: {this.props.userInfo.age}</h4>
                    </div>
                    <div>
                        <h4>Email: {this.props.userEmail}</h4>
                        <div className="segment">
                            <button value="email" onClick={(e) => this.editPage(e)}>Change</button>
                        </div>
                    </div>
                    <div>
                        <h4>Phone: {this.props.userInfo.phone}</h4>
                        <div className="segment">
                            <button value="phone" onClick={(e) => this.editPage(e)}>Change</button>
                        </div>
                    </div>
                    <div>
                        <h4>Address: {this.renderAddress()}</h4>
                        <div className="segment">
                            <button value="address" onClick={(e) => this.editPage(e)}>Change</button>
                        </div>
                    </div>
                    <div>
                        <h4>Number of Orders</h4>
                    </div>
                </div> 
            )
        }
        
    }

    render(){   
        return (
            <div>
                <h1>Profile Page</h1>
                <div class = "container">
                    {this.renderProfile()}
                </div>
            </div>

        )
    }
    
}

let mapStateToProps = state => {
    return ({
        currentShopper: state.auth.currentShopper,
        userAuthId: state.auth.currentShopper.id,
        userAuthPic: state.auth.currentShopper.image,
        userFirstName: state.auth.currentShopper.first_name,
        userLastName: state.auth.currentShopper.last_name,
        userInfo: state.auth.currentShopper.shopper_info,
        userEmail: state.auth.currentShopper.email
    })
}


export default connect(mapStateToProps)(Profile)