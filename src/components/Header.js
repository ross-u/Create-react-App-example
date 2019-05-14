// components/Header.js
import React from 'react'
import logo from './../logo.svg';
import Title from './Title';
import Description from './Description';


const someText = () => 'LALALALALALALA';

function header(props) {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt=""/>

      <Title data={props.name} myFunc={someText} />
      
      <Description data="Welcome to React, Ironhacker!" />
    </header>
  )
}


// data and pass string "Welcome to React, Ironhacker!"

export default header;