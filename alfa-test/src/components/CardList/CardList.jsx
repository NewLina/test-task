import './cardList.scss';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllCards} from '../../store/cardsStore';
import Card from '../Card/Card';
import {actions} from '../../store/cardsStore';


const CardList = () => {
    const cards = useSelector(state => state.cards.itemsList);
    const isLiked=useSelector(state => state.cards.isLiked);
    const dispatch = useDispatch();

    const likeHandleChange = (e) =>{
        e.preventDefault();
        dispatch(actions.setIsLiked()); 
    }

    useEffect( () => {
        dispatch(getAllCards());
        console.log(dispatch(getAllCards()));
},[])
    return (
        <section className='card-list-container'>
            {
                cards.map((item) =>{
                    return <Card key={item.id} id={item.id} title={item.title} image={item.image} category={item.category} isLiked={isLiked} likeHandleChange={likeHandleChange}/>
                })
            }
        </section>
    )
};
export default CardList;