import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string// need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users, {name: name, _id: v1()}]) // need to fix
    }

    const Hw3Wrapper = {
        width: '350px',
        height: 'fitContent',
        padding: '20px 20px',
        borderRadius: '5px',
        boxShadow: '3px 3px 10px grey'


    }

    return (
        <div style={Hw3Wrapper}>
            Homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>
    )
}

export default HW3
