import React, {useState} from "react";
import classes from "./MessSendArea.module.css";


type PropsType = {
    addHandler: (message: string) => void
}

export const MessSendArea: React.FC<PropsType> = ({addHandler}) => {
    const [value, setValue] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const keyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            addHandler(value)
            setValue('')
        }
    }
    return (
        <>
            <label htmlFor={'title'}>&#9993; Press Enter to send</label>
            <input
                autoFocus={true}
                className={classes.textArea}
                type={'text'}
                placeholder={'Enter your message...'}
                value={value}
                onChange={changeHandler}
                onKeyPress={keyPress}

            />
        </>
    )


}

