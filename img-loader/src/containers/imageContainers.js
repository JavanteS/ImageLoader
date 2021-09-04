import { Component } from 'react';
import ImagesDisplay from '../displayImages/images';
import { fetchImages } from '../actions/images';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import NavBar from '../Navbar';
import Form from '../Form';

class ImageContainer extends Component {

    componentDidMount(){

        this.props.fetchImages()
    }

    render(){
        return (
            <div>
              <NavBar/>
              <Route exact path="/" component={Form}/>  
              <Route exact path="/images" render={()=><ImagesDisplay images={this.props.images}/>}/>
            </div>
            
            // <ImagesDisplay images={this.props.images}/>
        )
    }
}
const mapStateToProps = state => {
    return {
      images: state.reducer.images,
      loading: state.reducer.loading
    }
  }

export default connect(mapStateToProps, {fetchImages})(ImageContainer)