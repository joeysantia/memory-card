import React, { useState } from 'react'
import './HighScore.css'

function HighScore(props) {
    return (
        <div id='high-score'>
            High Score: {props.highScore}
        </div>
    )
}

export default HighScore