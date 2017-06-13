import InitialState from '../initialState';
import { ActionTypesApp } from '../../actions/actionTypes';

const { RESET, AUTH, CHOOSE_ITEM, LOAD_ITEMS, FORM_SUBMITTED } = ActionTypesApp;

const AppReducer = (state, action) => {
    switch (action.type) {
        case RESET:
            return InitialState().app;

        case AUTH:
            return { ...state, auth: { login: action.login } };

        case CHOOSE_ITEM:
            return {
                ...state,
                selectedId: action.id,
                formSubmitted: false
            };

        case LOAD_ITEMS:
            return { ...state, items: action.items };

        case FORM_SUBMITTED:
            return { ...state, formSubmitted: true };

        default:
            return state || InitialState().app;
    }
};

export default AppReducer;
