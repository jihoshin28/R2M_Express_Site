import React, { Component } from 'react'
import { connect } from 'react-redux'
import {login} from '../actions'
// import aboutPic from '../public/logo192.png'
export class AdminLogin extends Component {

    constructor(){
        super()
        this.state = {  
            loginInfo: {},
            loginState: false,
            errorMessage: ""
        }
    }

    componentDidMount() {
        console.log(this.props.match.params)
    }

    inputChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState((currentState) => ({
            loginInfo: {
                ...currentState.loginInfo,
                [name]: value
            }
        }))
        console.log(this.state.loginInfo)
    }

    login = async () => {
        let result = await this.props.login(this.state.loginInfo)
        console.log(result)
        if(result.success){
            this.props.history.push('/admin')
            this.props.history.go()
        } else {
            this.setState({
                errorMessage: result.message
            })
        }
    }

    render() {
        return (
            <div class = "admin-login-div">
                <div class="admin-login">
                    <h1 style = {{marginBottom: '30px'}}>Admin Login</h1>
                    <div class="input-group mb-3">
                        <input onChange = {(e) => this.inputChange(e)} type="text" name = "username" class="form-control" placeholder="Username"/>
                    </div>
                    <div class="input-group mb-3">
                        <input onChange = {(e) => this.inputChange(e)} type="password" name = "password" class="form-control" placeholder="Password"/>
                    </div>

                    <button onClick = {this.login}class = "btn btn-primary" style = {{marginTop: '20px'}}>Login</button>
                    {this.state.errorMessage === "" ? 
                        null
                        :
                        <div class = "error-div">
                            <div style = {{marginRight: '5px'}}>
                                <img class = 'error-img' src = {process.env.PUBLIC_URL + '/exclamation-mark.png'}></img>  
                            </div>
                            <div>
                                <h3>{this.state.errorMessage}</h3>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, {login})(AdminLogin)
