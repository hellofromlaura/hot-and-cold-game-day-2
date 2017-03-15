import React from 'react';
import chai from 'chai';
const should = chai.should();
import * as actions from '../js/actions';
import reducers from '../js/reducers';

describe('game reducer', function () {

	it('should return the initial state', function () {
		let result = reducers(undefined, {});
		
		result.guesses.should.be.an('array');
		result.feedback.should.eq('Make your guess!');
		result.correctAnswer.should.be.an('number');
		result.showInfoModal.should.be.eq(false);

	})

	it('should make sure guess is a number', function () {
		let guess = 'Hello';
		let result = reducers(undefined, {
    		type: 'MAKE_GUESS',
    		guess: guess
		});

		result.feedback.should.eq('Please enter a valid number');

	})

	it('should make sure guess is a number between 1 and 100', function () {
		let guess = -5;
		let result = reducers(undefined, {
			type: 'MAKE_GUESS',
			guess: guess
		});

		result.feedback.should.eq('Please enter between 1 and 100');

	})

	it('give hot or cold feedback', function () {
		let guess = 45;
		let result = reducers(undefined, {
			type: 'MAKE_GUESS',
			guess: guess
		});

		result.feedback.should.eq('You\'re Hot!');

	})

	it('should make sure new game resets the game', function () {
		let result = reducers(undefined, {
			type: 'NEW_GAME',
			correctAnswer: 30
		});

		result.correctAnswer.should.eq(30);

	})


})