import React, { Component } from "react";
import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types' ; 
import Modal from "components/Modal/Modal";

export default class ImageGalleryItem extends Component {
    state = {
        isModal:false,
    }
    openModal= ()=>{
        this.setState({isModal:true})
      }
      closeModal = () => {
        this.setState ({isModal:false})
      }
render () {
    const {id,webformatURL, largeImageURL} = this.props;

return <GalleryItem key={id}>
<GalleryImage  src={webformatURL} alt= " describe" onClick={this.openModal}/>
            {this.state.isModal && 
      <Modal onClose={this.closeModal}><img src={largeImageURL} alt=""/></Modal>}
        </GalleryItem>
}
}
ImageGalleryItem.propTypes = {
    webformatURL:PropTypes.string.isRequired ,
    largeImageURL: PropTypes.string.isRequired, 
}
