import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'redux/user/user-reducer';
import newsReducer from 'redux/news/news-reducer';

const store = configureStore({
    reducer: {
        user: userReducer,
        news: newsReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
