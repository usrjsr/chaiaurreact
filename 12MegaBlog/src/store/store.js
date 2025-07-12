import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth.slice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
    }
});


export default store;