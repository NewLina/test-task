import axios from 'axios';
import {configureStore, createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const FETCH_ACTION = 'cards/getAllCards';
export const FETCH_DELETE_ACTION = 'cards/deleteCard';

export const getAllCards = createAsyncThunk(
    FETCH_ACTION,
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(
                'https://fakestoreapi.com/products', 
            )
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message })
        }
    },
);
export const deleteCard = createAsyncThunk(
    FETCH_DELETE_ACTION,
    async (id, thunkAPI) => {
        const URL='https://fakestoreapi.com/products/:id';
        const deleteURL=URL.replace(':id', id);
        try {
            const response = await axios.delete(
                deleteURL
            )
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message })
        }
    },
);



const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        itemsList: [],
        isLiked: false,
        isFiltered: false,
        error: null,
    },
    reducers: {
        setIsLiked(state) {
            state.isLiked = !state.isLiked;
            console.log(state.isLiked);
        },

    },
    extraReducers: { 
        [getAllCards.pending]: (state) => {
            state.itemsList = [];
        },
        [getAllCards.fulfilled]: (state, { payload }) => {
            state.itemsList = payload;
        },
        [getAllCards.rejected]: (state, { payload }) => {
            state.error = payload
        },
        [deleteCard.pending] : (state) => {
            state.itemsList = [];
        },
        [deleteCard.fulfilled]: (state, { payload }) => {
            state.itemsList = payload;
        },
        [deleteCard.rejected]: (state, { payload }) => {
            state.error = payload
        }
    }
});

export const actions = cardsSlice.actions;

const store = configureStore({
    reducer: {
        cards: cardsSlice.reducer
    }
});

export default store;