import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { Overlay, ModalWindow } from './Modal.styled';


export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscClick);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscClick);
  }

  onEscClick = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.onOverlayClick}>
        <ModalWindow>
          <img src={this.props.image} alt='' />
        </ModalWindow>
      </Overlay>
    );
  }
}
Modal.propTypes = {
    image:PropTypes.string.isRequired,
    onClose:PropTypes.func.isRequired
}