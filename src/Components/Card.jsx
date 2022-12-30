import React from 'react'
import CardItem from './CardItem'

function Card(props) {
  return (
    <div className="experience-container  d-flex justify-content-between flex-wrap">
        {props.children}
    </div>
  )
}

export default Card