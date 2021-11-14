import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import HomeSection from '../components/HomeSection'
// import aboutPic from '../public/logo192.png'
export class Home extends Component {
    componentDidMount(){
        console.log(this.props.signedIn)
        console.log("test")
    }
    
    render() {
        return (
            <div class = "App-margin">
                <div class = "homeMain">
                    <h1>
                        Welcome to BreadBasket!
                    </h1>
                        <img class="homeMainPic" src='https://secureservercdn.net/45.40.150.81/0m4.91e.myftpupload.com/wp-content/uploads/2020/03/groceries-and-meat-image-1038x576.jpg' />
                </div>
                
                
                <div class = "container">
                    <div class = "homeSection">
                        <div className = "row homeRow">
                            <h1> 
                                Shop from popular locations
                            </h1>
                            <p> 
                                Get groceries delivered from all your favorite locations. We have a large variety of stores to pick from, for all your specific grocery needs.
                            </p>
                        </div> 
                    </div>
                            <HomeSection>
                                <div className = 'col-2'>
                                    <div className = "storeLogoBubble">
                                <img class="storeLogo" src= "https://images.barrons.com/im-78993?width=1280&size=1"/> 
                                    </div>
                                </div> 
                                <div className='col-2'>
                                <div className="storeLogoBubble">
                                    <img class="storeLogo" src="https://sunrisemarketplace.com/wp-content/uploads/2020/03/3979_SMP-cvs-logo.jpg" />
                                </div>
                                </div> 
                                <div className='col-2'>
                                <div className="storeLogoBubble">
                                    <img class="storeLogo" src="https://d2lnr5mha7bycj.cloudfront.net/store_configuration/logo/212/white_label_landing_page_6217c6f4-ca57-4174-b463-b5508f095889.png" />

                                </div>
                                </div> 
                                <div className='col-2'>
                                <div className="storeLogoBubble">
                                    <img class="storeLogo" src="https://pbs.twimg.com/profile_images/1111764791503151104/2kXoX9z-.png" />

                                </div>
                                </div> 
                                <div className='col-2'>
                                <div className="storeLogoBubble">
                                <img class="storeLogo" src="https://photos.prnewswire.com/prnfull/20140919/147279" />

                                </div>
                                </div> 
                            </HomeSection>
                        
                            <HomeSection>
                                <div className = "col-8">
                                    <img className = "homeSectionPic" src= "https://img1.mashed.com/img/gallery/grocery-delivery-services-ranked-from-worst-to-first/intro-1585162312.jpg"/> 
                                </div>  
                                <div className = "col-4">
                                    <h4> Convenient service</h4>
                                    <p> Orders made on BreadBasket are made available for drivers in real time for quick and painless delivery. </p> 
                                </div> 
                            </HomeSection>
                    
                            <HomeSection>
                                <div className = "col-4">
                                    <h4>Update your orders live</h4>
                                    <p>
                                        Any last minute changes you want to make to your order? You can notify your driver on any changes you want to make on any current orders. 
                                    </p> 
                                </div> 
                                <div className = "col-8">
                                    <img className="homeSectionPic" src="https://www.gannett-cdn.com/media/2017/06/14/TennGroup/Knoxville/636330432728891184-instacart-0056.jpg?width=640" />
                                </div>
                            </HomeSection>
                            <HomeSection>
                                <div className = "col-8"> 
                                    <img className="homeSectionPic" src= "https://images.squarespace-cdn.com/content/v1/5bbd07174d546e20297c2ac0/1585075655832-JX0T0UXFFHOM1RWZUCZ8/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/photo-1542838132-92c53300491e.jpg?format=1500w"/>
                                </div>
                                <div className = "col-4">
                                    <h5>Organized shopping experience</h5>
                                    <p>
                                        Items are searchable by section or by name so you can quickly find the items you want to add to your order.
                                    </p>
                                </div> 
                            </HomeSection>
                        <h1>Make your first order today!</h1>
                        <div >
                            {
                                !!this.props.signedIn ? 
                                <Link to = '/orderpage'>
                                    Get Started
                                </Link>
                                :
                                <h3>But first, please sign in!</h3>
                            }
                        </div>
                            
                </div>
            </div>
        )
    }
}

let mapStateToProps= state => {
    return ({
        signedIn: state.auth.signedIn
    })
}

export default connect(mapStateToProps)(Home)
