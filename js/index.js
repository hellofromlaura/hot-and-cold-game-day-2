require('babel-polyfill');
import React from 'react';
import ReactDOM  from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import * as actions from './actions/index';
import Game from './components/game';

store.dispatch(actions.makeGuess(5));
store.dispatch(actions.makeGuess(15));
store.dispatch(actions.makeGuess(20));
store.dispatch(actions.makeGuess(50));
store.dispatch(actions.makeGuess(100));
store.dispatch(actions.makeGuess(89));
store.dispatch(actions.makeGuess(58));
store.dispatch(actions.makeGuess(42));
store.dispatch(actions.makeGuess(18));
store.dispatch(actions.makeGuess(13));
console.log(store.getState());
store.dispatch(actions.newGame());
console.log(store.getState());

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
    	<Provider store={store}>
    		<Game />
    	</Provider>,
    	document.getElementById('app')
    )
);
