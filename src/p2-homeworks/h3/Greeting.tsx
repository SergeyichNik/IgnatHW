import React from 'react'
import classes from "./Greeting.module.css";


type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = error ? classes.inputError : classes.input
    const spanLabel = error ? error : 'Enter your name'

    return (
        <div>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}/>
                <button className={classes.hw3btn} onClick={addUser}>Add</button>
                <span>{`Total users: ${totalUsers}`}</span>
            </div>
            <div>
                <span>{spanLabel}</span>
            </div>


        </div>
    )
}

export default Greeting
