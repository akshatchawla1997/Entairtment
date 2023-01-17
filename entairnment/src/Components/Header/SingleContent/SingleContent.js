import React from 'react'
import { img_300, unavailable } from '../../../config/Config'
import './SingleContent.css'

const SingleContent = (props) => {
  return (
    <>
    <div className='media'>
     <img className='poster' src={props.poster?`${img_300}/${props.poster}`: unavailable} alt={props.title}/>
     <b className='title'>{props.title}</b>
     <span className='subTitle'> {props.media_type === "tv"?"TV series":"Movie"}</span>
     <span className='subTitle'>{props.date}</span>
    </div>
     </>
  )
}

 

export default SingleContent