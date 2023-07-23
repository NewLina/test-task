import './card.scss';
import { GoHeart, GoTrash } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import {useSelector, useDispatch} from 'react-redux';
import {actions, getAllCards} from '../../store/cardsStore';
import {deleteCard} from '../../store/cardsStore';



const Card = ({id, image, title, category, isLiked, likeHandleChange}) => {
    const cards = useSelector(state => state.cards.itemsList);
    const dispatch = useDispatch();

    const onDeleteClick = (e) => {
        e.preventDefault();
        console.log(id);
        dispatch(deleteCard(id));
    };
    

    return(
        <div className='card'>
            <div className='card__image-container'>
                <img className='card-image' src={image} alt="card-pct" />
            </div>
            <p className='card__title'>{title}</p>
            <p className='card__category'>{category}</p>
            <div className='card__icons'>
                <span onClick={likeHandleChange} className='heart-icon'>
                    {isLiked ? <GoHeartFill size={27} />:<GoHeart size={27}/>}
                </span>
            
            <GoTrash size={27} onClick={onDeleteClick}/>
            </div>
        </div>
    )
};

export default Card;