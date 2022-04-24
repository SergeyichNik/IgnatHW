import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${red ? s.red : s.default} ${className}`

    const styleBtn = {
        height: '2rem',
        margin: '10px 5px',
        backgroundColor: '#6bb0ed',
        fontSize: '15px',
        lineHeight: '20px',
        color: '#5e3739',
        border: 'none',
        borderRadius: '5px',
        boxShadow: '2px 2px 5px grey, inset 5px 5px 25px #f01f5071',
        cursor: 'pointer',
    }

    return (
        <button
            className={finalClassName}
            style={styleBtn}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
