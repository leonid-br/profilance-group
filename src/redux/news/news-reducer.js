import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './news-action';

const news = createReducer('', {
    [actions.addNews]: (state, { payload }) => [...state, payload],
    [actions.verificationNews]: (state, { payload }) => [
        ...state.map(el =>
            el.id === payload
                ? {
                      ...el,
                      verification: true,
                  }
                : el,
        ),
    ],
    [actions.deleteNews]: (state, { payload }) => [
        ...state.filter(({ id }) => id !== payload),
    ],
    [actions.getNews]: (_, { payload }) => payload,
});

export default combineReducers({ news });
