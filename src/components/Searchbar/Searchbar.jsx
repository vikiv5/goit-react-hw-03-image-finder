import React, {Component} from "react";
import PropTypes from 'prop-types'

import {
    SearchbarStyles,
    SearchForm,
    SearchFormButton,
    SearchFormInput,
  } from './Searchbar.styled';


export default class Searchbar extends Component {
    state = {
        value:"" ,
    };

    handleInputChange = e => {
        this.setState({ value: e.currentTarget.value.toLowerCase().trim() });
      };

      handleSubmit = e => {
        e.preventDefault()
        this.props.handleSearch(this.state.value);
        this.reset();
      }
      reset = () => {
        this.setState({value:""})
      }

      render() {
    const {value } = this.state;

    return (
        <SearchbarStyles>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit" aria-label="Search Button">
            
            </SearchFormButton>
  
            <SearchFormInput
              onChange={this.handleInputChange}
              value={value}
              type="text"
              placeholder="Search images and photos"
            />
          </SearchForm>
        </SearchbarStyles>
      );
    }
  }