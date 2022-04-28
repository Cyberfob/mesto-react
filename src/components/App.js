import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import {useState} from 'react'
import ImagePopup from './ImagePopup';

//Компонент App
function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState({})

    function handleCardClick (card) {
        if (card !== {}) {
            setSelectedCard(card)
            setIsImagePopupOpen(true)
        }
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

return (
    <div className="App">
        <div className="page">
            <Header/>
            <PopupWithForm name="profile" title="Редактировать профиль" isOpen = {isEditProfilePopupOpen} onClose = {closeAllPopups}  />
            <PopupWithForm name="avatar" title="Обновить аватар" isOpen = {isEditAvatarPopupOpen} onClose = {closeAllPopups}/>
            <PopupWithForm name="add" title="Новое место" isOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups}/> 
            <ImagePopup name="pictures" card = {selectedCard} isOpen = {isImagePopupOpen} onClose = {closeAllPopups}/>
            <Main 
                onEditProfile={handleEditProfileClick} 
                onAddPlace={handleAddPlaceClick} 
                onEditAvatar={handleEditAvatarClick} 
                onCardClick={handleCardClick}
            />
            <Footer/>
        </div>
    </div>
    );
}

export default App;
