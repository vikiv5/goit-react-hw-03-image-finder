import React, {Component} from "react";
import fetchImgApi from "./Api";
import Searchbar from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import { Loader } from "./Loader/Loader";
import {Button} from "./Button/Button"


export default class App extends Component { 
  state = { 
    searchQuery:"" , 
    items : [],
    isLoading: false,
    page:1 ,
    totalhits : 200,
    
    

  }
  onOpenModalWithLargeImage = (url) => {
    this.setState({
      currentLargeImageURL: url,
    })
  }

  onModalClose = () => {
    this.setState({
      currentLargeImageURL: "",
    })
  }


 async componentDidUpdate (_, prevState) {
  ///const { searchQuery, page } = this.state;

if (prevState.searchQuery !==this.state.searchQuery||
  this.state.page !== prevState.page ) {
    try{
    this.setState({isLoading:true}) ;
    const data = await fetchImgApi(this.state.searchQuery, this.state.page)
    
  this.setState (state =>  ({
    items:[...state.items, ...data.hits]
  }));
  }
catch (error) {
  this.setState({error:true,isLoading:false})
  console.log (error)
  }

 finally{
  this.setState({isLoading:false})
 }}}


 handleSearch = (searchQuery) => {
  this.setState ({searchQuery,items : [], isLoading:false, error:false, page:1})
 }
onLoadMore =()=>{
  this.setState ((prevState) => ({
    page:prevState.page +1
  }))
}


 render()
 {
  const {handleSearch}=this;
  const {items, isLoading,totalhits,error,currentLargeImageURL} = this.state;
  return(
    <>
    <Searchbar handleSearch={handleSearch}/>
    {error && (<p> Sorry , nothing was found </p>)}
    {isLoading &&<Loader/>}
    {items.length > 0 && <ImageGallery items={items} onClick={this.onOpenModalWithLargeImage}/>}
    {currentLargeImageURL && (<Modal onClose={this.onModalClose} url={currentLargeImageURL}/>)}
    {items.length >= 12 && items.length< totalhits && !isLoading && <Button onLoadMore={this.onLoadMore}/>}
    

</>
  )}}