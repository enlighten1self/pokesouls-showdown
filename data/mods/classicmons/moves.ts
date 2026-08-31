export const Moves: { [k: string]: ModdedMoveData } = {
	electricterrain: {
		inherit: true,
		condition: {
			onFieldStart() {
				this.add('-fieldstart', 'move: Electric Terrain');
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Electric Terrain');
			},
		},
	},
	grassyterrain: {
		inherit: true,
		condition: {
			onFieldStart() {
				this.add('-fieldstart', 'move: Grassy Terrain');
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Grassy Terrain');
			},
		},
	},
	mistyterrain: {
		inherit: true,
		condition: {
			onFieldStart() {
				this.add('-fieldstart', 'move: Misty Terrain');
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Misty Terrain');
			},
		},
	},
	psychicterrain: {
		inherit: true,
		condition: {
			onFieldStart() {
				this.add('-fieldstart', 'move: Psychic Terrain');
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Psychic Terrain');
			},
		},
	},
	arcaneterrain: {
		inherit: true,
		condition: {
			onFieldStart() {
				this.add('-fieldstart', 'move: Arcane Terrain');
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Arcane Terrain');
			},
		},
	},
	fog: {
		inherit: true,
		condition: {
			onFieldStart() {
				this.add('-weather', 'Fog');
			},
			onFieldResidualOrder: 1,
			onFieldResidual() {
				this.add('-weather', 'Fog', '[upkeep]');
				this.eachEvent('Weather');
			},
			onFieldEnd() {
				this.add('-weather', 'none');
			},
		},
	},
};
