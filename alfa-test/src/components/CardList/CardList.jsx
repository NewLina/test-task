import './cardList.scss';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../../store/cardsStore';
import Card from '../Card/Card';

const CardList = () => {
    const cards = useSelector(state => state.cards.itemsList);
    const dispatch = useDispatch();
    

    useEffect( () => {
        dispatch(actions.getAllCards());
        console.log(dispatch(actions.getAllCards()));
},[])

    return (
        <section className='card-list-container'>
            {
                cards.map((item) =>{
                    return <Card id={item.id} title={item.title} image={item.image} description={item.description}/>
                })
            }
        </section>
    )
};

export default CardList;