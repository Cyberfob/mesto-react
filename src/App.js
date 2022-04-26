//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App">
      <body class="page">
    <header class="header">
        <img class="header__logo" src="../src/images/logo.svg" alt="Логотип"/>
    </header>
    <main class="content">
        
        <section class="profile">
            <div class="profile__container">
                <div class="profile__foto-overlay"></div>
                <img class="profile__foto" src="#" alt="Фото"/>
                <div class="profile__data">
                    <div class="profile__info">
                        <h1 class="profile__name"></h1>
                        <button class="profile__btn"></button>
                    </div>
                    <p class="profile__about"></p>
                </div>
            </div>
            <button class="profile__add-btn" aria-label="addButton" type="button"></button>
        </section>
        
        <section class="cards">
        </section>
    </main>
    <footer class="footer">
        <p class="footer__copyright">&copy; 2020 Mesto Russia</p>
    </footer>
    <template class="card__template">
        <div class="card">
            <button class="card__trashcan-btn" type="button"></button>
            <img class="card__img" src="#" alt="#"/>
            <div class="card__footer">
                <h3 class="card__title"></h3>
                <div class="card__like-container">
                    <button class="card__like" type="button"></button>
                    <div class="card__like-counter"></div>
                </div>
            </div>
        </div>
    </template>
    <section class="popup popup_type_profile">
        <div class="popup__overlay"></div>
        <button class="popup__close-btn popup__close-btn_type_profile" type="button" aria-label="Close"></button>
        <div class="modal">
            <h2 class="modal__title">Редактировать профиль</h2>
            <form class="modal__form modal__form_type_profile" action="submit" name="profile">
                <fieldset class="modal__fieldset">
                    <label class="modal__lable">
                        <input autocomplete="off" required class="modal__input modal__input_type_name" id="nameInput"
                            name="name" minlength="2" maxlength="40" placeholder="Введите ваше имя" type="text"
                            value=""/>
                        <span class="modal__input-error" id="nameInputError"></span>
                    </label>
                    <label class="modal__lable">
                        <input required class="modal__input modal__input_type_about" id="aboutInput" minlength="2"
                            name="about" maxlength="200" placeholder="Введите информацию о себе" autocomplete="off"
                            type="text" value=""/>
                        <span class="modal__input-error" id="aboutInputError"></span>
                    </label>
                    <button class="modal__submit" id="profileSubmitBtn" type="submit"
                        value="Сохранить">Сохранить</button>
                </fieldset>
            </form>
        </div>
    </section>
    <section class="popup popup_type_confirmation">
        <div class="popup__overlay"></div>
        <button class="popup__close-btn popup__close-btn_type_confirmation" type="button"
            aria-label="confirmation"></button>
        <div class="modal modal_confirmation">
            <h2 class="modal__title">Вы Уверены?</h2>
            <form class="modal__form modal__form_type_confirmation" action="submit" name="confirmation">
                <fieldset class="modal__fieldset">
                    <button class="modal__submit modal__submit_confirmation" id="confirmationBtn" type="submit"
                        value="Да">Да</button>
                </fieldset>
            </form>
        </div>
    </section>
    <section class="popup popup_type_add">
        <div class="popup__overlay"></div>
        <button class="popup__close-btn popup__close-btn_type_add-card" type="button" aria-label="Close"></button>
        <div class="modal">
            <h2 class="modal__title">Новое место</h2>
            <form class="modal__form modal__form_type_add-card" action="submit" name="add">
                <fieldset class="modal__fieldset">
                    <label class="modal__lable">
                        <input required class="modal__input modal__input_type_title" id="titleInput" name="name"
                            placeholder="Название" type="text" minlength="2" maxlength="30" value="" autocomplete="off"/>
                        <span class="modal__input-error" id="titleInputError"></span>
                    </label>
                    <label class="modal__lable">
                        <input required class="modal__input modal__input_type_link" id="linkInput" name="link"
                            placeholder="Ссылка на картинку" type="url" value="" autocomplete="off"/>
                        <span class="modal__input-error" id="linkInputError"></span>
                    </label>
                    <button class="modal__submit" id="addButton" type="submit" value="Сохранить">Создать</button>
                </fieldset>
            </form>
        </div>
    </section>
    <section class="popup popup_type_pictures">
        <div class="popup__overlay"></div>
        <button class="popup__close-btn popup__close-btn_margin-left popup__close-btn_type_pictures" type="button"
            aria-label="Close"></button>
        <div class="frame">
            <img class="frame__img" src="#" alt="#"/>
            <h2 class="frame__title"></h2>
        </div>
    </section>
    <section class="popup popup_type_avatar">
        <div class="popup__overlay"></div>
        <button class="popup__close-btn popup__close-btn_type_avatar" type="button" aria-label="Close"></button>
        <div class="modal">
            <h2 class="modal__title">Обновить аватар</h2>
            <form class="modal__form modal__form_type_avatar" action="submit" name="avatar">
                <fieldset class="modal__fieldset">
                    <label class="modal__lable">
                        <input required class="modal__input modal__input_type_link" id="linkInputAvatar" name="link"
                            placeholder="Ссылка на фото" type="url" value="" autocomplete="off"/>
                        <span class="modal__input-error" id="linkInputAvatarError"></span>
                    </label>
                    <button class="modal__submit" id="avatarButton" type="submit" value="Сохранить">Сохранить</button>
                </fieldset>
            </form>
        </div>
    </section>
</body>
    </div>
  );
}

export default App;
