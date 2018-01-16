import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { authReducer as auth } from './auth';

export const store = createStore(
    combineReducers({
        form,
        auth
    }),
    {},
);