import React from 'react'
import { Link } from 'react-router-dom'

export default function Quote({content, hyperlink, author,jobTitle}) {
  return (
    <div className="blockquote-wrapper">
        <div className="blockquote">
          <h1 className='text--highlighted blockquote--content'>
             {content}
          </h1>
          <div className='blockquote--footer'>
          <em className='author'>  {author}</em>
          -   
          <a
                        className="hyperlink"
                        href={"https://"+hyperlink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                   {hyperlink}
                    </a>
            <br />
            <em className='jobTitle'>{jobTitle}</em>
          </div>
        </div>
      </div>
  )
}
