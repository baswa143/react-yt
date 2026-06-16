import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div >
      <div className="card">
        <img src={props.img} alt="Description"></img>
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur</p>
        
        <button>view click</button>
      </div>
    </div>
  )
}

export default Card
