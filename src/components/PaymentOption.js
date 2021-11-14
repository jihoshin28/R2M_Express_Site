import React from 'react' 
import { Link } from 'react-router-dom'
import Address from '../components/checkout_options/Address'
import CheckoutPayment from '../components/checkout_options/CheckoutPayment'
import Contact from '../components/checkout_options/Contact'
import DeliveryNote from '../components/checkout_options/DeliveryNote'
import DeliveryTime from '../components/checkout_options/DeliveryTime'
import Substitute from '../components/checkout_options/Substitute'
import Tip from '../components/checkout_options/Tip'

class PaymentOption extends React.Component{
    constructor(props){
        super()
        this.state = {
            selectType: props.selectType,
            showBottomEdit: false,
            
        }
        this.showBottomToggle = this.showBottomToggle.bind(this)
    }

    componentDidMount(){
        if(!this.props.selectType){
            this.setState({
                showBottomEdit: true
            })
        }
    }

    showBottomToggle = ()  => {
        if(!this.state.showBottomEdit){
            this.setState({
                showBottomEdit: true
            })
        } else {
            this.setState({
                showBottomEdit: false,
                
            })
        }
    }

    renderSelect = (state) => {
        if(!!state){
            return (
                <Link onClick = {() => this.showBottomToggle()}>
                    &#10006;
                </Link>
            )
        } else {
            return (
                <Link onClick = {() => this.showBottomToggle()}>
                    {this.state.selectType}
                </Link>
            )
        } 
    }

    renderBottomOption = () => {
        if(this.props.title === 'Phone Number'){
            return <Contact numbers = {this.props.userNumbers} />
        } else if (this.props.title === 'Address'){
            return <Address addresses = {this.props.userAddresses}/>
        } else if (this.props.title === 'Tip'){
            return <Tip />
        } else if (this.props.title === 'Delivery Time'){
            return <DeliveryTime />
        } else if (this.props.title === 'Substitution Preference'){
            return <Substitute />
        } else if (this.props.title === 'Delivery Notes'){
            return <DeliveryNote showBottomToggle = {this.showBottomToggle}/>
        } else if (this.props.title === 'Payment Method'){
            return <CheckoutPayment />
        }
    }

    render(){
        return(
            <div className = "payment-option">
                    <div className = "row payment-option-line">
                        <div>
                            <h3>
                                {this.props.title}
                            </h3>
                        </div>
                        <div>
                            {this.state.selectType ? 
                                this.renderSelect(this.state.showBottomEdit)
                                :
                                <div></div>
                            }
                            
                        </div>
                    </div>
                    <div className = "payment-divider">
                    </div>
                    <div className = "row payment-option-line">
                        
                        {this.state.showBottomEdit ? 
                            this.renderBottomOption()
                            :
                            <div className = "bottomContent">
                                {this.props.bottomContent}
                            </div>
                        }

                    </div>
            </div>
        )
    }
}

export default PaymentOption 