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

return (
    <div className="App">
        <div className="page">
            <Header/>
            {/* Попап Профиля */}
            <PopupWithForm name="profile" title="Редактировать профиль" isOpen = {isEditProfilePopupOpen} onClose = {closeAllPopups}>
                <fieldset className="modal__fieldset">
                        <label className="modal__lable">
                            <input autoComplete="off" required className="modal__input modal__input_type_name" id="nameInput"
                                name="name" minLength="2" maxLength="40" placeholder="Введите ваше имя" type="text"
                                defaultValue=""/>
                            <span className="modal__input-error" id="nameInputError"></span>
                        </label>
                        <label className="modal__lable">
                            <input required className="modal__input modal__input_type_about" id="aboutInput" minLength="2"
                                name="about" maxLength="200" placeholder="Введите информацию о себе" autoComplete="off"
                                type="text" defaultValue=""/>
                            <span className="modal__input-error" id="aboutInputError"></span>
                        </label>
                        <button className="modal__submit" id="profileSubmitBtn" type="submit"
                            value="Сохранить">Сохранить</button>
                    </fieldset>
            </PopupWithForm>
            {/* Попап Аватара */}
            <PopupWithForm name="avatar" title="Обновить аватар" isOpen = {isEditAvatarPopupOpen} onClose = {closeAllPopups}>
                <fieldset className="modal__fieldset">
                        <label className="modal__lable">
                            <input required className="modal__input modal__input_type_link" id="linkInputAvatar" name="link"
                                placeholder="Ссылка на фото" type="url" defaultValue="" autoComplete="off"/>
                            <span className="modal__input-error" id="linkInputAvatarError"></span>
                        </label>
                        <button className="modal__submit" id="avatarButton" type="submit" value="Сохранить">Сохранить</button>
                    </fieldset>
            </PopupWithForm>
            {/* Попап Новое место */}
            <PopupWithForm name="add" title="Новое место" isOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups}>
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
            </PopupWithForm>
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
