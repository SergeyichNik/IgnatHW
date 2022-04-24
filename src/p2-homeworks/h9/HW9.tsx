import React from 'react'
import Clock from './Clock'

function HW9() {
    const wrapper = {
        width: '350px',
        height: 'fit-content',
        margin: '20px 0 20px 0',
        padding: '20px 20px',
        borderRadius: '5px',
        boxShadow: '3px 3px 10px grey',

    }
    return (
        <div style={wrapper}>
            homeworks 9
            <Clock/>
        </div>
    )
}

export default HW9
