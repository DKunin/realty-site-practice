import InitialState from '../initialState';
import { ActionTypesApp } from '../../actions/actionTypes';

const { RESET } = ActionTypesApp;

const AppReducer = (state, action) => {
    switch (action.type) {
        case RESET:
            return InitialState().app;
            break;
        default:
            return state || InitialState().app;
    }
};

export default AppReducer;
