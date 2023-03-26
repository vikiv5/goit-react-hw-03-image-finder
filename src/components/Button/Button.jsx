import React from 'react';
import PropTypes from 'prop-types';

import { BtnContainer, Btn } from './Button.styled';

export const Button = ({ onLoadMore}) => (
  <BtnContainer>
    <Btn type="button" onClick={onLoadMore}>
      Load more...
    </Btn>
  </BtnContainer>
);

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

