import React, { useState } from "react"
import api from "../utils/Api"
import Card from './Card'

export default function Main (props) {
    const [userName, setUserName] = useState("")
    const [userDiscription, setUserDiscription] = useState("")
    const [userAvatar, setUserAvatar] = useState("")
    const [cards, setCards] = useState([])

    React.useEffect(() => {
        api.getUserInfo()
        .then(data => {
            setUserName(data.name)
            setUserDiscription(data.about)
            setUserAvatar(data.avatar)
        })
        .catch(() => {alert(`Ошибка загрузки \n  Обновите пожалуйста страницу, для этого нажмите "F5"`)})
    },[])

    React.useEffect(() => {
        api.getInitCards()
        .then(response => {
        setCards(response)
            
        })
        .catch((err) => {console.log(err)})
    },[])

    return (
        <main className="content">
        
        <section className="profile">
            <div className="profile__container">
                <div className="profile__foto-overlay" onClick={props.onEditAvatar}></div>
                <img className="profile__foto" src={userAvatar}   alt="Фото"/>
                <div className="profile__data">
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__btn" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__about">{userDiscription}</p>
                </div>
            </div>
            <button className="profile__add-btn" aria-label="addButton" type="button" onClick={props.onAddPlace}></button>
        </section>
        
        <section className="cards">
        {cards.map(item=> {
            return (
                <Card key={item._id} onCardClick = {props.onCardClick} card={item}/>
                )
        })}
        </section>
    </main>
    )
}

