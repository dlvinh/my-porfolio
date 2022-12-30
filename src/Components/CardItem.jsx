import React from 'react'

function CardItem(props) {
    console.log("carditem",props);
  return (
    <card className="card my-card-style card-container">
          <div className="card-front card-body d-flex flex-column justify-content-center align-items-center">
            <h4 className="card-title title text-center">
              {props.item.projectName}
            </h4>
          </div>
          <div className="card-back card-body d-flex flex-column justify-content-between align-items-center">
            <div className="text-center">
            <p className="card-text mb-4" style={{textAlign: "justify"}}>
             {props.item.projectDesc}
            </p>
            <button className="my-btn card-btn">Try Demo</button>
            </div>
           
          </div>
        </card>
  )
}

export default CardItem