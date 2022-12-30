import React from 'react'

function NormalBtn(props) {
  return (
    <a
    target="_blank"
    rel="noopener noreferrer"
    href={props.resume}
    className="my-btn btn--normal"
>
   My RESUME
</a>
  )
}

export default NormalBtn