import React, { Component} from 'react'
import { connect } from 'react-redux'
import ReactGallery from 'react-photo-gallery'
import Image from '../components/Image'
import ItemPic from '../components/ImageLink'
// import aboutPic from '../public/logo192.png'

const photos = [
    {
      src: process.env.PUBLIC_URL + `/r2m_pics/1.jpeg`,
      width: 4,
      height: 3,
      title: "Title 1"
    },
    {
      src: process.env.PUBLIC_URL + `/r2m_pics/2.jpeg`,
      width: 4,
      height: 3,
      title: "Title 2"
    },
    {
      src: process.env.PUBLIC_URL + `/r2m_pics/3.jpeg`,
      width: 3,
      height: 4,
      title: "Title 3"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/4.jpeg`,
        width: 3,
        height: 4,
        title: "Title 4"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/5.jpeg`,
        width: 5,
        height: 6,
        title: "Title 5"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/6.jpeg`,
        width: 1,
        height: 1,
        title: "Title 6"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/7.jpeg`,
        width: 1,
        height: 1,
        title: "Title 7"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/8.jpeg`,
        width: 3,
        height: 4,
        title: "Title 8"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/9.jpeg`,
        width: 3,
        height: 4,
        title: "Title 9"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/10.jpeg`,
        width: 3,
        height: 4,
        title: "Title 10"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/11.jpeg`,
        width: 1,
        height: 1,
        title: "Title 11"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/12.jpeg`,
        width: 4,
        height: 3,
        title: "Title 12"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/13.jpeg`,
        width: 1,
        height: 1,
        title: "Title 13"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/14.jpeg`,
        width: 1,
        height: 1,
        title: "Title 14"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/15.jpeg`,
        width: 2,
        height: 3,
        title: "Title 15"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/16.jpeg`,
        width: 1,
        height: 1,
        title: "Title 16"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/17.jpeg`,
        width: 1,
        height: 1,
        title: "Title 17"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/18.jpeg`,
        width: 1,
        height: 1,
        title: "Title 18"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/19.jpeg`,
        width: 3,
        height: 4,
        title: "Title 19"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/20.jpeg`,
        width: 2,
        height: 3,
        title: "Title 20"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/21.jpeg`,
        width: 1,
        height: 1,
        title: "Title 21"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/22.jpeg`,
        width: 1,
        height: 1,
        title: "Title 22"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/23.jpeg`,
        width: 1,
        height: 1,
        title: "Title 23"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/24.jpeg`,
        width: 1,
        height: 1,
        title: "Title 24"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/25.jpeg`,
        width: 2,
        height: 3,
        title: "Title 25"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/26.jpeg`,
        width: 4,
        height: 3,
        title: "Title 26"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/27.jpeg`,
        width: 4,
        height: 3,
        title: "Title 27"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/28.jpeg`,
        width: 1,
        height: 1,
        title: "Title 28"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/29.jpeg`,
        width: 2,
        height: 3,
        title: "Title 29"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/30.jpeg`,
        width: 2,
        height: 3,
        title: "Title 30"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/31.jpeg`,
        width: 3,
        height: 4,
        title: "Title 31"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/32.jpeg`,
        width: 3,
        height: 2,
        title: "Title 32"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/33.jpeg`,
        width: 3,
        height: 2,
        title: "Title 33"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/34.jpeg`,
        width: 1,
        height: 1,
        title: "Title 34"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/35.jpeg`,
        width: 3,
        height: 4,
        title: "Title 35"
    },
    {
        src: process.env.PUBLIC_URL + `/r2m_pics/36.jpeg`,
        width: 2,
        height: 3,
        title: "Title 36"
    },
  ];

class Gallery extends Component {

    constructor(props){
        super(props)
        this.state = {
            selectAll : false
        }
    }

    componentDidMount() {
        // this.props.testRoute(this.props.history)
    }

    imageRenderer = ({ index, left, top, key, photo }) => (
        <Image
          key={key}
          margin={"2px"}
          index={index}
          photo={photo}
          left={left}
          top={top}
        />
      )
    

    render() {
        return (
            <div>
                <div class="header">
                    <div class = "header-margin">
                        <h1 class= "header-banner">Gallery</h1>
                    </div>
                    {/* <a href="#" class="header-link">Link</a> */}
                </div>

                <div class = "gallery">
                    <div class = "gallery-header">
                        <h1>
                            Upack Haulers Service Gallery
                        </h1> 
                        <p>
                            Browse our gallery and see our moving services in action! 
                        </p>
                    </div>

                    <div class = "gallery-pics">
                        <ReactGallery photos = {photos} renderImage = {this.imageRenderer} />
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Gallery)
