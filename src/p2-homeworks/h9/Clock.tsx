import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

const getZero = (num: number) => {
   return  num < 10 ? '0' + num : num
}

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date)
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
             setDate(new Date)
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }
    const hours = getZero(date.getHours())
    const minutes = getZero(date.getMinutes())
    const seconds = getZero(date.getSeconds())

    const day = getZero(date.getDate())
    const month = getZero(date.getMonth())
    const year = date.getFullYear()

    const stringTime = `${hours}:${minutes}:${seconds}`// fix with date
    const stringDate = `${day}.${month}.${year}`// fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <div>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>

            </div>
        </div>
    )
}

export default Clock
