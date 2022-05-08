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
        setCards((state) => {return state.filter((c) => c._id === card._id ? newCard : c)});
        })
        .catch(err=> {console.log(err)})
        .finally(()=> {closeAllPopups()})
    }

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
       // .finally(res=> {console.log(currentUser)})
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
        })
        .catch(err=> {console.log(err)})
        .finally(()=> {closeAllPopups()})
    }

    function handleUpdateAvatar (link) {
        
        api.setProfileAvatar(link)
        .then(res => {
            console.log(res.avatar)
            currentUser.avatar = res.avatar
        })
        .catch(err=> {console.log(err)})
        .finally(()=> {closeAllPopups()})
    }

    function handleAddPlace ({name,link}) {
        api.addCard({name,link})
        .then(newCards=> {
            setCards([newCards, ...cards])
        })
        .catch(err=> {console.log(err)})
        .finally(()=> {closeAllPopups()})
    }

return (
    <UserDataContext.Provider value = {currentUser} >
    <div className="App">
        <div className="page">
            <Header/>

            {/* Попап Профиля */}
            <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}></EditProfilePopup>

            {/* Попап Аватара */}
            <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen = {isEditAvatarPopupOpen} onClose = {closeAllPopups}></EditAvatarPopup>

            {/* Попап Новое место */}
            <AddPlacePopup onAddPlace={handleAddPlace} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}></AddPlacePopup>

            {/* <PopupWithForm name="add" title="Новое место" isOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups}>
                <fieldset className="modal__fieldset">
                        <label className="modal__lable">
                            <input required className="modal__input modal__input_type_title" id="titleInput" name="name"
                                placeholder="Название" type="text" minLength="2" maxLength="30" defaultValue="" autoComplete="off"/>
                            <span className="modal__input-error" id="titleInputError"></span>
                        </label>
                        <label className="modal__lable">
                            <input required className="modal__input modal__input_type_link" id="linkInput" name="link"
                                placeholder="Ссылка на картинку" type="url" defaultValue="" autoComplete="off"/>
                            <span className="modal__input-error" id="linkInputError"></span>
                        </label>
                        <button className="modal__submit" id="addButton" type="submit" value="Сохранить">Создать</button>
                    </fieldset>
            </PopupWithForm> */}
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
