'use strict';

import test from 'ava';
import initialState from './src/app/redux/store/initialstate';
import reducers from './src/app/redux/store/reducers/appReducer';
import { ActionTypesApp } from './src/app/redux/actions/actionTypes';

const { RESET, AUTH, CHOOSE_ITEM, LOAD_ITEMS, FORM_SUBMITTED } = ActionTypesApp;

test('has an initial state', async t => {
    t.truthy(initialState());
});

test('has default', async t => {
    t.deepEqual(reducers(initialState(), { type: '' }), initialState());
});

test('can reset to initialState', async t => {
    const taintedState = {
        auth: { login: 'Someone' },
        selectedId: 3,
        items: [],
        formSubmitted: true
    };
    t.deepEqual(reducers(taintedState, { type: RESET }), initialState().app);
});

test('can set auth', async t => {
    const authee = 'Person';
    const newState = reducers(initialState().app, {
        type: AUTH,
        login: authee
    });
    t.is(newState.auth.login, authee);
});

test('can choose item', async t => {
    const id = 123;
    const newState = reducers(initialState().app, {
        type: CHOOSE_ITEM,
        id
    });
    t.is(newState.selectedId, id);
});

test('can load items', async t => {
    const items = [{ stuff: true }, { otherStuff: true }];
    const newState = reducers(initialState().app, {
        type: LOAD_ITEMS,
        items
    });
    t.deepEqual(newState.items, items);
});

test('can submit form', async t => {
    const newState = reducers(initialState().app, {
        type: FORM_SUBMITTED
    });
    t.true(newState.formSubmitted);
});