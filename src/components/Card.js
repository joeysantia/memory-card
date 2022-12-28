import React, { useState } from 'react'

function Card(props) {
    return (
        <div className='card' onClick={(e) => props.setCardStatus(props.cardArray, props.setCardArray, props.resetCounter, props.incrementScore, props.index)}>
            <img src={props.img} alt={props.id} />
            <h3>{props.id}</h3>
        </div>
    )
}

export default Card