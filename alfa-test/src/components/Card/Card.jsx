import './card.scss';

const Card = ({id, image, title, description}) => {
    return(
        <div className='card'>
            <div className='card__image-container'>
                <img className='card-image' src={image} alt="card-image" />
            </div>
            <p className='card__title'>{title}</p>
            <p className='card__description'>{description}</p>
        </div>
    )
};

export default Card;