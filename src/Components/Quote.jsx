import React from 'react'
import { Link } from 'react-router-dom'

export default function Quote() {
  return (
    <div className="blockquote-wrapper">
        <div className="blockquote">
          <h1 className='text--highlighted'>
           Intuitive design happens when
           current knowledge Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio sequi fugit et architecto aliquam. Quas dolorum voluptatum asperiores totam dolorem!is
            the same as the{" "}
            target knowledge.
          </h1>
          <h4>
            <Link>—Author(link to linkedin)</Link>
            <br />
            <em>Occupation</em>
          </h4>
        </div>
      </div>
  )
}
