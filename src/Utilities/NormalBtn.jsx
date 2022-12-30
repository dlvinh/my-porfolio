import React from 'react'

function NormalBtn(props) {
  return (
    <a
    target="_blank"
    rel="noopener noreferrer"
    href={props.resume}
    className="my-btn btn--normal mt-4"
>
   My RESUME
</a>
  )
}

export default NormalBtn