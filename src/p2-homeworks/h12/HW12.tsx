import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {selectThemeState, setCurrentTheme} from "../h10/bll/loadingReducer";


function HW12() {
    const {themeKit, currentTheme} = useSelector(selectThemeState)
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback
    const wrapper = {
        width: '350px',
        height: 'fitContent',
        margin: '20px 0 20px 0',
        padding: '20px 20px',
        borderRadius: '5px',

    }

    const onChangeHandler = (currentTheme: string) => {
        dispatch(setCurrentTheme(currentTheme))
    }

    return (
        <div style={wrapper} className={s[currentTheme]}>
            <hr/>
            <span className={s[currentTheme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect width={'130'} value={currentTheme} onChangeOption={onChangeHandler} options={themeKit}/>
            <hr/>
        </div>
    );
}

export default HW12;
