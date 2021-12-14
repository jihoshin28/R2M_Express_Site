import React from 'react'
import {connect} from 'react-redux'
import {getQuote, finalizeQuote, confirmModal, loadingModal, clearModal } from '../actions'


class ConfirmQuote extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            form: {}, 
            loading: true,
            stair_display: false,
            error: false
        }
    }

    async componentDidMount(){
        let id = this.props.match.params.id

        let orderData = await this.props.getQuote(id)
        console.log(orderData)
        this.setState({
            orderData,
            loading: false,
            form: {move_size: '3 bedroom'}
        })
    }
    
    inputChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState((currentState) => ({
            
            form: {
                ...currentState.form,
                [name]: value
            }
        }))
    }

    stairDisplay = (e) => {
        this.setState({
            stair_display: e.target.checked
        })
        console.log(this.state.stair_display)
    }
    
    rangeChange = (e) => {
        let move_name
        let val = e.target.value
        if(val === '0'){
            move_name = 'Studio'
        } else if(val === '20'){
            move_name = '1 bedroom'
        } else if(val === '40'){
            move_name = '2 bedroom'
        } else if(val === '60'){
            move_name = '3 bedroom'
        } else if(val === '80'){
            move_name = '4 bedroom'
        } else if(val === '100'){
            move_name = '5 bedroom'
        }
        this.setState((currentState) => ({
            
            form: {
                ...currentState.form,
                move_size: move_name
            }
        }))
    }

    confirmQuote = async () => {
        console.log('confirm quote')
        
        this.props.loadingModal()
        let quoteId = this.props.match.params.id
        let result = await this.props.finalizeQuote(quoteId, this.state.form)
        
        if(!!result.status){
            this.props.history.push('/confirm_page')
            this.props.history.go()
            
        }
        
    }
    
    render(){
        return (
            <div>
                {
                this.state.loading === true?
                <div class = "container loaderDiv" >
                    <div class = "loader">
                        
                    </div>
                    <h1>
                        Loading...
                    </h1>
                </div>
                :
            
            <div class = "container">
                <div class = "addReview-header">
                    <h1>
                        Confirm Quote
                    </h1>
                </div> 
    
                <div class = "addReview">
                    <div class = "addReview-form">
                        <section class="mb-4">
                            <div class="row">
                                <div class="col-md-12 mb-md-0 mb-5">
                                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                            
                                        <div class = "row" style = {{marginBottom: '30px'}}>
                                            <div class = "col-md-4">
                                                <h1>Vehicle Size:</h1>
                                            </div>
                                            <div class="col-md-8">
                                                <h1>{this.state.orderData.vehicle_size}</h1>
                                            </div>
                                        </div>

                                        <div class = "row" style = {{marginBottom: '30px'}}>
                                            <div class = "col-md-4">
                                                <h1>Start Address:</h1>
                                            </div>
                                            <div class="col-md-8">
                                                <h6>{this.state.orderData.start_street}</h6>
                                                <h6>{this.state.orderData.start_city}, {this.state.orderData.start_state} {this.state.orderData.start_zip}</h6>
                                            </div>
                                        </div>

                                        <div class = "row" style = {{marginBottom: '30px'}}>
                                            <div class = "col-md-4">
                                                <h1>End Address:</h1>
                                            </div>
                                            <div class="col-md-8">
                                            <h6>{this.state.orderData.delivery_street}</h6>
                                                <h6>{this.state.orderData.delivery_city}, {this.state.orderData.delivery_state} {this.state.orderData.delivery_zip}</h6>
                                            </div>
                                        </div>

                                        <div class = "row" style = {{ marginBottom: '30px', marginTop: '30px'}}>
                                            <div class = "col-md-12">
                                                <h2>Select move size </h2>
                                                <h6>* rate based on vehicle size</h6>
                                            </div>
                                        </div>
                                   
                                        <div class = "row">
                                            <div class="col-md-12">
                                                <div class="md-form mb-0">
                                                    <label for="move_size" class="">Move Size</label>
                                                    <input onChange = {(e) => this.rangeChange(e)} type="range" id="move_size" start = "0" min="0" max="100" step="20" name="move_size" list="tickmarks" class="form-control"/>
                                                    <datalist id="tickmarks">
                                                        <option value="0"></option>
                                                        <option value="20"></option>
                                                        <option value="40"></option>
                                                        <option value="60"></option>
                                                        <option value="80"></option>
                                                        <option value="100"></option>
                                                    </datalist>
                                                </div>
                                                
                                            </div>
                                            <div class ="col-md-12" style = {{marginTop: '30px'}}>
                                                {!!this.state.form.move_size ?
                                                    <h1>{this.state.form.move_size}</h1>
                                                    :
                                                    null
                                                }
                                            </div>
                                        </div>

                                        <div class = "row" style = {{ marginBottom: '30px', marginTop: '50px'}}>
                                            <div class = "col-md-6">
                                                <label style = {{marginRight: '10px'}} for="stairs_display"><h2>Stairs? :</h2></label>
                                                <input onChange = {this.stairDisplay} type="checkbox" id="stairs_display" name="stairs_display"/>
                                            </div>
                                            
                                            {!!this.state.stair_display ?
                                                <div class="col-md-6">
                                                    <div class="md-form mb-0">
                                                        <input onChange = {this.inputChange} min = {2}type="number" id="floor" name="floor" class="form-control"/>
                                                        <label for="floor" class="">Which floor do you live on?</label>
                                                    </div>
                                                </div>
                                                :
                                                null
                                            }
                                            
                                        </div>
                                        {
                                            !!this.state.error ?
                                            <div class = "error-div">
                                                <div style = {{marginRight: '5px'}}>
                                                    <img class = 'error-img' src = {process.env.PUBLIC_URL + '/exclamation-mark.png'}></img>  
                                                </div>
                                                <div>
                                                    <h3>Please select move size</h3>
                                                </div>
                                            </div>
                                            :
                                            null
                                        }
                                        <div class="row">
                                            <div class = "col-md-12">
                                                <a class="btn" onClick = {() => this.confirmQuote()} data-toggle="modal" data-target="#Modal" style = {{marginTop: '50px', padding: '15px', backgroundColor: "rgb(130, 212, 37)"}}><h3>Confirm Quote</h3></a>
                                            </div>
                                            <div class="status"></div>
                                        </div>
                                    </form>
                                </div>                            
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            }
            </div>
        )

    }

    
}

const LoadingContainer = (props) => (
    <div>Loading...</div>
)

const mapStateToProps = (state) =>{
    return({
        
        // start_lat: state.stores.store_coords.lat + state.stores.user_coords.lat,
        // start_lng: state.stores.store_coords.lng + state.stores.user_coords.lng
        
    })
}

export default connect(mapStateToProps, {getQuote, finalizeQuote, confirmModal, loadingModal, clearModal})(ConfirmQuote)