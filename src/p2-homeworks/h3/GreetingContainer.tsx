import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError('')
        setName(e.currentTarget.value)
    }
    const addUser = () => {
        if (name !== '' && name.length >= 3 && /[^\s]/gim.test(name) && !/^[\d]+$/g.test(name)) {
            addUserCallback(name)
            // setError('')
            alert(`Hello ${name}!`)
            setName('')

        } else {
            setError('Name must contain at least 3 letters')
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
