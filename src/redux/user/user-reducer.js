import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './user-actions';

const userName = createReducer('Гость', {
    [actions.userVerification]: (state, { payload }) =>
        (state = payload.name),
});

const userStatus = createReducer('gest', {
    [actions.userVerification]: (state, { payload }) =>
        (state = payload.status),
});
export default combineReducers({ userName, userStatus });
