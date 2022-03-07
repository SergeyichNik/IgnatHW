import React, {useState} from 'react'
import classes from "./Message.module.css";
import {StateMessageType} from "./HW1";

type  PropsType = {
    message: StateMessageType[]
}
const AlternativeMessage: React.FC<PropsType> = ({message,}) => {
    return (
        <ul className={classes.pnull}>
            {message.map(message => {
                return (
                    <li key={Math.random() * 100} className={classes.message}>
                        <img className={classes.avatar} src={message.avatar}
                             alt={'avatar'}/>
                        <div className={classes.bubble}>
                            <div className={classes.name}>{message.userName}</div>
                            <div className={classes.text}>{message.value}</div>
                            <div className={classes.time}>{message.time}</div>
                        </div>

                    </li>
                )
            })}
        </ul>
    )
}

export default AlternativeMessage
