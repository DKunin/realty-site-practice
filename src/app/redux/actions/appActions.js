import ActionTypes from './actionTypes';

const { RESET, AUTH, CHOOSE_ITEM, LOAD_ITEMS, FORM_SUBMITTED } = ActionTypes;

const AppActions = {
    resetApp: () => {
        return dispatch => {
            setTimeout(function() {
                dispatch({ type: RESET });
            }, 1000);
        };
    },
    loadItems: () => {
        return dispatch => {
            fetch(
                'https://allow-any-origin.appspot.com/http://beta.json-generator.com/api/json/get/N14Y2EYzX'
            )
                .then(result => result.json())
                .then(items => {
                    dispatch({ type: LOAD_ITEMS, items });
                });
        };
    },
    submitInfo: formNode => {
        return dispatch => {
            fetch('http://httpbin.org/post', {
                method: 'post',
                body: new FormData(formNode)
            })
                .then(result => result.json())
                .then(() => {
                    dispatch({ type: FORM_SUBMITTED });
                });
        };
    },
    authorise: login => {
        return dispatch => dispatch({ type: AUTH, login });
    },
    selectItem: id => {
        return dispatch => dispatch({ type: CHOOSE_ITEM, id });
    }
};

export default AppActions;
