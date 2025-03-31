import React, { Component } from 'react'
import { useState } from 'react';
import Front from './component/front';
import ContentBox from './component/ContentBox';
import About from './component/about';

const App = () => {
//   const fun = () => {

//   };
// const [first, setfirst] = useState(<ContentBox/>)
  return (
    <div>
     <Front title="SignIn" />
     <ContentBox/> 
     {/* <About/> */}

     </div>
  )
}

export default App

