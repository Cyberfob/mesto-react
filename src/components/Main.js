import React from "react"
import { UserDataContext } from "../contexts/CurrentUserContext"
//import api from "../utils/Api"
import Card from './Card'

export default function Main (props) {
    
    //const [cards, setCards] = useState([])
    const userData = React.useContext(UserDataContext)
    

    // React.useEffect(() => {
    //     api.getInitCards()
    //     .then(response => {
    //     setCards(response)
    //     })
    //     .catch((err) => {console.log(err)})
    // },[])

    // function handleDeleteCard (card) {
    //     const isOwner = card.owner._id === userData._id;
    //     console.log(isOwner)
    //     if(isOwner) {
    //         api.removeCard(card._id)
    //         .then((newCard) => {
    //         setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    //     },[]);
    //     }
    // }

    // function handleCardLike (card) {
    //     const isLiked = card.likes.some(i => i._id === userData._id);
        
    //     api.setLike(card._id, !isLiked)
    //     .then((newCard) => {
    //         setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    //     },[]);
    // }

    return (
        <main className="content">
        
        <section className="profile">
            <div className="profile__container">
                <div className="profile__foto-overlay" onClick={props.onEditAvatar}></div>
                <img className="profile__foto" src={userData.avatar}   alt="Фото"/>
                <div className="profile__data">
                    <div className="profile__info">
                        <h1 className="profile__name">{userData.name}</h1>
                        <button className="profile__btn" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__about">{userData.about}</p>
                </div>
            </div>
            <button className="profile__add-btn" aria-label="addButton" type="button" onClick={props.onAddPlace}></button>
        </section>
        
        <section className="cards">
        {props.cards.map(item=> {
            return (
                <Card key={item._id} onCardClick = {props.onCardClick} card={item} 
                        onCardDelete = {()=>props.onCardDelete(item)} onCardLike={()=>props.onCardLike(item)} />
                )
        })}
        </section>
    </main>
    )
}

