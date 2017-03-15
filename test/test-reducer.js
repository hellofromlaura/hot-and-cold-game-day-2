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
		result.feedback.should.eq( 'Please enter a valid number');

	})
})