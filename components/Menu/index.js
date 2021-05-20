import React from 'react'
import style from "./menu_.module.scss"



const Menu = (props) => {
    const {title, content} = props;
    return (
        <section className={style['home-top']}>
            <div className={style['content']}>
                <h1 className={style['title']}>{title}</h1>
                <p className={style['text']}>{content}</p>
            </div>
            <div className={style['img-container']}>
                <img src="/public/img/home--top.jpg"/>
            </div>
        </section>
    )
}

export default Menu