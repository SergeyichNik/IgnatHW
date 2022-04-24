import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number,
    name: string,
    age: number
}

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    // need to fix any
    const table = {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '5px ',

    }
    const Hw8Wrapper = {
        width: '350px',
        height: 'fitContent',
        margin: '20px 0 20px 0',
        padding: '20px 20px',
        borderRadius: '5px',
        boxShadow: '3px 3px 10px grey',

    }

    const finalPeople = people.map((p) => (
        <div style={table} key={p._id} >
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const btnKit = [
        {name: 'sort up', callback: () => setPeople(homeWorkReducer(initialPeople, {type: "SORT", payload: "UP"}))},
        {name: 'sort down', callback: () => setPeople(homeWorkReducer(initialPeople, {type: "SORT", payload: "DOWN"}))},
        {name: 'check 18', callback: () => setPeople(homeWorkReducer(initialPeople, {type: "CHECK", payload: 18}))}
    ]
    const mapBtn = btnKit.map((item, index) => <SuperButton onClick={item.callback}  key={index}>{item.name}</SuperButton>)
    return (
        <div style={Hw8Wrapper}>
            homeworks 8

            {finalPeople}

            {mapBtn}


        </div>
    )
}

export default HW8
