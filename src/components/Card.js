export default function Card (props) {
return (
    <div className="card">
        <button className="card__trashcan-btn" type="button"></button>
        <img className="card__img" src={props.card.link} alt={props.card.name} onClick = {() =>{props.onCardClick(props.card)}}/>
        <div className="card__footer">
            <h3 className="card__title">{props.card.name}</h3>
            <div className="card__like-container">
                <button className="card__like" type="button"></button>
                <div className="card__like-counter">{props.card.likes.length}</div>
            </div>
        </div>
    </div>
    )
}