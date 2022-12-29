import React, { useState } from 'react'
import './Counter.css'
function Counter(props) {
    return (
        <div id='counter'>
            Current score: {props.count}
        </div>
    )
}

export default Counter