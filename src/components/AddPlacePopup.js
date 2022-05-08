import React from "react"
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup (props) {

    const [linkValue, setLinkValue] = React.useState('');
    const [placeValue, setPlaceValue] = React.useState('');

    function handleChangeLink (e) {
        setLinkValue(e.target.value)
    }

    function handleChangePlace (e) {
        setPlaceValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name: placeValue,
            link: linkValue,
        });
    } 

    return(
        <PopupWithForm name="add" title="Новое место" isOpen = {props.isOpen} onClose = {props.onClose}>
                <fieldset className="modal__fieldset">
                        <label className="modal__lable">
                            <input onChange={handleChangePlace} required className="modal__input modal__input_type_title" id="titleInput" name="name"
                                placeholder="Название" type="text" minLength="2" maxLength="30" defaultValue="" autoComplete="off"/>
                            <span className="modal__input-error" id="titleInputError"></span>
                        </label>
                        <label className="modal__lable">
                            <input onChange={handleChangeLink} required className="modal__input modal__input_type_link" id="linkInput" name="link"
                                placeholder="Ссылка на картинку" type="url" defaultValue="" autoComplete="off"/>
                            <span className="modal__input-error" id="linkInputError"></span>
                        </label>
                        <button className="modal__submit" id="addButton" type="submit" value="Сохранить" onClick={handleSubmit}>Создать</button>
                    </fieldset>
            </PopupWithForm>
    )
}