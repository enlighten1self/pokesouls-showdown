export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen9',
	init() {
		this.modData('Abilities', 'noability').isNonstandard = null;
	},
};
