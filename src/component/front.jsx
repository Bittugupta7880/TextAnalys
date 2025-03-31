import React from 'react'
import styled from 'styled-components'
import About from './about'
const front = (props) => {
  const about=<About/>
  return (
    <FrontPage>
 <h1>TextUtils</h1>

     <div className='content'>
     <div onClick={about}>About</div>
      <div>{props.title}</div>
      <div>SignUp</div>
     </div>

    </FrontPage>
  )
}

export default front
const FrontPage=styled.div`
display: flex;
justify-content: space-between;
margin: 20px;

background-color: #3c3939;
color: white;
/* padding-left: 30px; */
/* padding-right: 30px; */
width: 100%;
/* box-shadow: 2px 2px 1px black; */
cursor: pointer;
border-radius: 5px;
height: 40px;
margin-left: -6px;
/* display:inline-flex ; */
padding: 0px  6px 0 6px;
/* margin-right: 20px;
margin-left: 40px; */

.content{

    display: flex;
    gap: 40px;
    margin-top: 10px;
}
h1{
  margin-top: -2px;
}

`
