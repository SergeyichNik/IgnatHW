import React, {useState} from 'react'
import classes from "./SuperDoubleRange.module.css";
import {Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    handleChange: (event: Event, newValue: number | number[]) => void
    value?: number[]
    // min, max, step, disable, ...
}
const valuetext = (value: number) => {
    return `${value}`
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (

    {
        handleChange, value,

    }
) => {
    // сделать самому, можно подключать библиотеки



    return (
        <div className={classes.mainWrapper}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}

            />
           slider
        </div>
    )
}

export default SuperDoubleRange
