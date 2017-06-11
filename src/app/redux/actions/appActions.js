import ActionTypes from './actionTypes';

const { RESET, AUTH, CHOOSE_ITEM } = ActionTypes;

const AppActions = {
    resetApp: () => {
        return (dispatch) => {
            setTimeout(function() {
                dispatch({ type: RESET });
            }, 1000);
        };
    },
    authorise: (login) => {
        return (dispatch) => dispatch({ type: AUTH, login });
    },
    selectItem: (id) => {
        return (dispatch) => dispatch({ type: CHOOSE_ITEM, id });
    }
};

export default AppActions;
