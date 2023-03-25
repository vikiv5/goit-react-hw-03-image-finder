import React, {Component} from "react";
import fetchImgApi from "./Api";
import Notiflix from "notiflix";
import Searchbar from "./Searchbar/Searchbar";



export default class App extends Component { 
  state = { 
    searchQuery:"" , 
    items : [],
    isLoading: false,
    page:1 ,
    totalhits : 200,

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
  }

 finally{
  this.setState({isLoading:false})
 }}}

 render()
 {
  const {handleSearch}=this;
  const {items, isLoading,totalhits,error} = this.state;
  return(
    <>
    <Searchbar handleSearch={handleSearch}/>
</>
  )}}