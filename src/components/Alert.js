import React from 'react'


function Alert(props) {
    // const capitalize = (word)=>{
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
  return (
  props.alert && <div className="alert alert-primary alert-dismissible fade show"  set role="alert">
    <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div>
  )
}

export default Alert
