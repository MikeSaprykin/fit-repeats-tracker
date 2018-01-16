import { AuthTypes as Types } from './auth.actions';
import { listLookUpMatcher } from "../helpers";

const initialState = {
    loading: false
};

const lookUp = [
    [
        Types.login,
        (state, action) => {
            console.log(state);
            return state;
        }
    ]
];

export const authReducer = listLookUpMatcher(lookUp, initialState);
