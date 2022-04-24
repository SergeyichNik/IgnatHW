import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import preloader from './Circles-menu-3.gif'
import {useDispatch, useSelector} from "react-redux";
import {ActionsType, loadingAC, loadingEndAC, selectLoadState} from "./bll/loadingReducer";

function HW10() {

    const {isLoad} = useSelector(selectLoadState)

    const dispatch = useDispatch()

    const setLoading = () => {
       dispatch(loadingAC())
        setTimeout(() => {
            dispatch(loadingEndAC())
        },3000)
        console.log('loading...')
    };

    const wrapper = {
        width: '350px',
        height: 'fitContent',
        margin: '20px 0 20px 0',
        padding: '20px 20px',
        borderRadius: '5px',
        boxShadow: '3px 3px 10px grey'
    }

    return (
        <div style={wrapper}>

            homeworks 10

            {/*should work (должно работать)*/}
            {isLoad
                ? (
                    <div><img src={preloader} alt="preloader"/></div>
                ) : (
                    <div style={{marginTop: '16px'}}>
                        <SuperButton  onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
        </div>
    )
}

export default HW10
