import React from 'react';
import Request from "./Request";

const HW13 = () => {
    const wrapper = {
        width: '350px',
        height: 'fitContent',
        margin: '20px 0 20px 0',
        padding: '20px 20px',
        borderRadius: '5px',
        boxShadow: '3px 3px 10px grey'
    }
    return (
        <div style={wrapper}>
            homeworks 13
            <Request/>
        </div>
    );
};

export default HW13;