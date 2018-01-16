import { cond, equals, T } from 'ramda';

export const typeMatch = type => (state, action) => equals(action.type, type);

export const listLookUpMatcher = (listLookUp, initialState) =>
    cond(
        [...
            listLookUp.map(([type, fn]) => [
                typeMatch(type), fn
            ]),
            [
                T,
                (state = initialState) => state
            ]
        ]
    );
