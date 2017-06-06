import ActionTypes from './actionTypes';

const {
    // Write down the actions you want to use here
    RESET
} = ActionTypes;

const AppActions = {
    resetApp: () => {
        return (dispatch, getState) => {
            setTimeout(function() {
                dispatch({ type: RESET });
            }, 1000);
        };
    }
};

export default AppActions;
