import close from '../images/close.svg';

function ImagePopup(props) {
  return (
    <div className={ (props.card.isOpen ? `popup popup_type_${ props.name } popup_is-opened` : `popup popup_type_${ props.name }`) }>
      <div className="popup__image-container">
        <img src={ close } alt=""
             className="popup__close popup__close_type_image" onClick={ props.onClose }/>
        <img src={ props.card.link } alt={ props.card.name } className="popup__image"/>
        <figcaption className="popup__caption">
          {props.card.name}
        </figcaption>
      </div>
    </div>
  )
}

export default ImagePopup;
