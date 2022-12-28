import React, { useState } from 'react'

function HighScore(props) {
    return (
        <div id='high-score'>
            High Score: {props.highScore}
        </div>
    )
}

export default HighScore