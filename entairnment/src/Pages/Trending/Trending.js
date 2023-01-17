import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../pages.css";
import SingleContent from '../../Components/Header/SingleContent/SingleContent';


function Trending() {
     const [content,setContent]=useState([])

     const fetchTrending= async()=>{
     const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
     setContent(data.results);
}
useEffect(()=>{
     fetchTrending();
},[]);
  return (
    <>
    <div className='pageTitle'>
     <h1 >Trending</h1>
    </div>
    <div className='trending'>
     {content && content.map((c)=>{
     return (<SingleContent key={c.id} 
     id={c.id} 
     poster={c.poster_path} 
     title={c.title || c.name} 
     date={c.first_Air_date||c.release_date}  
     media_type={c.media_type} 
     vote_average={c.vote_average} 
     />)})}
     
    </div>
     </>
  )
}

export default Trending