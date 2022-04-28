export default function PopupWithForm (props) {
    return(
        <section className={(props.isOpen ? `popup popup_type_${props.name} popup_active` : `popup popup_type_${props.name}`)}>
        <div className="popup__overlay" onClick={props.onClose}></div>
        <button className="popup__close-btn popup__close-btn_type_confirmation" type="button"
            aria-label="confirmation" onClick={props.onClose}></button>
        <div className="modal"> 
            <h2 className="modal__title">{props.title}</h2>
            <form className="modal__form " action="submit" name={props.name}>
                <fieldset className="modal__fieldset">
                    <button className="modal__submit" id={`${props.name}Btn`} type="submit"
                        value="Да">Да</button>
                </fieldset>
            </form>
        </div>
    </section>
    )
}