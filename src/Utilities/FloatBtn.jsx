import React from 'react'
import {useLocation } from 'react-router-dom'
function FloatBtn(props) {
    const path = useLocation();
  return (
    <a
    style={{display: path.pathname ==="/Home"? "none" :""}}
    target="_blank"
    rel="noopener noreferrer"
    href={props.resume}
    className="my-btn btn--float"
>
</a>
  )
}

export default FloatBtn