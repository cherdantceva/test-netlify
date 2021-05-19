import React from 'react'
import style from "./home-top_.module.scss"


const HomeTop = (props) => {
    const {title, content} = props;
    return (
        <div className={style['home-top']}>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default HomeTop