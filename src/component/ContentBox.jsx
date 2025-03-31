import React , {useState} from 'react'
import { use } from 'react'
import styled from 'styled-components'
const ContentBox = () => {
    const handleOnChange =(event) => {
        
        
        setText(event.target.value);

    }
    const handleUpClick = () => {
        
           const newText=text.toUpperCase();
           setText(newText);
    }
    const handleLoClick = () => {
        
        const newText=text.toLowerCase();
        setText(newText);
 }
//     const handleSentenceClick = () => {
        
//         const newText=text[1 : ].lowerCase();
//         setText(newText);
//  }
    const handleClearClick = () => {
        
        const newText="";
        setText(newText);
 }
    
 
 const handleCopyClick = () => {
  navigator.clipboard.writeText(text);
}

const handleCaClick = () => {
  const newText = text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  setText(newText);
};
const handleInClick = () => {
  const newText = text.split(' ').reverse().join(' ');
  setText(newText);
};


    const [text, setText]=useState('write comment');
  return (
    <>
    
     <CommentBox>
        <div>
  <label className="form-label">Enter the text to analyze below</label><br /><br />
  <textarea className="form-control" value={text} onChange={handleOnChange} rows="7" cols="90"></textarea></div>
  <div className='btn'>
    <button className='b' onClick={handleUpClick}>UpperCase</button>
    <button className='bt' onClick={handleLoClick}>Lower case</button>
    {/* <button className='bt' onClick={handleSentenceClick}>Sentence case</button> */}
    <button className='bt' onClick={handleCaClick}>Capitalized case</button>
    <button className='bt' onClick={handleInClick}>InVers case</button>
    <button className='bt' onClick={handleCopyClick}>Copy text</button>
    <button className='bt' onClick={handleClearClick}>Clear</button>
 
  </div>
  <div className='form-label my-20'>
  <h1>Your text summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>
  {0.008* text.split(" ").length} Minutes read 
</p>

<h1 >
  Preview
</h1>

<p className='preview'>
{text}
</p>


</div>

</CommentBox>


    </>
  )
}

export default ContentBox

const CommentBox=styled.div`
margin-left: 30%;
margin-top: -20px;

.form-control{
    border: 3px solid blue;
    border-radius: 4px;
    
}

label{
  font-size: 30px;
}
.bt{
   
    border-radius: 2px;
border-color  :yellow ;
  padding-top: 2px 2px 2px 2px;
  margin: 5px;
}
.b{
  
    border-radius: 2px;
border-color  :yellow ;
  padding-top: 5px 5px 5px 5px;
  margin: 5px;
}
.preview{
  
      width: 700px;     
      height: 70px;     
      overflow: auto;   
     
       

      
    
}


`