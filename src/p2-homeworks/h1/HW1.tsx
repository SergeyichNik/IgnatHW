import React, {useState} from 'react'
import AlternativeMessage from './AlternativeMessage';
import Message from "./Message";
import {MessSendArea} from "./MessSendArea";

export type StateMessageType = {
    avatar: string
    userName: string
    value: string
    time: string


}

function HW1() {
    const [message, setMessege] = useState<StateMessageType[]>([])
    const date: any = new Date()
    const addHandler = (value: string) => {
        const newMessage: StateMessageType = {
            avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png',
            userName: 'Nikita',
            value: value,
            time: `${date.getHours()}:${date.getMinutes()}`
        }
        setMessege(prevState => [...prevState, newMessage])

    }
    const messageData = {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Some Name',
        message: 'some text',
        time: '22:00',
    }

    const Hw1Wrapper = {
        width: '350px',
        height: 'fitContent',
        marginBottom: '20px',
        padding: '20px 20px',
        borderRadius: '5px',
        boxShadow: '3px 3px 10px grey'


    }

    return (
        <div style={Hw1Wrapper}>

            Homeworks 1

            {/*should work (должно работать)*/}
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}

            />

            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage message={message}/>
            <MessSendArea addHandler={addHandler}/>
        </div>
    )
}

export default HW1
