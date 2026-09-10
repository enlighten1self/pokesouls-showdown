'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('Eject Button', function () {
	afterEach(function () {
		battle.destroy();
	});

	it('should not block a pivot used against its holder', function () {
		battle = common.createBattle([[
			{species: 'Beedrill', moves: ['uturn']},
			{species: 'Kakuna', moves: ['splash']},
		], [
			{species: 'Golem', item: 'ejectbutton', moves: ['splash']},
			{species: 'Geodude', moves: ['splash']},
		]]);

		battle.makeChoices('move uturn', 'move splash');
		assert.equal(battle.p1.requestState, 'switch');
		assert.equal(battle.p2.requestState, 'switch');
	});
});