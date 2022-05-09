import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React, {useState} from 'react'
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import {UserDataContext} from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

//Компонент App
function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState({})
    const [currentUser, setCurrentUser] = useState({})
    
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getInitCards()
        .then(response => {
        setCards(response)
        })
        .catch((err) => {console.log(err)})
        
    },[])

    function handleDeleteCard (card) {
        api.removeCard(card._id)
            .then((newCard) => {
              setCards((state) => {
                state.filter((c) => c._id !== card._id)
              });
            })
            .catch(err => {
              console.log(err)
            })
      }

    // function handleDeleteCard (card) {
        
    //     api.removeCard(card._id)
    //     .then((deletedCard) => {
    //         console.log(deletedCard)
    //     setCards((state) => { state.filter((c) => c._id === card._id )});
    //     })
        
    //     // api.removeCard(card._id)
    //     // .then((newCard) => {
    //     // setCards((state) => { state.filter((c) => c._id !== card._id ? newCard : c)});
    //     // })
    //     // .catch(err=> {console.log(err)})
    // }

    function handleCardLike (card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.setLike(card._id, !isLiked)
        .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch(err=> {console.log(err)});
    }

    React.useEffect(() => {
        api.getUserInfo()
        .then(response => {
            setCurrentUser(response)
        })
        .catch(err => {console.log(`Ошибка при запросе данных пользователя:\n ${err}`)})
    },[])

    function handleCardClick (card) {
            setSelectedCard(card)
            setIsImagePopupOpen(true)
    }

    function handleEditAvatarClick () {
        setIsEditAvatarPopupOpen(true)
    }
    
    function handleEditProfileClick () {
        setIsEditProfilePopupOpen(true)
    }
    
    function handleAddPlaceClick () {
        setIsAddPlacePopupOpen(true)
    }

    function closeAllPopups () {
        setIsAddPlacePopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsImagePopupOpen(false)
        setSelectedCard({})
    }

    function handleUpdateUser ({name,about}) {
        api.setUserInfo({name,about})
        .then(res => {
            currentUser.name = res.name
            currentUser.about = res.about
            closeAllPopups()
        })
        .catch(err=> {console.log(err)})
    }

    function handleUpdateAvatar (link) {
        
        api.setProfileAvatar(link)
        .then(res => {
            currentUser.avatar = res.avatar
            closeAllPopups()
        })
        .catch(err=> {console.log(err)})
    }

    function handleAddPlace ({name,link}) {
        api.addCard({name,link})
        .then(newCards=> {
            setCards([newCards, ...cards])
            closeAllPopups()
        })
        .catch(err=> {console.log(err)})
    }

return (
    <UserDataContext.Provider value = {currentUser} >
    <div className="App">
        <div className="page">
            <Header/>

            {/* Попап Профиля */}
            <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonName = 'Сохранить'></EditProfilePopup>

            {/* Попап Аватара */}
            <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen = {isEditAvatarPopupOpen} onClose = {closeAllPopups} buttonName = 'Сохранить'></EditAvatarPopup>

            {/* Попап Новое место */}
            <AddPlacePopup onAddPlace={handleAddPlace} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonName = 'Создать'></AddPlacePopup>

            {/* Попап просмотра изображения */}
            <ImagePopup name="pictures" card = {selectedCard} isOpen = {isImagePopupOpen} onClose = {closeAllPopups}/>
            
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} 
                    onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}
                    cards = {cards} onCardLike = {handleCardLike} onCardDelete = {handleDeleteCard}/>
            <Footer/>
        </div>
    </div>
    </UserDataContext.Provider>
    );
}

export default App;
