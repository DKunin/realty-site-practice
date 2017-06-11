import InitialState from '../initialState';
import { ActionTypesApp } from '../../actions/actionTypes';

const { RESET, AUTH, CHOOSE_ITEM } = ActionTypesApp;

const AppReducer = (state, action) => {
    switch (action.type) {
        case RESET:
            return InitialState().app;
        case AUTH:
            return { ...app, auth: { login: action.login } };
        case CHOOSE_ITEM:
            return { ...app, selectedId: action.id };
        default:
            return state || InitialState().app;
    }
};

export default AppReducer;
