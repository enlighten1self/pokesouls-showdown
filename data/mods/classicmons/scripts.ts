export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen5',
	gen: 5,
	init() {
		const legacySpecialTypes = new Set([
			'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Psychic', 'Dragon', 'Dark', 'Fairy',
		]);
		for (const moveid in this.data.Moves) {
			const move = this.modData('Moves', moveid);
			if (!move || move.category === 'Status') continue;
			if (move.id !== 'struggle') {
				move.category = legacySpecialTypes.has(move.type) ? 'Special' : 'Physical';
			}
		}

		for (const speciesid in this.data.Learnsets) {
			const learnset = this.modData('Learnsets', speciesid).learnset;
			if (!learnset) continue;
			for (const moveid of Object.keys(learnset)) {
				const move = this.modData('Moves', moveid);
				if (!move || move.gen > 5 || move.isNonstandard === 'Future') {
					delete learnset[moveid];
				}
			}
		}

		for (const itemid in this.data.Items) {
			const item = this.modData('Items', itemid);
			if (!item) continue;
			if (item.gen > 5 || item.isNonstandard === 'Future') {
				item.isNonstandard = 'Future';
			}
			if (item.zMove || item.zMoveFrom || item.zMoveType) {
				delete item.zMove;
				delete item.zMoveFrom;
				delete item.zMoveType;
			}
		}

		for (const abilityid in this.data.Abilities) {
			const ability = this.modData('Abilities', abilityid);
			if (!ability) continue;
			if (ability.gen > 5 || ability.isNonstandard === 'Future') {
				ability.isNonstandard = 'Future';
			}
		}

		for (const speciesid in this.data.Pokedex) {
			const species = this.modData('Pokedex', speciesid);
			if (!species || !species.types || !species.types.includes('Fairy')) continue;
			const oldTypes = species.types.filter((type: string) => type !== 'Fairy');
			species.types = species.gen && species.gen <= 5 ? (oldTypes.length ? oldTypes : ['Normal']) : ['Normal'];
		}
	},
	actions: {
		canZMove(pokemon) {
			void pokemon;
			return;
		},
		getZMove(move, pokemon, skipChecks) {
			void move;
			void pokemon;
			void skipChecks;
			return;
		},
	},
};
