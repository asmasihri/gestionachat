import React, { useContext } from 'react'
import './Contenu.css' ; 
import data from '../../assets/data.js' ; 
import { Context } from '../context/langContext.js';
export default function Contenu() {
 const {lang} = useContext(Context) ; 
 console.log(lang)
  return (
    <div className='content'>
        <h1 className='title'> {data[lang].title} </h1>
        <p className='content-txt'> {data[lang].txt} </p>
      
    </div>
  )
}
