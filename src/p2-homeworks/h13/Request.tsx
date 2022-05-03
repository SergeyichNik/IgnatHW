import React, {ChangeEvent, useState} from 'react';
import {requestApi} from "./RequestApi";
import preloader from "../h10/Circles-menu-3.gif"

const Request = () => {

    const [isFetching, setIsFetching] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [message, setMessage] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked)
    }

    const onClickHandler = () => {
        setIsFetching(true)

        requestApi.postCheckboxVal(isChecked)
            .then(res => {
                setIsChecked(res.yourBody.success);
                setMessage(res.errorText);
                setIsFetching(false)
            })
            .catch(error => {
                setMessage(error.response.data.errorText);
                setIsFetching(false)
            })
    }

    return (
        <div>
            <div style={{height: '50px', lineHeight: '50px'}}>
                {isFetching
                    ?<img style={{height: '50px'}} src={preloader} alt="preloader"/>
                    :message
                }
            </div>
            <input onChange={onChangeHandler} checked={isChecked} type="checkbox"/>
            <button disabled={isFetching} onClick={onClickHandler} >click</button>
        </div>
    );
};

export default Request;
