import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './news-action';

const news = createReducer('', {
    [actions.addNews]: (state, { payload }) => [...state, payload],
});

export default combineReducers({ news });
