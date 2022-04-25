import React, {useEffect, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const [value, setValue] = useState([value1, value2])


    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[])
        setValue1(value[0])
    }

    useEffect(() => {
        onChangeHandler(value1)
    }, [value1])

    const onChangeHandler = (val: number) => {
        setValue(value.map((item, i) => i === 0 ? val : item))

    }

    const wrapper = {
        width: '350px',
        height: 'fitContent',
        margin: '20px 0 60px 0',
        padding: '20px 20px',
        borderRadius: '5px',
        boxShadow: '3px 3px 10px grey'


    }

    return (
        <div style={wrapper}>

            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span style={{
                    display: 'inline-block',
                    width: '30px',
                    }}>{value1}</span>
                <SuperRange value={value1} onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                {/*<span>{value1}</span>*/}
                <SuperDoubleRange
                    handleChange={handleChange}
                    value={value}// сделать так чтоб value1 и value2 изменялось
                />
                {/*<span>{value2}</span>*/}
            </div>
        </div>
    )
}

export default HW11
