import React,{useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    // let myStyle = {
    //   color: props.mode === 'dark'?'white':'black',
    //   backgroundColor: props.mode === 'dark'?'white':'white'
    // }

    const [Btntext, setBtntext] = useState("Enable Dark Mode")

    let toggleStyle = () =>{
        if (myStyle.color === 'white'){
            setMyStyle ({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtntext("Enable Dark Mode")
        }
        else {
            setMyStyle ({
                color: 'white',
                backgroundColor: 'rgb(7, 15, 43)'
            })
            setBtntext("Enable Light Mode")
        }
    }

    // const iswhitebackground = true;
    // const textcolor = iswhitebackground ? 'rgb(7, 15, 43)' : 'white';

  return (
   <div >
      <h1  className = "my-0 py-2" style={myStyle}>About Us</h1>
      <div className="accordion" id="accordionExample" style = {myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse"style = {myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Analyze Your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style = {myStyle}>
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" style = {myStyle}>
      <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Browser compatible
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style = {myStyle}>
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" style = {myStyle}>
      <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Free To use
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style = {myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className="container py-3 "  >
    <button className = "btn btn-primary" onClick = {toggleStyle} >{Btntext}</button>
</div>
    </div>
  )
}
