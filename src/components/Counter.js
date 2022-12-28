import React, { useState } from 'react'

function Counter(props) {
    return (
        <div id='counter'>
            Current score: {props.count}
        </div>
    )
}

export default Counter