import {configureStore, createSlice} from '@reduxjs/toolkit';

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        itemsList: [],
        isLiked: false,
        isFiltered: false
    },
    reducers: {
        getAllCards(state, action) {
            fetch('https://fakestoreapi.com/products')
                .then(response => {
            if (response.ok) { 
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
            .then((response) => {
                state.itemsList = response;
            
        })
        .catch((error) =>{
            error=error;
            });
        }
    
    //more reducers
    }

});

export const actions = cardsSlice.actions;

const store = configureStore({
    reducer: cardsSlice.reducer
});

export default store;