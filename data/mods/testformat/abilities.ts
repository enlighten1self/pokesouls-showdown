export const Abilities: {[k: string]: ModdedAbilityData} = {
	protomorphosis: {
		inherit: true,
		onWeatherChange(pokemon) {
			if (this.field.isWeather('fog')) {
				pokemon.addVolatile('protomorphosis');
			} else if (!pokemon.volatiles['protomorphosis']?.fromBooster) {
				pokemon.removeVolatile('protomorphosis');
			}
		},
	},
};
