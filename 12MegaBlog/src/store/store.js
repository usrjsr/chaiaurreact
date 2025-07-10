import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth.slice'; // Import the auth slice reducer

const store= configureStore({
    reducer: {
        auth: authSlice // Register the auth slice reducer in the store
    }
});


export default store; // Export the configured store to be used in the application