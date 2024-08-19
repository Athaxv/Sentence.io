import React, {useState} from 'react'



export default function TextForm(props) {
    // const [bg, setbg] = useState({
    //     backgroundColor: 'white',
    //     color: 'black'
    // })
    
    const [text, setText] = useState('Enter text here');
    // setText("dfvdf"); correct way to change the state

    const handleUpClick = () =>{
        // console.log("Uppercase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        // console.log(text);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = () =>{
        // console.log("Lowercase was clicked");
        let LoText = text.toLowerCase();
        setText(LoText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClear = () =>{
        setText(" ");
        
    }
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.currentTarget.value);
    }
    const handleSpeech = () =>{
        let NewSpeech =new SpeechSynthesisUtterance(text);
        // NewSpeech.text = text;
        window.speechSynthesis.speak(NewSpeech);
        props.showAlert("Your written Text is now been spoken", "success");
    }

    

  return (
    <>
    <div className='container' style = {{color: props.mode==='dark'?'white':'black'}}>
        <h1 style = {{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" className="form-label">Enter Text Here</label> */}
        <textarea className="form-control" value = {text} style = {{backgroundColor: props.mode==='dark'?'dark':'white'}} onChange = {handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <div className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert To Uppercase</div>
        <div className="btn btn-primary mx-2" onClick = {handleLoClick}>Convert To Lowercase</div>
        <div className="btn btn-primary mx-2" onClick = {handleClear}>Clear Text</div>
        <div className="btn btn-primary mx-2" onClick = {handleSpeech}>Speak</div>
    </div>
    <div className="container my-2" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h2 style = {{color: props.mode==='dark'?'white':'black'}}>Your Text Summary</h2>
        <p>{text.split(" ").filter((element) =>{return element.length!== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to Preview it"}</p>
    </div>
    </>
  )
}
