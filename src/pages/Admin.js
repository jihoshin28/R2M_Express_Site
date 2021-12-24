import React, { Component } from 'react'
import { connect } from 'react-redux'
// import aboutPic from '../public/logo192.png'
export class Admin extends Component {

    constructor(){
        super()
        this.state = {  
            loginForm: {}
        }
    }

    componentDidMount() {
        console.log(this.props.match.params)
    }

    inputChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState((currentState) => ({
            loginForm: {
                ...currentState.form,
                [name]: value
            }
        }))
        console.log(this.state.loginForm)
    }

    render() {
        return (
            <div class = "admin">
                <div class="admin-login">
                    <h1 style = {{marginBottom: '30px'}}>Admin Login</h1>
                    <div class="input-group mb-3">
                        <input onChange = {(e) => this.inputChange(e)} type="text" name = "username" class="form-control" placeholder="Username"/>
                    </div>
                    <div class="input-group mb-3">
                        <input onChange = {(e) => this.inputChange(e)} type="password" name = "password" class="form-control" placeholder="Password"/>
                    </div>

                    <button class = "btn btn-primary" style = {{marginTop: '20px'}}>Login</button>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps)(Admin)
