import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './user-actions';

const userName = createReducer('Гость', {
    [actions.userVerification]: (state, { payload }) =>
        (state = payload.name),
    [actions.logOut]: (_, { payload }) => payload[0],
});

const userStatus = createReducer('gest', {
    [actions.userVerification]: (state, { payload }) =>
        (state = payload.status),
    [actions.logOut]: (_, { payload }) => payload[1],
});

export default combineReducers({ userName, userStatus });
