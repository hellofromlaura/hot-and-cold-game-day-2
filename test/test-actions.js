import React from 'react';
import chai from 'chai';
const should = chai.should();

import * as actions from '../js/actions';


describe('Action: makeGuess', function(){
  it('should create an action for making a guess', function() {
    const expected = {
      type: 'MAKE_GUESS',
      guess: 10
    }

    let result = actions.makeGuess(expected.guess);
    result.should.deep.equal(expected);

  })
})

describe('Action: toggleInfoModal', function(){
  it('should create an action for toggling Modal status', function() {
    const expected = {
      type: 'TOGGLE_INFO_MODAL'
    }

    let result = actions.toggleInfoModal();
    result.should.deep.equal(expected);

  })
})

describe('Action: newGame', function(){
  it('should create an action to start a new game', function() {

    let result = actions.newGame();
    result.type.should.equal('NEW_GAME');

  })
})
