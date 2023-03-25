import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = '33488620-f3c6f5bf900815c11263bf1e8' ; 

const fetchImgApi = async ( searchQuery, page ) => {
    const response  = await axios.get
     (`${BASE_URL}?q=${searchQuery}&page = ${page}&key = ${API_KEY}&image_type= photo&orientation =horizontal&per_page=12`);
     return response.data;
}

export default fetchImgApi;