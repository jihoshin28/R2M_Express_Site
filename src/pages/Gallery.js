import React, { Component} from 'react'
import { connect } from 'react-redux'
import ReactGallery from 'react-photo-gallery'
import Image from '../components/Image'
import ItemPic from '../components/ItemPic'
// import aboutPic from '../public/logo192.png'

const photos = [
    {
      src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      width: 4,
      height: 3,
      title: "Title 1"
    },
    {
      src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      width: 4,
      height: 3,
      title: "Title 2"
    },
    {
      src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      width: 1,
      height: 1,
      title: "Title 3"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 1,
        height: 1,
        title: "Title 4"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 1,
        height: 1,
        title: "Title 5"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 1,
        height: 1,
        title: "Title 6"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 1,
        height: 1,
        title: "Title 7"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 3,
        height: 2,
        title: "Title 8"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 1,
        height: 1,
        title: "Title 9"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 1,
        height: 1,
        title: "Title 10"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 1,
        height: 1,
        title: "Title 11"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 4,
        height: 3,
        title: "Title 12"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 1,
        height: 1,
        title: "Title 13"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 1,
        height: 1,
        title: "Title 14"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 3,
        height: 2,
        title: "Title 15"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 1,
        height: 1,
        title: "Title 16"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 1,
        height: 1,
        title: "Title 17"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 1,
        height: 1,
        title: "Title 18"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 4,
        height: 3,
        title: "Title 19"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        width: 1,
        height: 1,
        title: "Title 20"
    }
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
