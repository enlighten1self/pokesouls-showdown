// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
	// National Dex
	///////////////////////////////////////////////////////////////////

	{
		section: "Souls",
	},
	{
		name: "[Gen 9] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen9',
		team: 'random',
		ruleset: ["Terastal Clause",'PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] National Dex",
		mod: "gen9",
		ruleset: [
			"Standard NatDex", "Baton Pass Stat Trap Clause", "OHKO Clause", "Evasion Clause", "Species Clause", "Sleep Moves Clause", "Terastal Clause",
		],
		banlist: [
			"ND Uber", "ND AG", "Arena Trap", "Moody", "Power Construct", "Shadow Tag", "King's Rock", "Quick Claw", "Razor Fang", "Assist", "Last Respects",
			"Shed Tail",
		],
	},
	{
		name: "[Gen 9] National Dex Ubers",
		mod: "gen9",
		ruleset: [
			"Standard NatDex", "Baton Pass Stat Trap Clause", "OHKO Clause", "Evasion Moves Clause", "Evasion Items Clause", "Species Clause", "Sleep Moves Clause", 
			"Mega Rayquaza Clause", "Terastal Clause",
		],
		banlist: [
			"ND AG", "Assist",
		],
	},
	//{
	//	name: "[Gen 9] National Dex Ubers UU",
	//	mod: "gen9",
	//	ruleset: [
	//		"[Gen 9] National Dex Ubers", "!Sleep Moves Clause", 'Sleep Clause Mod'
	//	],
	//	banlist: [
	//		"Arceus", "Marshadow", "Calyrex-Ice", "Chien-Pao", "Deoxys-Attack", "Eternatus", "Frostiken-Mega", "Giratina-Origin", "Groudon-Primal", "Ho-Oh", 
	//		"Kyogre-Primal", "Necrozma-Dusk-Mane", "Necrozma-Ultra", "Rayquaza", "Salamence-Mega", "Xerneas", "Yveltal", "Kyurem-Black", "Zacian-Crowned",
	//		"Power Construct", "Shadow Tag", "King's Rock", "Razor Fang", "Last Respects", "Mewtwo-Mega-Y", "Caimanrago-Mega", "Cereblaze-Mega", "Tempervian-Mega"
	//	],
	//},
	{
		name: "[Gen 9] National Dex UU",
		mod: "gen9",
		ruleset: ["[Gen 9] National Dex"],
		banlist: [
			"ND OU", "ND UUBL", "Drizzle", "Heat Rock"
		],
	},
	{
		name: "[Gen 9] National Dex BU",
		mod: "gen9",
		ruleset: ["[Gen 9] National Dex UU"],
		banlist: ["ND UU", "ND BUBL", "Drought"],
	},
	{
		name: "[Gen 9] National Dex RU",
		mod: "gen9",
		ruleset: ["[Gen 9] National Dex BU"],
		banlist: ["ND BU", "ND RUBL"],
	},
	{
		name: "[Gen 9] National Dex NU",
		mod: "gen9",
		ruleset: ["[Gen 9] National Dex RU"],
		banlist: ["ND RU", "ND NUBL"],
	},
	{
		name: "[Gen 9] National Dex LC",
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Little Cup'],
		banlist: [
			'Moody', 'Eevium Z', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Gligar', 'Basculin-White-Striped', 'Duraludon',
			'Aipom', 'Bronzor-Solarian', 'Cutiefly', 'Diglett-Base', 'Dunsparce', 'Flittle', 'Girafarig', 'Kubfu', 'Meditite', 'Misdreavus', 'Mr. Mime-Galar', 'Murkrow', 'Poipole',
			'Porygon', 'Qwilfish-Hisui', 'Rufflet', 'Scraggy', 'Type: Null', 'Vulpix-Alola', 'Yanma', 'Belly Drum', 'Chlorophyll', 'Gemix', 'Voltorb-Hisui'
		],
	},
	{
		name: "[Gen 9] National Dex Monotype",
		mod: "gen9",
		ruleset: [
			"Standard NatDex", "Baton Pass Stat Trap Clause", "Same Type Clause", "Terastal Clause", "Species Clause", "OHKO Clause", "Evasion Clause", "Sleep Clause Mod",
		],
		banlist: [
			"Annihilape", "Arceus", "Baxcalibur", "Blastoise-Mega", "Blaziken", "Calyrex-Ice", "Calyrex-Shadow", "Chi-Yu", "Chien-Pao", "Darkrai", "Deoxys-Base", 
			"Deoxys-Attack", "Dialga", "Dracovish", "Dragapult", "Espathra", "Eternatus", "Flutter Mane", "Frostiken-Mega", "Genesect", "Gengar-Mega", "Giratina",
			"Groudon", "Ho-Oh", "Hoopa-Unbound", "Iron Bundle", "Kangaskhan-Mega", "Kartana", "Kingambit", "Koraidon", "Kyogre", "Kyurem-Black", "Kyurem-White",
			"Lucario-Mega", "Lugia", "Lunala", "Magearna", "Marshadow", "Mawile-Mega", "Medicham-Mega", "Metagross-Mega", "Mewtwo", "Miraidon", "Naganadel", 
			"Necrozma-Dawn-Wings", "Necrozma-Dusk-Mane", "Ogerpon-Hearthflame", "Palafin", "Palkia", "Pheromosa", "Raichu-Mega-Y", "Rayquaza", "Reshiram",
			"Salamence-Mega", "Shaymin-Sky", "Solgaleo", "Spectrier", "Ursaluna-Bloodmoon", "Urshifu-Base", "Xerneas", "Yveltal", "Zacian", "Zamazenta", "Zekrom",
			"Zygarde-Base", "Zygarde-Complete", "Moody", "Shadow Tag", "Power Construct", "Booster Energy", "Damp Rock", "Focus Band", "Icy Rock", "King's Rock",
			"Leppa Berry", "Quick Claw", "Razor Fang", "Smooth Rock", "Terrain Extender", "Acupressure", "Baton Pass", "Last Respects", "Shed Tail",
			"Tricky Reception", "Caimanrago", "Cereblaze-Mega", "Forrogue-Mega", "Tempervian-Mega", "Wyrmperior-Mega",
		],
	},
	{
		name: "[Gen 9] National Dex Doubles",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Standard NatDex", "Baton Pass Stat Trap Clause", "OHKO Clause", "Evasion Moves Clause", "Evasion Abilities Clause", "Species Clause", "Gravity Sleep Clause",
		],
		banlist: [
			"Annihilape", "Arceus", "Calyrex-Ice", "Calyrex-Shadow", "Dialga", "Eternatus", "Genesect", "Gengar-Mega", "Giratina", "Groudon", "Ho-Oh", "Koraidon",
			"Kyogre", "Kyurem-White", "Lugia", "Lunala", "Magearna", "Melmetal", "Mewtwo", "Miraidon", "Necrozma-Dawn-Wings", "Necrozma-Dusk-Mane", "Palkia",
			"Rayquaza", "Reshiram", "Shedinja", "Solgaleo", "Terapagos", "Urshifu-Base", "Xerneas", "Yveltal", "Zacian", "Zamazenta-Crowned", "Zekrom", "Commander",
			"Power Construct", "Assist", "Coaching", "Dark Void", "Swagger",
		],
	},
	{
		name: "[Gen 9] National Dex AG",
		mod: "gen9",
		searchShow: false,
		ruleset: ["Standard NatDex"],
	},
	{
		name: "[Gen 9] National Dex BH",
		desc: `Balanced Hackmons with National Dex elements mixed in.`,
		mod: "gen9",
		searchShow: false,
		ruleset: [
			"-Nonexistent", "Standard NatDex", "Forme Clause", "Sleep Moves Clause", "Ability Clause = 2", "OHKO Clause", "Evasion Moves Clause", "Dynamax Clause",
			"CFZ Clause", "Terastal Clause", "!Obtainable",
		],
		banlist: [
			"Cramorant-Gorging", "Calyrex-Shadow", "Darmanitan-Galar-Zen", "Eternatus-Eternamax", "Groudon-Primal", "Rayquaza-Mega", "Shedinja", "Arena Trap",
			"Contrary", "Gorilla Tactics", "Huge Power", "Illusion", "Innards Out", "Magnet Pull", "Moody", "Neutralizing Gas", "Parental Bond", "Pure Power",
			"Shadow Tag", "Stakeout", "Water Bubble", "Wonder Guard", "Gengar-Mega", "Berserk Gene", "Belly Drum", "Bolt Beak", "Chatter", "Double Iron Bash",
			"Electrify", "Last Respects", "Octolock", "Rage Fist", "Revival Blessing", "Shed Tail", "Shell Smash", "Comatose + Sleep Talk", "Imprison + Transform",
		],
		restricted: ["Arceus"],
		onValidateTeam(team, format) {
			const restrictedPokemonCount = new Map<string, number>();
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (!this.ruleTable.isRestrictedSpecies(species)) continue;
				restrictedPokemonCount.set(
					species.baseSpecies,
					(restrictedPokemonCount.get(species.baseSpecies) || 0) + 1
				);
			}
			for (const [baseSpecies, count] of restrictedPokemonCount) {
				if (count > 1) {
					return [
						`You are limited to one ${baseSpecies} forme.`,
						`(You have ${count} ${baseSpecies} forme${count === 1 ? "" : "s"
						}.)`,
					];
				}
			}
		},
	},
	{
	section: "Other Metagames",
	},
	{
		name: "[Gen 9] National Dex AAA",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		mod: 'gen9',
		ruleset: ["Standard NatDex", 'Standard OMs', '!Obtainable Abilities', 'Ability Clause = 2', 'Sleep Moves Clause', 'Terastal Clause',],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 
			'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Mewtwo', "Last Respects", "Shed Tail", "Caimanragonite", "Cereblazite", "Forroguite", "Frostikenite", "Tempervianite", 
			"Tricky Reception", "Rising Voltage", "Speed Boost", "Gorilla Tactics", "Alakazite", "Blastoisinite", "Blazikenite", "Dracovish", "Kangaskhanite", "Lucarionite", "Marshadow", "Necrozma-Dusk-Mane", 
			"Necrozma-Dawn-Wings", "Palkia", "Salamencite", "Shaymin-Sky", "Xerneas", "Yveltal", "Zekrom", "Miraidon", "Zacian", "Rayquaza", "Gengarite", "Shadow Tag", "Power Construct", 'Raichunite-Y'
		],
		restricted : [
			'Ceruledge', 'Darkrai', 'Dragonite', 'Gouging Fire', 'Hoopa-Unbound', 'Iron Valiant', 'Keldeo', 'Noivern', 'Regigigas', 'Slaking', 'Sneasler', 'Urshifu-Rapid-Strike', 'Volcarona', 
			'Walking Wake', 'Weavile', 'Melmetal', 'Ultigigas', 'Magic Bounce', "Magnet Pull", "Innards Out", "Neutralizing Gas", "Poison Heal", "Simple", "Stakeout", "Toxic Debris", "Triage", "Unburden", 
			"Water Bubble", "Wonder Guard", "Armored Poncho", "Corruption", "Stampede", "Pure Flux", "Antarctic Power", "Fur Coat", "Good as Gold", 'Comatose', 'Contrary', 'Ice Scales', 'Illusion', 'Imposter', 
			'Huge Power', 'Abyssal Void', 'Iron Bundle', 'Magearna', 'Spectrier', 'Dragapult', "Beast Boost", "Urshifu-Base", 'Solgaleo', 'Kyurem', "Corrupted Spirit", "Eclipse Flare", "Scorn", "Neuro Engine", 
			'Apex Predator', "As One (Withorde Mega)", "From Ashes", "Masquerade", "Hadron Engine", "Intrepid Sword", "Parental Bond", "Orichalcum Pulse", "Reshiram", "Ursaluna-Bloodmoon", "Baxcalibur", "Naganadel", 
			"Genesect", "Zygarde-Base", "Pheromosa", "Tectonic Shift", "Restorative Film", "Sweet Insulation", "Spicy Spray", "Mega Sol", "Shedinja"
		],
		onValidateTeam(team, format) {
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				const ability = this.dex.abilities.get(set.ability);
			
				const naturalAbilities = Object.values(species.abilities || {}).filter(Boolean);
			
				if (
					this.ruleTable.isRestricted(`ability:${ability.id}`) &&
					!naturalAbilities.includes(ability.name)
				) {
					return [
						`"${ability.name}" is restricted and may only be used by Pokémon that naturally have it.`,
					];
				}
			
				if (
					this.ruleTable.isRestrictedSpecies(species) &&
					!naturalAbilities.includes(ability.name)
				) {
					return [
						`"${species.name}" is restricted and may only use its natural abilities.`,
					];
				}
			}
		}
	},
	{
		name: "[Gen 9] National Dex STABmons",
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Standard OMs', 'STABmons Move Legality', 'Sleep Moves Clause', 'Terastal Clause', "Baton Pass Stat Trap Clause"],
		banlist: [
			'Araquanid', 'Arceus', 'Azumarill', 'Baxcalibur', 'Blastoise-Mega', 'Blaziken-Mega', 'Basculegion', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Cloyster', 'Darkrai', 
			'Darmanitan-Galar', 'Deoxys-Attack', 'Deoxys-Base', 'Dialga', 'Dialga-Origin', 'Dracovish', 'Dragapult', 'Dragonite', 'Enamorus-Base', 'Espathra', 'Eternatus', 'Flutter Mane', 'Garchomp', 
			'Gengar-Mega', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Gouging Fire', 'Ho-Oh', 'Iron Bundle', 'Kangaskhan-Mega', 'Kartana', 'Koraidon', 'Komala', 'Kyogre', 'Kyurem-Black', 
			'Kyurem-White', 'Landorus-Base', 'Lilligant-Hisui', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Manaphy', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Naganadel', 'Necrozma-Dusk-Mane', 
			'Necrozma-Dawn-Wings', 'Ogerpon-Hearthflame', 'Ogerpon-Wellspring', 'Palkia', 'Palkia-Origin', 'Porygon-Z', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Silvally', 
			'Solgaleo', 'Spectrier', 'Tapu Koko', 'Tapu Lele', 'Terapagos', 'Ursaluna-Bloodmoon', 'Walking Wake', 'Xerneas', 'Xurkitree', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 
			'Zekrom', 'Zygarde-50%', 'Arena Trap', 'Moody', 'Shadow Tag', 'Power Construct', 'Damp Rock', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Last Respects', 'Shed Tail', 'Wicked Blow', 
			'Wicked Torque', 'Caimanrago-Mega', 'Cereblaze-Mega', 'Forrogue-Mega', 'Frostiken-Mega', 'Tempervianite', 'Ultigigas', 'Tricky Reception', 'Stratozone', 'Typhtesla', 'Chrono Venom',
			'Alakazam-Mega', 'Caimanrago', 'Delphox-Mega', 'Deoxys-Speed', 'Greninja-Mega', 'Lopunny-Mega', 'Palafin', 'Roaring Moon', 'Sneasler', 'Starmie-Mega', 'Tempervian-Mega', 'Tempervian-Mega-Ashen',
			'Staraptor-Mega', 'Raichu-Mega-Y'
		],
		restricted: [
			'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Chatter', 'Clangorous Soul', 'Dire Claw', 'Double Iron Bash', 'Dragon Energy', 'Electrify', 'Extreme Speed', 'Fillet Away', 'Final Gambit', 
			'Fishious Rend', 'Geomancy', 'Gigaton Hammer', 'No Retreat', 'Rage Fist', 'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Thousand Arrows', 'Trick-or-Treat', 'Triple Arrows', 'V-create', 
			'Victory Dance', 'Spectral Tail', 'Photon Haymaker', 'Endless Torment', 'Torch Song', 'Ceaseless Edge', 'Stainless Slash', 'Mountain Gale'
		],
	},
	{
		name: "[Gen 9] National Dex Mix and Mega",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone, or transform them with Genesect Drives, Primal orbs, Origin orbs, Rusted items, Ogerpon Masks, Arceus Plates, and Silvally Memories with no limit. Mega and Primal boosts based on form changes from gen 7.`,
		mod: 'mixandmega',
		ruleset: ['Standard NatDex', 'Standard OMs', 'Evasion Items Clause', 'Evasion Abilities Clause', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Calyrex-Shadow', 'Koraidon', 'Kyogre', 'Miraidon', 'Moody', 'Shadow Tag', 'Beedrillite', 'Blazikenite', 'Gengarite',
			'Kangaskhanite', 'Mawilite', 'Medichamite', 'Pidgeotite', 'Red Orb', 'Baton Pass', 'Rayquaza-Mega', 'Xerneas', 'Marshadow',
			'Shed Tail', 'Tempervianite', 'Caimanragonite', 'Cereblazite', 'Forroguite', 'Tricky Reception', 'Wyrmperionite', 'Yveltal', 
			'Assist', 'Last Respects', 'Necrozma-Dusk-Mane', 'Kyurem-Black', 'Kyurem-White', 'Necrozma-Dawn-Wings', 'Groudon', 
			'Calyrex-Ice', 'Arceus-Base'
		],
		restricted: [
			'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Eternatus', 'Flutter Mane', 'Giratina', 'Gouging Fire', 'Ho-Oh', 'Iron Bundle', 'Lugia',
			'Lunala', 'Manaphy', 'Mewtwo', 'Palkia', 'Rayquaza', 'Regigigas', 'Reshiram', 'Slaking', 'Sneasler', 'Solgaleo', 'Ursaluna-Bloodmoon', 
			'Urshifu-Single-Strike', 'Walking Wake', 'Zacian', 'Zekrom', 'Darmanitan-Galar', 'Huesotops', 'Ultigigas', 'Xurkitree', 'Spectrier', 
			'Naganadel', 'Pheromosa', 'Boomkeldurr', 'Arceus', 'Elysian Dance', 'Scovillainite', 'Starminite', 'Meganiumite', 'Eelektrossite',
			'Staraptite', 'Raichunite-Y'
		],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (!(item.forcedForme && !item.zMove) && !item.megaStone &&
					!item.isPrimalOrb && !item.name.startsWith('Rusted')) continue;
				const natdex = this.ruleTable.has('natdexmod');
				if (natdex && item.id !== 'ultranecroziumz') continue;
				const species = this.dex.species.get(set.species);
				if (species.isNonstandard && !this.ruleTable.has(`+pokemontag:${this.toID(species.isNonstandard)}`)) {
					return [`${species.baseSpecies} does not exist in gen 9.`];
				}
				if (((item.itemUser?.includes(species.name) || item.forcedForme === species.name) &&
					!item.megaStone && !item.isPrimalOrb) || (natdex && species.name.startsWith('Necrozma-') &&
						item.id === 'ultranecroziumz')) {
					continue;
				}
				if (this.ruleTable.isRestrictedSpecies(species) || this.toID(set.ability) === 'powerconstruct') {
					return [`${species.name} is not allowed to hold ${item.name}.`];
				}
				if (itemTable.has(item.id)) {
					return [
						`You are limited to one of each Mega Stone/Primal Orb/Rusted item/Origin item/Ogerpon Mask/Arceus Plate/Silvally Memory.`,
						`(You have more than one ${item.name})`,
					];
				}
				itemTable.add(item.id);
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			const originalSpecies = this.dex.species.get((pokemon.species as any).originalSpecies);
			if (originalSpecies.exists && pokemon.m.originalSpecies !== originalSpecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, originalSpecies.requiredItems?.[0] || originalSpecies.requiredItem || originalSpecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.join('/') !== pokemon.species.types.join('/')) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			const originalSpecies = this.dex.species.get((pokemon.species as any).originalSpecies);
			if (originalSpecies.exists && pokemon.m.originalSpecies !== originalSpecies.baseSpecies) {
				this.add('-end', pokemon, originalSpecies.requiredItems?.[0] || originalSpecies.requiredItem || originalSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 9] National Dex Tier Shift",
		desc: `Pok&eacute;mon below OU get their stats, excluding HP, boosted. UU/BUBL get +15, BU/RUBL get +20, RU/NUBL get +25, and NU or lower get +30.`,
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Standard OMs', 'Sleep Moves Clause', 'Terastal Clause', 'Evasion Clause', 'Tier Shift Mod'],
		banlist: [
			'Arceus', 'Calyrex-Shadow', 'Koraidon', 'Kyogre', 'Medicham', 'Miraidon', 'Necrozma-Dusk-Mane', 'Zacian-Crowned', 'Drizzle', 'Moody', 'Arena Trap', 'Shadow Tag',
			'Baton Pass', 'Last Respects', 'Shed Tail', 'Heat Rock', 'King\'s Rock', 'Light Clay', 'Razor Fang', 'Xerneas', 'Tempervianite', 'Forroguite', 'Caimanragonite', 
			'Tricky Reception', 'Assist', 'Rayquaza-Mega', 'Gengar-Mega', 'Red Orb', 'Blazikenite', 'Celebrate', 'Happy Hour', 'Diggersby', 
		],
		unbanlist: ['Arceus-Bug', 'Arceus-Grass', 'Arceus-Ice', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Flying', 'Arceus-Dragon', 'Arceus-Fighting', ],
	},
	{
		name: "[Gen 9] National Dex Convergence",
		desc: `Allows all Pok&eacute;mon that have identical types to share moves and abilities.`,
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Standard OMs', 'Ability Clause = 2', 'Sleep Moves Clause', 'Convergence Legality', 'Terastal Clause', '!Obtainable Abilities'],
		banlist: [
			'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Comfey', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Speed',
			'Dialga', 'Dondozo', 'Eternatus', 'Flutter Mane', 'Giratina', 'Groudon', 'Haxorus', 'Ho-oh', 'Inteleon',
			'Iron Bundle', 'Iron Hands', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala',
			'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Palkia', 
			'Rayquaza', 'Regieleki', 'Regigigas', 'Reshiram', 'Roaring Moon', 'Shaymin-Sky', 'Solgaleo', 'Slaking', 'Smeargle', 'Spectrier', 
			'Umbreon', 'Urshifu', 'Walking Wake', 'Zacian', 'Zamazenta', 'Zekrom', 'Arena Trap', 
			'Comatose', 'Contrary', 'Drizzle', 'Drought', 'Imposter', 'Moody', 'Pure Power', 'Shadow Tag', 'Speed Boost', 'Unburden',
			'King\'s Rock', 'Light Clay', 'Razor Fang', 'Baton Pass', 'Belly Drum', 'Boomburst', 'Extreme Speed', 'Final Gambit', 'Last Respects', 'Population Bomb',
			'Quiver Dance', 'Rage Fist', 'Shed Tail', 'Shell Smash', 'Transform', 'Assist', 'Xerneas', 'Tempervian-Mega', 'Forrogue-Mega', 'Caimanrago',
			'Tricky Reception', 'Alakazam-Mega', 'Blastoise-Mega', 'Blaziken-Mega', 'Cereblaze-Mega', 'Frostiken-Mega', 'Kangaskhan-Mega', 'Lucario-Mega', 'Salamence-Mega',
			'Wyrmperionite', 'Yveltal', 'Darmanitan-Galar', 'Fishious Rend', 'Bolt Beak', 'Victory Dance', 'Geomancy', 'No Retreat', 'Huge Power',
			'Garchomp', 'Dragapult', 'Mawilite', 'Light of Ruin', 'Rising Voltage', 'Gouging Fire', 'Abyssal Void', 'Bulking Blade', 'Tail Glow', 'Tough Claws', 'Celebrate',
			'Happy Hour', 'Conversion', 'Protean', 'Adaptability', 'Furfrou', 'Blissey', 'Chansey', 'Moltres-Galar', 'Iron Jugulis', 'Dire Claw', 'Mew', 'Iron Boulder',
			'Sheer Force', 'Shift Gear', 'Malabyss', 'Storm Throw', 'Expanding Force', 'Take Heart', 'Zygarde-Base', 'Melmetal', 'Gigaton Hammer', 'Gengar-Mega',
			'Delphox-Mega', 'Greninja-Mega', 'Lopunny-Mega', 'Marshadow', 'Metagross-Mega', 'Naganadel', 'Pheromosa', 'Sneasler', 'Starmie-Mega', 'Ursaluna-Bloodmoon',
			'Tempervian-Mega-Ashen', 'Zygarde-Complete', 'Power Construct', 'Staraptor-Mega', 'Genesect', 'Raichu-Mega-Y', 'Necrozma-Ultra', 'Xurkitree', 'Multi-Attack'
		],
	},
	{
		name: "[Gen 9] National Dex Alphabet Cup",
		desc: `Allows Pok&eacute;mon to use any move that shares the same first letter as their name or a previous evolution's name.`,
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Standard OMs', 'Alphabet Cup Move Legality', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Arceus', 'Baxcalibur', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Deoxys-Attack', 'Deoxys-Base', 'Dialga', 'Dragapult', 
			'Espathra', 'Eternatus', 'Flutter Mane', 'Giratina', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Koraidon', 'Kyogre', 'Kyurem-Black', 
			'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 
			'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Urshifu-Base', 'Zacian', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 
			'Shadow Tag', 'King\'s Rock', 'Light Clay', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail', 'Melmetal', 'Weavile',
		],
		restricted: [
			'Belly Drum', 'Ceaseless Edge', 'Clangorous Soul', 'Dire Claw', 'Extreme Speed', 'Fillet Away', 'Glacial Lance', 'Glare', 'Lumina Crash', 'Rage Fist', 'Revival Blessing',
			'Sacred Fire', 'Shell Smash', 'Shift Gear', 'Surging Strikes', 'Tail Glow', 'Triple Arrows', 'Quiver Dance', 'Victory Dance', 'Stainless Slash',
			'Gigaton Hammer', 'Thousand Arrows', 'Double Iron Bash', 'Mountain Gale'
		],
	},
	{
		name: "[Gen 9] National Dex Frantic Fusions",
		desc: `Pok&eacute;mon nicknamed after another Pok&eacute;mon get their stats buffed by 1/4 of that Pok&eacute;mon's stats, barring HP, and access to one of their abilities.`,
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Standard OMs', '!Nickname Clause', '!Obtainable Abilities', 'Ability Clause = 2', 'Sleep Moves Clause', 'Frantic Fusions Mod', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga-Base', 'Dialga-Origin', 'Eternatus', 'Flutter Mane', 'Giratina-Base', 
			'Giratina-Origin', 'Groudon-Base', 'Ho-Oh', 'Koraidon', 'Kyogre-Base', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Mewtwo-Base', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 
			'Palkia-Base', 'Palkia-Origin', 'Rayquaza-Base', 'Shaymin-Sky', 'Zacian', 'Zacian-Crowned', 'Zekrom', 'Arena Trap', 'Contrary', 'Moody', 'Shadow Tag', 'Damp Rock', 'Heat Rock', 'King\'s Rock', 
			'Quick Claw', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Revival Blessing', 'Shed Tail', 'Assist', 'Power Construct', 'Xerneas', 'Blastoise-Mega', 'Blaziken-Mega', 'Caimanrago-Mega', 'Cereblaze-Mega', 
			'Gorilla Tactics', 'Forrogue-Mega', 'Frostiken-Mega', 'Groudon-Primal', 'Kangaskhan-Mega', 'Kyogre-Primal', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Marshadow', 'Necrozma-Ultra', 'Salamence-Mega', 
			'Tempervian-Mega', 'Yveltal', 'Rayquaza-Mega', 'Huge Power', 'Pure Power', 'Gengar-Mega', 'Fishious Rend', 'Bolt Beak', 'Espathra', 'Adaptability', 'Spicy Spray', 'Simple', 'Fur Coat', 'Ice Scales', 
			'Speed Boost', 'Neutralizing Gas', 'Light Ball',
		],
		restricted: [
			'Genesect', 'Abyssal Void', 'Elysian Dance', 'Naganadel', 'Pheromosa', 'Boomkeldurr', 'Kartana', 'Poison Heal', 'Water Bubble', 'Comfey', 'Cresselia', 'Darkrai', 'Deoxys-Speed', 'Iron Moth', 'Iron Valiant', 
			'Keldeo', 'Hoopa-Unbound', 'Iron Boulder', 'Kyurem', 'Regigigas', 'Palafin', 'Regieleki', 'Slaking', 'Sneasler', 'Ogerpon-Wellspring', 'Toxapex', 'Magnet Pull', 'Illusion', 'Weavile', 'Stench', 'Stakeout', 'Unburden', 
			'Dragapult', 'Enamorus-Base', 'Komala', 'Landorus-Base', 'Magearna', 'Volcarona', 'Walking Wake', 'Solgaleo', 'Ogerpon-Hearthflame', 'Urshifu', 'Urshifu-Rapid-Strike', 'Gouging Fire', 'Iron Bundle', 'Stratozone', 
			'Corruption', 'Electric Surge', 'Misty Surge', 'Psychic Surge', 'Ultigigas', 'Tectonic Shift', 'Dragonite', 'Kommo-o', 'Noivern', 'Zamazenta-Crowned', 'Chien-Pao', 'Reshiram', 'Zamazenta', 'Melmetal', 'Blacephalon', 
			'Stakataka', 'Xurkitree', 'Spectrier', 'Flaming Wrath', 'Chrono Venom', 'Lucario-Mega', 'Beedrill-Mega', 'Ditto', 'Metagross-Mega', 'Heracross-Mega', 'Tyranitar-Mega', 'Latios-Mega', 'Garchomp-Mega', 'Gallade-Mega', 
			'Excadrill-Mega', 'Diancie-Mega', 'Charizard-Mega-Y', 'Typhtesla-Mega', 'Swampert-Mega', 'Scizor-Mega', 'Gyarados-Mega', 'Delphox-Mega', 'Withorde-Mega', 'Roaring Moon', 'Shuckle', 'Bastiodon', 'Deoxys-Defense',
			'Rampardos', 'Hoopa-Base', 'Ninjask', 'Electrode-Base', 'Electrode-Hisui', 'Accelgor', 'Zeraora', 'Regice', 'Florges', 'Carbink', 'Diancie-Base', 'Goodra-Base', 'Goodra-Hisui', 'Probopass', 'Registeel', 'Regirock', 'Steelix-Base', 
			'Steelix-Mega', 'Avalugg-Base', 'Avalugg-Hisui', 'Aggron-Mega', 'Cloyster', 'Gemix', 'Onix', 'Doublade', 'Toxtricity', 'Shedinja', 'Eelevate',
		],
		onValidateTeam(team) {
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				const ability = this.dex.abilities.get(set.ability);
				const naturalAbilities = Object.values(species.abilities || {}).filter(Boolean);
			
				if (
					this.ruleTable.isRestrictedSpecies(species) &&
					set.name && set.name !== species.name
				) {
					return [
						`"${species.name}" is restricted and cannot be fused.`,
					];
				}
			
				if (set.name && set.name !== species.name) {
					const nickSpecies = this.dex.species.get(set.name);
				
					if (
						nickSpecies.exists &&
						this.ruleTable.isRestrictedSpecies(nickSpecies)
					) {
						return [
							`You cannot fuse with restricted Pokémon like "${nickSpecies.name}".`,
						];
					}
				}
			
				if (
					this.ruleTable.isRestricted(`ability:${ability.id}`) &&
					!naturalAbilities.includes(ability.name)
				) {
					return [
						`"${ability.name}" is restricted and may only be used by Pokémon that naturally have it.`,
					];
				}
			}
		},
	},
	{
		name: "[Gen 9] National Dex Frantic Movepools",
		desc: `Pokémon nicknamed after another Pokémon gain access to that Pokémon's movepool and abilities.`,
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Standard OMs', '!Nickname Clause', '!Obtainable Abilities', 'Ability Clause = 2', 'Sleep Moves Clause', 'Frantic MovePools', 'Terastal Clause'],
		banlist: [
			//Pokemon Bans
			'Alakazam-Mega', 'Arceus', 'Barbaracle-Mega', 'Blastoise-Mega', 'Blaziken-Mega', 'Baxcalibur', 'Caimanrago-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Cereblaze-Mega', 'Delphox-Mega', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 
			'Diancie-Mega', 'Espathra', 'Eternatus', 'Forrogue-Mega', 'Frostiken-Mega', 'Floette-Mega', 'Flutter Mane', 'Gengar-Mega', 'Ghoulizard-Mega', 'Giratina', 'Glimmora-Mega', 'Greninja-Mega', 'Groudon', 'Hawlucha-Mega', 'Ho-Oh', 
			'Kangaskhan-Mega', 'Koraidon', 'Kyogre',  'Kyurem-Black', 'Kyurem-White', 'Lopunny-Mega', 'Lucario-Mega', 'Lugia', 'Lunala', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Naganadel', 
			'Necrozma-Dusk-Mane', 'Necrozma-Dawn-Wings', 'Ogerpon-Cornerstone', 'Ogerpon-Hearthflame', 'Ogerpon-Wellspring', 'Palkia', 'Pheromosa', 'Pidgeot-Mega', 'Raichu-Mega-Y', 'Rayquaza', 'Salamence-Mega', 'Shaymin-Sky', 'Spectrier', 
			'Staraptor-Mega', 'Starmie-Mega', 'Swampert-Mega', 'Tempervian-Mega', 'Withorde-Mega', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta-Crowned', 'Zapoleon-Mega', 'Zekrom', 'Zygarde-Complete',
			//Ability Bans
			'Arena Trap', 'Beads of Ruin', 'Gorilla Tactics', 'Moody', 'Power Construct', 'Shadow Tag', 'Zen Mode',
			//Move Bans
			'Assist', 'Baton Pass', 'Bolt Beak', 'Fishious Rend', 'Last Respects', 'Rage Fist', 'Shed Tail', 
			//Item Bans
			'Bright Powder', 'King\'s Rock', 'Quick Claw', 'Razor Fang',
			//Combo Bans:
			'Rising Voltage + Electric Surge', 'Expanding Force + Psychic Surge', 'Comatose + Sleep Talk',
		],
		restricted: [
			//Pokemon Restrictions
			'Abyssal Void', 'Atlascross', 'Basculegion', 'Blacephalon', 'Boomkeldurr', 'Bulking Blade', 'Caimanrago', 'Celesteela', 'Chien-Pao', 'Chrono Venom', 'Cloyster', 'Darkrai', 'Deoxys-Speed', 'Dragapult', 'Dragonite', 'Eeveeon', 
			'Elysian Dance', 'Enamorus-Base', 'Frostiken', 'Garchomp', 'Genesect', 'Great Tusk', 'Haxorus', 'Hoopa-Unbound', 'Iron Boulder', 'Iron Bundle', 'Iron Moth', 'Iron Valiant', 'Kartana', 'Klinklang', 'Kommo-o', 'Kyurem', 'Landorus-Base', 
			'Magearna', 'Manaphy', 'Melmetal', 'Mew', 'Palafin', 'Porygon-Z', 'Quantum Syphon', 'Regidrago', 'Regieleki', 'Regigigas', 'Reshiram', 'Roaring Moon', 'Serperior', 'Shedinja', 'Slaking', 'Smeargle', 'Sneasler', 'Solgaleo', 'Tapu Koko', 
			'Tapu Lele', 'Terapagos', 'Titanium Delta', 'Ultigigas', 'Ursaluna-Bloodmoon', 'Urshifu', 'Victini', 'Volcarona', 'Walking Wake', 'Weavile', 'Xurkitree', 'Zamazenta', 'Zeranheit', 'Zygarde-Base',
			//Ability Restrictions
			'Adaptability', 'Anger Shell', 'Beast Boost', 'Chlorophyll', 'Corrosion', 'Contrary', 'Drizzle', 'Drought', 'Electric Surge', 'Fur Coat', 'Good as Gold', 'Huge Power', 'Ice Scales', 'Imposter', 'Libero', 'Magic Guard', 'Magnet Pull', 
			'Neuro Drive', 'Neutralizing Gas', 'Poison Heal', 'Protean', 'Protomorphosis', 'Protosynthesis', 'Psychic Surge', 'Pure Power', 'Quark Drive', 'Regenerator', 'Sand Rush', 'Sand Stream', 'Serene Grace', 'Sheer Force', 'Simple', 'Slush Rush',
			'Snow Warning', 'Speed Boost', 'Steely Spirit', 'Steelworker', 'Swift Swim', 'Toxic Debris', 'Triage', 'Water Bubble',
			//Move Restrictions
			'Boomburst', 'Ceaseless Edge', 'Celebrate', 'Chloroblast', 'Conversion', 'Electro Shot', 'Eruption', 'Extreme Speed', 'Fillet Away', 'Gear Grind', 'Gigaton Hammer', 'Happy Hour', 'Heal Order', 'Light of Ruin', 'Mystical Power', 
			'No Retreat', 'Population Bomb', 'Power Trip', 'Psycho Boost', 'Quiver Dance', 'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Stainless Slash', 'Stored Power', 'Storm Throw', 'Stone Axe', 'Sulphuric Downpour', 'Tail Glow', 
			'Take Heart', 'Thousand Arrows', 'Thousand Waves', 'Torch Song', 'Tricky Reception', 'Triple Arrows', 'Victory Dance', 'Water Spout',  
		],
	},
	{
		name: "[Gen 9] National Dex Bonus Type",
		mod: "gen9",
		ruleset: [
			"Standard NatDex", "Baton Pass Stat Trap Clause", "OHKO Clause", "Evasion Clause", "Species Clause", "Sleep Moves Clause", "Terastal Clause", "Bonus Type Mod",
		],
		banlist: [
			"Volcarona", 'Ultigigas', 'Tricky Reception', 'Kingambit', 'Elysian Dance', 'Regieleki',
			"ND Uber", "ND AG", "Arena Trap", "Moody", "Power Construct", "Shadow Tag", "King's Rock", "Quick Claw", "Razor Fang", "Assist", "Last Respects",
			"Shed Tail",
		],
	},
	{
		name: "[Gen 9] National Dex STABonusMons",
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Standard OMs', 'Bonus Type Mod', 'STABmons Move Legality', 'Sleep Moves Clause', 'Terastal Clause', "Baton Pass Stat Trap Clause",],
		banlist: [
			'Arceus', 'Baxcalibur', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Cloyster', 'Darkrai', 'Darmanitan-Galar', 'Barbaracle-Mega', 'Polteageist',
			'Deoxys-Attack', 'Deoxys-Base', 'Dialga', 'Dragapult', 'Dragonite', 'Enamorus-Base', 'Espathra', 'Eternatus', 'Flutter Mane', 'Gengar-Mega', 'Genesect', 'Giratina', 'Groudon', 'Elysian Dance',
			'Gouging Fire', 'Ho-Oh', 'Iron Bundle', 'Kangaskhan-Mega', 'Kartana', 'Koraidon', 'Komala', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala', 'Pyroar-Mega',
			'Magearna', 'Manaphy', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Naganadel', 'Necrozma-Dusk-Mane', 'Necrozma-Dawn-Wings', 'Ogerpon-Hearthflame', 'Ogerpon-Wellspring', 'Palkia',
			'Porygon-Z', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Silvally', 'Solgaleo', 'Spectrier', 'Tapu Koko', 'Tapu Lele', 'Ursaluna-Bloodmoon', 'Walking Wake', 'Xerneas', 
			'Xurkitree', 'Yveltal', 'Zacian', 'Zekrom', 'Zygarde-50%', 'Arena Trap', 'Moody', 'Shadow Tag', 'Power Construct', 'Damp Rock', 'King\'s Rock', 'Quick Claw', 'Razor Fang',  'Assist', 'Hoopa-Unbound', 
			'Last Respects', 'Shed Tail', 'Wicked Blow', 'Wicked Torque', 'Cereblaze-Mega', 'Forrogue-Mega', 'Frostiken-Mega', 'Tempervian-Mega', 'Ultigigas', 'Tricky Reception', 'Chrono Venom', 'Alakazam-Mega', 
			'Caimanrago', 'Delphox-Mega', 'Deoxys-Speed', 'Greninja-Mega', 'Lopunny-Mega', 'Palafin', 'Roaring Moon', 'Sneasler', 'Starmie-Mega', 'Staraptor-Mega', 'Raichu-Mega-Y', 'Melmetal', 'Heat Rock', 
			'Smooth Rock', 'Icy Rock', 'Light Clay', 'Serperior', 'Volcarona', 'Fishious Rend', 'Bolt Beak', 'Zamazenta', 'Regieleki', 'Terrain Extender', 'Garchomp', 'Iron Valiant', 'Bulking Blade', 'Shedinja',
			'Acideon', 'Zeranheit', 'Quantum Syphon', 'Annihilape', 'Hawlucha', 'Withorde', 'Blacephalon', 'Aerodactyl-Mega', 'Necrozma-Ultra', 'Tempervian-Mega-Ashen', 'Tauros-Paldea-Combat-Mega', 'Medicham-Mega'
		],
		restricted: [
			'Astral Barrage', 'Belly Drum', 'Chatter', 'Clangorous Soul', 'Dire Claw', 'Double Iron Bash', 'Dragon Energy', 'Electrify', 'Extreme Speed', 'Fillet Away', 'Final Gambit', 'Geomancy', 'Gigaton Hammer', 
			'No Retreat', 'Rage Fist', 'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Thousand Arrows', 'Trick-or-Treat', 'Triple Arrows', 'V-create', 'Victory Dance', 'Spectral Tail', 'Photon Haymaker', 'Endless Torment', 
			'Torch Song', 'Ceaseless Edge', 'Stainless Slash', 'Mountain Gale', 'Aqua Step', 'Soul Anchor', 'Dragon Dance', 'Quiver Dance', 'Population Bomb', 'Primal Rage', 'Storm Throw', 'Altitude', 'Coil', 'Thousand Waves', 
			'Bonemerang', 'Diamond Storm', 'Tail Glow', 'Pumpkin Mash', 'Spectral Thief', 'Spirit Shackle', 'Gear Grind', 'Blue Flare', 'Eruption', 'Magma Storm', 'Mind Blown', 'Sacred Fire', 'Sulphuric Downpour', 'Hydro Steam', 
			'Surging Strikes', 'Water Shuriken', 'Water Spout', 'Chloroblast', 'Flower Trick', 'Bolt Strike', 'Electro Shot', 'Thunderclap', 'Esper Wing', 'Lumina Crash', 'Mystical Power', 'Psycho Boost', 'Psystrike', 'Davy Smash',
			'Stored Power', 'Power Trip', 'Glacial Lance', 'Glaive Rush', 'Tidy Up', 'Fleur Cannon', 'Light of Ruin', 'Celebrate', 'Happy Hour', 'Conversion', 'Cotton Guard', 'Blood Moon', 'Boomburst', 'Jet Punch', 'Rising Voltage',
			'Transform', 'Glare'
		],
	},
	{
		name: "[Gen 9] National Dex Pokebilities AAA",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously, as well as one ability they cannot normally use.`,
		mod: 'pokebilities',
		ruleset: ['Standard NatDex', 'Standard OMs', '!Obtainable Abilities', 'Ability Clause = 1', 'AAA Restricted Abilities', 'Evasion Items Clause', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arcanine-Hisui', 'Arceus', 'Archaludon', 'Azumarill', 'Basculegion', 'Basculin', 'Baxcalibur', 'Blaziken', 'Braviary-Hisui', 'Calyrex-Ice',
			'Calyrex-Shadow', 'Ceruledge', 'Chi-Yu', 'Chien-Pao', 'Cinccino', 'Clefable', 'Cloyster', 'Conkeldurr', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga',
			'Dragapult', 'Dragonite', 'Enamorus-Base', 'Espathra', 'Eternatus', 'Excadrill', 'Flutter Mane', 'Giratina', 'Gouging Fire', 'Groudon', 'Hawlucha', 
			'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Iron Valiant', 'Kingambit', 'Kleavor', 'Koraidon', 'Kyogre', 'Kyurem', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 
			'Manaphy', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Ultra', 'Necrozma-Dusk-Mane', 'Noivern', 'Ogerpon-Hearthflame', 'Palkia', 'Porygon-Z', 
			'Rayquaza', 'Reshiram', 'Reuniclus', 'Roaring Moon', 'Serperior', 'Shaymin-Sky', 'Sneasler', 'Solgaleo', 'Spectrier', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Urshifu', 
			'Volcarona', 'Walking Wake', 'Weavile', 'Yanmega', 'Zacian', 'Zapdos-Galar', 'Zekrom', 'Zoroark-Hisui', 'Arena Trap', 'Magnet Pull', 'Moody', 'Neutralizing Gas',
			'Shadow Tag',

			'Regenerator + Wimp Out', 'Regenerator + Emergency Exit', 'Drizzle + Swift Swim', 'Primordial Sea + Swift Swim', 'Drought + Chlorophyll',
			'Desolate Land + Chlorophyll', 'Electric Surge + Surge Surfer', 'Hadron Engine + Surge Surfer', 'Hadron Engine + Quark Drive', 'Electric Surge + Quark Drive',
			'Drought + Protosynthesis', 'Sand Stream + Sand Rush', 'Sand Stream + Sand Veil', 'Snow Warning + Snow Cloak', 'Snow Warning + Slush Rush',
			'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Revival Blessing', 'Shed Tail', 'Stored Power', 'Protomorphosis + Sand Rush',
			'Neuro Drive + Psychic Surge', 'Neuro Drive + Neuro Engine',
			//ND Bans
			'Alakazam-Mega', 'Blastoise-Mega', 'Blaziken-Mega', 'Caimanrago', 'Cereblaze-Mega', 'Darmanitan-Galar', 'Delphox-Mega', 'Dracovish', 'Forrogue-Mega', 'Frostiken-Mega', 
			'Genesect', 'Greninja-Mega', 'Kangaskhan-Mega', 'Lopunny-Mega', 'Lucario-Mega', 'Marshadow', 'Metagross-Mega', 'Naganadel', 'Pheromosa', 'Raichu-Mega-Y', 'Salamence-Mega',
			'Starmie-Mega', 'Tempervian-Mega', 'Tempervian-Mega-Ashen', 'Xerneas', 'Yveltal', 'Zygarde', 'Shedinja', 'Atlascross', 'As One (Withorde Mega)', 'Corrupted Spirit',
			'Blissey', 'Chansey', 'Celesteela', 'Expanding Force', 'Rising Voltage', 'Xurkitree', 'Ultigigas', 'Plaguekrow', 'Charizard-Mega-Y', 'Victini', 'Froslass-Mega',
			'Swampert-Mega', 'Houndoom-Mega', 'Crystalix-Mega', 'Gengar-Mega', 'Floette-Mega', 'Mawile-Mega', 'Medicham-Mega', 'Lokix', 'Gallade-Mega'
		],
		restricted: [
			'Comatose', 'Contrary', 'Fur Coat', 'Good as Gold', 'Gorilla Tactics', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Magic Bounce', 'Orichalcum Pulse',
			'Parental Bond', 'Poison Heal', 'Pure Power', 'Quick Draw', 'Sand Veil', 'Simple', 'Snow Cloak', 'Speed Boost', 'Stakeout', 'Stench', 'Tinted Lens', 'Toxic Debris', 'Triage',
			'Unburden', 'Water Bubble', 'Wonder Guard', 'Beast Boost', 'Eelevate', 'Mega Sol', 'From Ashes', 'Masquerade', 'Scorn', 'Pure Flux', 'Fire Mane', 'Apex Predator', 'Stampede',
			'Spicy Spray', 'Antarctic Power', 'Corrosion'
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const setAbilityID = this.toID(set.ability);
			const availableAbilityIDs = new Set<string>();
			for (const abilityName of Object.keys(species.abilities)
				.filter(key => key !== 'S' && (key !== 'H' || !species.unreleasedHidden))
				.map(key => species.abilities[key as "0" | "1" | "H" | "S"])) {
				if (!abilityName) continue;
				availableAbilityIDs.add(this.toID(abilityName));
			}
			if (setAbilityID) availableAbilityIDs.add(setAbilityID);

			const unSeenAbilities = Object.keys(species.abilities)
				.filter(key => key !== 'S' && (key !== 'H' || !species.unreleasedHidden))
				.map(key => species.abilities[key as "0" | "1" | "H" | "S"])
				.filter(ability => ability !== set.ability);
			if (unSeenAbilities.length && setAbilityID !== this.toID(species.abilities['S'])) {
				for (const abilityName of unSeenAbilities) {
					const banReason = this.ruleTable.check('ability:' + this.toID(abilityName));
					if (banReason) {
						return [`${set.name}'s ability ${abilityName} is ${banReason}.`];
					}
				}
			}

			const comboBans = [
				'Regenerator + Wimp Out', 'Regenerator + Emergency Exit', 'Drizzle + Swift Swim', 'Primordial Sea + Swift Swim', 'Drought + Chlorophyll',
				'Desolate Land + Chlorophyll', 'Electric Surge + Surge Surfer', 'Hadron Engine + Surge Surfer', 'Hadron Engine + Quark Drive', 'Electric Surge + Quark Drive',
				'Drought + Protosynthesis', 'Sand Stream + Sand Rush', 'Sand Stream + Sand Veil', 'Snow Warning + Snow Cloak', 'Snow Warning + Slush Rush',
				'Protomorphosis + Sand Rush', 'Neuro Drive + Psychic Surge', 'Neuro Drive + Neuro Engine',
			];
			for (const banEntry of comboBans) {
				if (!banEntry.includes('+') && !banEntry.includes('>')) continue;
				if (banEntry.includes('+')) {
					const [firstAbility, secondAbility] = banEntry.split('+').map((part: string) => this.toID(part.trim()));
					if (firstAbility && secondAbility && availableAbilityIDs.has(firstAbility) && availableAbilityIDs.has(secondAbility)) {
						return [`${set.name}'s ability combination ${banEntry} is banned.`];
					}
					continue;
				}
				const [abilityName, thresholdText] = banEntry.split('>').map((part: string) => part.trim());
				const abilityID = this.toID(abilityName);
				const threshold = Number(thresholdText);
				if (abilityID && availableAbilityIDs.has(abilityID) && !Number.isNaN(threshold)) {
					const abilityCount = Array.from(availableAbilityIDs).filter(id => id === abilityID).length;
					if (abilityCount > threshold) {
						return [`${set.name}'s ability combination ${banEntry} is banned.`];
					}
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.aaaAbility = pokemon.ability;
			
				if (pokemon.ability === this.toID(pokemon.species.abilities['S'])) {
					continue;
				}
			
				pokemon.m.innates = Object.keys(pokemon.species.abilities)
					.filter(key => key !== 'S' && (key !== 'H' || !pokemon.species.unreleasedHidden))
					.map(key => this.toID(pokemon.species.abilities[key as "0" | "1" | "H" | "S"]))
					.filter(ability => ability !== pokemon.ability);
			}
		},
		onBeforeSwitchIn(pokemon) {
			// Abilities that must be applied before both sides trigger onSwitchIn to correctly
			// handle switch-in ability-to-ability interactions, e.g. Intimidate counters
			const neededBeforeSwitchInIDs = [
				'clearbody', 'competitive', 'contrary', 'defiant', 'fullmetalbody', 'hypercutter', 'innerfocus',
				'mirrorarmor', 'oblivious', 'owntempo', 'rattled', 'scrappy', 'simple', 'whitesmoke',
			];
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					if (!neededBeforeSwitchInIDs.includes(innate)) continue;
					if (pokemon.hasAbility(innate)) continue;
					pokemon.addVolatile("ability:" + innate, pokemon);
				}
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					if (pokemon.hasAbility(innate)) continue;
					pokemon.addVolatile("ability:" + innate, pokemon);
				}
			}
		},
		onSwitchOut(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
		},
		onFaint(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				const innateEffect = this.dex.conditions.get(innate) as Effect;
				this.singleEvent('End', innateEffect, null, pokemon);
			}
		},
		onAfterMega(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
		
			const megaSpecies = pokemon.species;
			const baseSpecies = megaSpecies.baseSpecies
				? this.dex.species.get(megaSpecies.baseSpecies)
				: megaSpecies;
		
			const innates: string[] = [];
			const seen = new Set<string>();
		
			if (pokemon.m.aaaAbility) {
				const aaaAbility = this.toID(pokemon.m.aaaAbility);

				if (aaaAbility !== pokemon.ability && !seen.has(aaaAbility)) {
					seen.add(aaaAbility);
					innates.push(aaaAbility);
				}
			}
		
			for (const key of Object.keys(baseSpecies.abilities)
				.filter(key => key !== 'S' && (key !== 'H' || !baseSpecies.unreleasedHidden))) {
				
				const ability = baseSpecies.abilities[key as "0" | "1" | "H" | "S"];
				if (!ability) continue;
				
				const id = this.toID(ability);
				if (id === pokemon.ability || seen.has(id)) continue;
				
				seen.add(id);
				innates.push(id);
			}
		
			for (const key of Object.keys(megaSpecies.abilities)
				.filter(key => key !== 'S' && (key !== 'H' || !megaSpecies.unreleasedHidden))) {
				
				const ability = megaSpecies.abilities[key as "0" | "1" | "H" | "S"];
				if (!ability) continue;
				
				const id = this.toID(ability);
				if (id === pokemon.ability || seen.has(id)) continue;
				
				seen.add(id);
				innates.push(id);
			}
		
			pokemon.m.innates = innates;
		
			for (const innate of innates) {
				if (!pokemon.hasAbility(innate)) {
					pokemon.addVolatile('ability:' + innate, pokemon);
				}
			}
		},
	},
	{
		name: "[Gen 9] National Dex Pokebilities STAAABonusMons",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously, as well as one ability they cannot normally use.`,
		mod: 'pokebilities',
		ruleset: ['Standard NatDex', 'Standard OMs', '!Obtainable Abilities', 'Ability Clause = 2', 'AAA Restricted Abilities', 'Evasion Items Clause', 'Sleep Moves Clause', 'Terastal Clause', 'Bonus Type Mod', 'STABmons Move Legality',],
		banlist: [
			"ND Uber", "ND AG", "Arena Trap", "Moody", "Power Construct", "Shadow Tag", "Assist", 'Regenerator + Wimp Out', 'Regenerator + Emergency Exit', 'Drizzle + Swift Swim', 'Primordial Sea + Swift Swim', 
			'Drought + Chlorophyll', 'Desolate Land + Chlorophyll', 'Electric Surge + Surge Surfer', 'Hadron Engine + Surge Surfer', 'Hadron Engine + Quark Drive', 'Electric Surge + Quark Drive', 'Drought + Protosynthesis', 
			'Sand Stream + Sand Rush', 'Sand Stream + Sand Veil', 'Snow Warning + Snow Cloak', 'Snow Warning + Slush Rush', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass', 'Last Respects', 
			'Revival Blessing', 'Shed Tail', 'Stored Power', 'Protomorphosis + Sand Rush', 'Neuro Drive + Psychic Surge', 'Neuro Drive + Neuro Engine', 'Expanding Force', 'Rising Voltage', 'Power Trip',

			'Lokix', 'Fishious Rend', 'Bolt Beak', 'Wicked Blow', 'Wicked Torque', 'Tricky Reception', 'Atlascross', 'Rage Fist', 'Charizard-Mega-Y', 'Swampert-Mega', 'Shedinja', 'Alakazam', 'Houndoom-Mega', 'Ursaluna', 'Excadrill-Mega',
			'Raichu-Mega-X', 'Clefable-Mega', 'Froslass-Mega', 'Typhtesla-Mega', 'Sharpedo-Mega', 'Mawile-Mega', 'Medicham-Mega', 'Kartana', 'Zamazenta', 'Aerodactyl-Mega', 'Ceruledge', 'Manaphy', 'Ultigigas', 'Scolipede-Mega',
			'Kommo-o'
		],
		restricted: [
			'Comatose', 'Contrary', 'Fur Coat', 'Good as Gold', 'Gorilla Tactics', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Magic Bounce', 'Orichalcum Pulse', 'Parental Bond', 
			'Poison Heal', 'Pure Power', 'Quick Draw', 'Sand Veil', 'Simple', 'Snow Cloak', 'Speed Boost', 'Stakeout', 'Stench', 'Tinted Lens', 'Toxic Debris', 'Triage', 'Unburden', 'Water Bubble', 
			'Wonder Guard', 'Beast Boost', 'Eelevate', 'Mega Sol', 'From Ashes', 'Masquerade', 'Scorn', 'Pure Flux', 'Fire Mane', 'Apex Predator', 'Stampede', 'Spicy Spray', 'Antarctic Power', 'Corrosion',

			'Astral Barrage', 'Belly Drum', 'Chatter', 'Clangorous Soul', 'Dire Claw', 'Double Iron Bash', 'Dragon Energy', 'Electrify', 'Extreme Speed', 'Fillet Away', 'Final Gambit', 'Geomancy', 
			'Gigaton Hammer', 'No Retreat', 'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Thousand Arrows', 'Trick-or-Treat', 'Triple Arrows', 'V-create', 'Victory Dance', 'Spectral Tail', 
			'Photon Haymaker', 'Endless Torment', 'Torch Song', 'Ceaseless Edge', 'Stainless Slash', 'Mountain Gale', 'Aqua Step', 'Soul Anchor', 'Dragon Dance', 'Quiver Dance', 'Population Bomb', 
			'Primal Rage', 'Storm Throw', 'Altitude', 'Coil', 'Thousand Waves', 'Diamond Storm', 'Tail Glow', 'Pumpkin Mash', 'Spectral Thief', 'Spirit Shackle', 'Gear Grind', 'Blue Flare', 'Eruption', 
			'Magma Storm', 'Mind Blown', 'Sacred Fire', 'Sulphuric Downpour', 'Hydro Steam', 'Surging Strikes', 'Water Shuriken', 'Water Spout', 'Chloroblast', 'Flower Trick', 'Bolt Strike', 'Electro Shot', 
			'Thunderclap', 'Esper Wing', 'Lumina Crash', 'Mystical Power', 'Psycho Boost', 'Davy Smash', 'Stored Power', 'Glacial Lance', 'Glaive Rush', 'Tidy Up', 'Fleur Cannon', 'Light of Ruin', 'Celebrate', 
			'Happy Hour', 'Conversion', 'Cotton Guard', 'Blood Moon', 'Boomburst', 'Jet Punch', 'Rising Voltage', 'Transform', 'Glare', 'Magic Guard', 'Serene Grace',
		],
		unbanlist: ['Dracovish', 'Espathra', 'Urshifu-Base', 'Annihilape', 'Deoxys-Speed', 'Magearna', 'Ogerpon-Hearthflame', 'Walking Wake', 'Greninja-Mega', 'Delphox-Mega', 'Palafin'],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const setAbilityID = this.toID(set.ability);
			const availableAbilityIDs = new Set<string>();
			for (const abilityName of Object.keys(species.abilities)
				.filter(key => key !== 'S' && (key !== 'H' || !species.unreleasedHidden))
				.map(key => species.abilities[key as "0" | "1" | "H" | "S"])) {
				if (!abilityName) continue;
				availableAbilityIDs.add(this.toID(abilityName));
			}
			if (setAbilityID) availableAbilityIDs.add(setAbilityID);
			const unSeenAbilities = Object.keys(species.abilities)
				.filter(key => key !== 'S' && (key !== 'H' || !species.unreleasedHidden))
				.map(key => species.abilities[key as "0" | "1" | "H" | "S"])
				.filter(ability => ability !== set.ability);
			if (unSeenAbilities.length && setAbilityID !== this.toID(species.abilities['S'])) {
				for (const abilityName of unSeenAbilities) {
					const banReason = this.ruleTable.check('ability:' + this.toID(abilityName));
					if (banReason) {
						return [`${set.name}'s ability ${abilityName} is ${banReason}.`];
					}
				}
			}
			const comboBans = [
				'Regenerator + Wimp Out', 'Regenerator + Emergency Exit', 'Drizzle + Swift Swim', 'Primordial Sea + Swift Swim', 'Drought + Chlorophyll',
				'Desolate Land + Chlorophyll', 'Electric Surge + Surge Surfer', 'Hadron Engine + Surge Surfer', 'Hadron Engine + Quark Drive', 'Electric Surge + Quark Drive',
				'Drought + Protosynthesis', 'Sand Stream + Sand Rush', 'Sand Stream + Sand Veil', 'Snow Warning + Snow Cloak', 'Snow Warning + Slush Rush',
				'Protomorphosis + Sand Rush', 'Neuro Drive + Psychic Surge', 'Neuro Drive + Neuro Engine',
			];
			for (const banEntry of comboBans) {
				if (!banEntry.includes('+') && !banEntry.includes('>')) continue;
				if (banEntry.includes('+')) {
					const [firstAbility, secondAbility] = banEntry.split('+').map((part: string) => this.toID(part.trim()));
					if (firstAbility && secondAbility && availableAbilityIDs.has(firstAbility) && availableAbilityIDs.has(secondAbility)) {
						return [`${set.name}'s ability combination ${banEntry} is banned.`];
					}
					continue;
				}
				const [abilityName, thresholdText] = banEntry.split('>').map((part: string) => part.trim());
				const abilityID = this.toID(abilityName);
				const threshold = Number(thresholdText);
				if (abilityID && availableAbilityIDs.has(abilityID) && !Number.isNaN(threshold)) {
					const abilityCount = Array.from(availableAbilityIDs).filter(id => id === abilityID).length;
					if (abilityCount > threshold) {
						return [`${set.name}'s ability combination ${banEntry} is banned.`];
					}
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.aaaAbility = pokemon.ability;
			
				if (pokemon.ability === this.toID(pokemon.species.abilities['S'])) {
					continue;
				}
			
				pokemon.m.innates = Object.keys(pokemon.species.abilities)
					.filter(key => key !== 'S' && (key !== 'H' || !pokemon.species.unreleasedHidden))
					.map(key => this.toID(pokemon.species.abilities[key as "0" | "1" | "H" | "S"]))
					.filter(ability => ability !== pokemon.ability);
			}
		},
		onBeforeSwitchIn(pokemon) {
			// Abilities that must be applied before both sides trigger onSwitchIn to correctly
			// handle switch-in ability-to-ability interactions, e.g. Intimidate counters
			const neededBeforeSwitchInIDs = [
				'clearbody', 'competitive', 'contrary', 'defiant', 'fullmetalbody', 'hypercutter', 'innerfocus',
				'mirrorarmor', 'oblivious', 'owntempo', 'rattled', 'scrappy', 'simple', 'whitesmoke',
			];
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					if (!neededBeforeSwitchInIDs.includes(innate)) continue;
					if (pokemon.hasAbility(innate)) continue;
					pokemon.addVolatile("ability:" + innate, pokemon);
				}
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					if (pokemon.hasAbility(innate)) continue;
					pokemon.addVolatile("ability:" + innate, pokemon);
				}
			}
		},
		onSwitchOut(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
		},
		onFaint(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				const innateEffect = this.dex.conditions.get(innate) as Effect;
				this.singleEvent('End', innateEffect, null, pokemon);
			}
		},
		onAfterMega(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
		
			const megaSpecies = pokemon.species;
			const baseSpecies = megaSpecies.baseSpecies
				? this.dex.species.get(megaSpecies.baseSpecies)
				: megaSpecies;
		
			const innates: string[] = [];
			const seen = new Set<string>();
		
			if (pokemon.m.aaaAbility) {
				const aaaAbility = this.toID(pokemon.m.aaaAbility);
				if (aaaAbility !== pokemon.ability && !seen.has(aaaAbility)) {
					seen.add(aaaAbility);
					innates.push(aaaAbility);
				}
			}
		
			for (const key of Object.keys(baseSpecies.abilities)
				.filter(key => key !== 'S' && (key !== 'H' || !baseSpecies.unreleasedHidden))) {
				
				const ability = baseSpecies.abilities[key as "0" | "1" | "H" | "S"];
				if (!ability) continue;
				
				const id = this.toID(ability);
				if (id === pokemon.ability || seen.has(id)) continue;
				
				seen.add(id);
				innates.push(id);
			}
		
			for (const key of Object.keys(megaSpecies.abilities)
				.filter(key => key !== 'S' && (key !== 'H' || !megaSpecies.unreleasedHidden))) {
				
				const ability = megaSpecies.abilities[key as "0" | "1" | "H" | "S"];
				if (!ability) continue;
				
				const id = this.toID(ability);
				if (id === pokemon.ability || seen.has(id)) continue;
				
				seen.add(id);
				innates.push(id);
			}
		
			pokemon.m.innates = innates;
		
			for (const innate of innates) {
				if (!pokemon.hasAbility(innate)) {
					pokemon.addVolatile('ability:' + innate, pokemon);
				}
			}
		},
	},
	{
		name: "[Gen 9] National Dex Test",
		mod: "testformat",
		ruleset: [
			"Standard NatDex", "Baton Pass Stat Trap Clause", "OHKO Clause", "Evasion Clause", "Species Clause", "Sleep Moves Clause", "Terastal Clause",
		],
		banlist: [
			"ND Uber", "ND AG", "Arena Trap", "Moody", "Power Construct", "Shadow Tag", "King's Rock", "Quick Claw", "Razor Fang", "Assist", "Last Respects",
			"Shed Tail",
		],
	},
	{
		name: "[Gen 9] National Dex Frantier Moveshift",
		desc: `Pokémon nicknamed after another Pokémon gain access to that Pokémon's movepool and abilities. + Tier Shift`,
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Standard OMs', '!Nickname Clause', '!Obtainable Abilities', 'Ability Clause = 2', 'Sleep Moves Clause', 'Frantic MovePools', 'Terastal Clause', 'Tier Shift Mod', "Mega Rayquaza Clause"],
		banlist: [
			//Pokemon Bans
			'Arceus', 'Barbaracle-Mega', 'Blaziken-Mega', 'Caimanrago-Mega', 'Cereblaze-Mega', 'Forrogue-Mega', 'Frostiken-Mega', 'Gengar-Mega', 'Kangaskhan-Mega', 'Pidgeot-Mega', 'Salamence-Mega', 'Shaymin-Sky', 'Staraptor-Mega', 
			'Starmie-Mega', 'Tempervian-Mega', 'Xerneas', 'Zacian', 'Zygarde-Complete', 'Marshadow', 'Calyrex-Shadow', 'Deoxys-Attack', 'Groudon-Primal', 'Kyogre-Primal', 'Miraidon', 'Koraidon',
			//Ability Bans
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag',
			//Move Bansd
			'Assist', 'Baton Pass', 'Bolt Beak', 'Fishious Rend', 'Last Respects', 'Rage Fist', 'Shed Tail', 'Expanding Force', 'Rising Voltage',
			//Item Bans
			'Bright Powder', 'King\'s Rock', 'Quick Claw', 'Razor Fang',
			//Combo Bans:d
			'Comatose + Sleep Talk',
		],
		restricted: [
			//Pokemon Restrictions
			'Calyrex-Ice', 'Deoxys-Base', 'Espathra', 'Eternatus', 'Flutter Mane', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre', 'Naganadel', 'Pheromosa', 'Rayquaza', 'Spectrier', 'Yveltal', 'Necrozma-Dusk-Mane', 'Necrozma-Dawn-Wings', 'Atlascross', 
			'Basculegion', 'Blacephalon', 'Cloyster', 'Eeveeon', 'Elysian Dance', 'Enamorus-Base', 'Iron Moth', 'Kartana', 'Klinklang', 'Mew', 'Porygon-Z', 'Regidrago', 'Regieleki', 'Regigigas', 'Serperior', 'Shedinja', 'Slaking', 'Smeargle', 
			'Victini', 'Xurkitree', 'Honchkrow',
			//Ability Restrictions
			'Adaptability', 'Anger Shell', 'Beast Boost', 'Chlorophyll', 'Corrosion', 'Contrary', 'Drizzle', 'Drought', 'Electric Surge', 'Fur Coat', 'Good as Gold', 'Huge Power', 'Ice Scales', 'Imposter', 'Libero', 'Magic Guard', 'Magnet Pull', 
			'Neuro Drive', 'Neutralizing Gas', 'Poison Heal', 'Protean', 'Protomorphosis', 'Protosynthesis', 'Psychic Surge', 'Pure Power', 'Quark Drive', 'Regenerator', 'Sand Rush', 'Sand Stream', 'Serene Grace', 'Sheer Force', 'Simple', 'Slush Rush',
			'Snow Warning', 'Speed Boost', 'Steely Spirit', 'Steelworker', 'Swift Swim', 'Toxic Debris', 'Triage', 'Water Bubble', 'Beads of Ruin', 
			//Move Restrictions
			'Boomburst', 'Ceaseless Edge', 'Celebrate', 'Chloroblast', 'Conversion', 'Electro Shot', 'Eruption', 'Extreme Speed', 'Fillet Away', 'Gear Grind', 'Gigaton Hammer', 'Happy Hour', 'Heal Order', 'Light of Ruin', 'Mystical Power', 
			'No Retreat', 'Population Bomb', 'Power Trip', 'Psycho Boost', 'Quiver Dance', 'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Stainless Slash', 'Stored Power', 'Storm Throw', 'Stone Axe', 'Sulphuric Downpour', 'Tail Glow', 
			'Take Heart', 'Thousand Arrows', 'Thousand Waves', 'Torch Song', 'Tricky Reception', 'Triple Arrows', 'Victory Dance', 'Water Spout', 'Hydro Steam', 'Transform', 'Double Iron Bash',
		],
	},
	{
		name: "[Gen 9] National Dex Fusion STAAABonusMons",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously, as well as one ability they cannot normally use.`,
		mod: 'pokebilities',
		ruleset: ['Standard NatDex', 'Standard OMs', '!Nickname Clause', '!Obtainable Abilities', 'Ability Clause = 2', 'AAA Restricted Abilities', 'Evasion Items Clause', 'Sleep Moves Clause', 'Terastal Clause', 'Bonus Type Mod', 'STABmons Move Legality',
			"Mega Rayquaza Clause",
		],
		banlist: [
			"ND AG", "Arena Trap", "Moody", "Power Construct", "Shadow Tag", "Assist", 'Regenerator + Wimp Out', 'Regenerator + Emergency Exit', 'Drizzle + Swift Swim', 'Primordial Sea + Swift Swim', 
			'Drought + Chlorophyll', 'Desolate Land + Chlorophyll', 'Electric Surge + Surge Surfer', 'Hadron Engine + Surge Surfer', 'Hadron Engine + Quark Drive', 'Electric Surge + Quark Drive', 'Drought + Protosynthesis', 
			'Sand Stream + Sand Rush', 'Snow Warning + Slush Rush', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass', 'Last Respects', 
			'Revival Blessing', 'Shed Tail', 'Stored Power', 'Protomorphosis + Sand Rush', 'Neuro Drive + Psychic Surge', 'Neuro Drive + Neuro Engine', 'Expanding Force', 'Rising Voltage', 'Power Trip',
			'Fishious Rend', 'Bolt Beak', 'Wicked Torque', 'Tricky Reception', 'Huge Power', 'Rage Fist', 'Ditto', 'Shedinja', 'Magic Guard', 'Sheer Force', 'Pure Power',
			'Comatose', 'Contrary', 'Fur Coat', 'Good as Gold', 'Gorilla Tactics', 'Ice Scales', 'Illusion', 'Innards Out', 'Magic Bounce', 'Orichalcum Pulse',
			'Poison Heal', 'Quick Draw', 'Sand Veil', 'Simple', 'Snow Cloak', 'Speed Boost', 'Stakeout', 'Stench', 'Tinted Lens', 'Toxic Debris', 'Triage', 'Unburden', 'Water Bubble', 
			'Beast Boost', 'Corrosion', 'Serene Grace', 
			'excalibird', 'excalihawk', 'faeowulf', 'skewrpion', 'emberolith', 'galviathan', 'frostirichu', 
			'megalanice', 'lapragon', 'residreigon', 'melmortar', 'kiluegon', 'weavolt'
		],
		restricted: [
			'Astral Barrage', 'Belly Drum', 'Chatter', 'Clangorous Soul', 'Dire Claw', 'Double Iron Bash', 'Dragon Energy', 'Electrify', 'Extreme Speed', 'Fillet Away', 'Final Gambit', 'Geomancy', 
			'Gigaton Hammer', 'No Retreat', 'Shell Smash', 'Shift Gear', 'Thousand Arrows', 'Trick-or-Treat', 'Triple Arrows', 'V-create', 'Victory Dance', 'Spectral Tail', 
			'Photon Haymaker', 'Endless Torment', 'Torch Song', 'Ceaseless Edge', 'Stainless Slash', 'Mountain Gale', 'Aqua Step', 'Soul Anchor', 'Dragon Dance', 'Quiver Dance', 'Population Bomb', 
			'Primal Rage', 'Storm Throw', 'Altitude', 'Coil', 'Thousand Waves', 'Diamond Storm', 'Tail Glow', 'Pumpkin Mash', 'Spectral Thief', 'Spirit Shackle', 'Gear Grind', 'Blue Flare', 'Eruption', 
			'Magma Storm', 'Mind Blown', 'Sacred Fire', 'Sulphuric Downpour', 'Hydro Steam', 'Surging Strikes', 'Water Shuriken', 'Water Spout', 'Chloroblast', 'Flower Trick', 'Bolt Strike', 'Electro Shot', 
			'Thunderclap', 'Esper Wing', 'Lumina Crash', 'Mystical Power', 'Psycho Boost', 'Davy Smash', 'Glacial Lance', 'Glaive Rush', 'Tidy Up', 'Fleur Cannon', 'Light of Ruin', 'Celebrate', 
			'Happy Hour', 'Conversion', 'Cotton Guard', 'Blood Moon', 'Boomburst', 'Jet Punch', 'Transform', 'Glare', 'Wicked Blow',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const setAbilityID = this.toID(set.ability);
			const availableAbilityIDs = new Set<string>();
			const allAbilityNames: string[] = [];
			const addAbilitiesFromSpecies = (targetSpecies: any) => {
				for (const abilityName of Object.keys(targetSpecies.abilities)
					.filter(key => key !== 'S' && (key !== 'H' || !targetSpecies.unreleasedHidden))
					.map(key => targetSpecies.abilities[key as "0" | "1" | "H" | "S"])) {
					if (!abilityName) continue;
					availableAbilityIDs.add(this.toID(abilityName));
					allAbilityNames.push(abilityName);
				}
			};
			addAbilitiesFromSpecies(species);
			const namedSpecies = set.name && set.name !== set.species
				? this.dex.species.get(set.name)
				: null;
			if (namedSpecies && namedSpecies.exists && namedSpecies.id !== species.id) {
				addAbilitiesFromSpecies(namedSpecies);
			}
			if (setAbilityID) availableAbilityIDs.add(setAbilityID);
			const unSeenAbilities = allAbilityNames.filter(ability => ability !== set.ability);
			if (unSeenAbilities.length && setAbilityID !== this.toID(species.abilities['S'])) {
				for (const abilityName of unSeenAbilities) {
					const banReason = this.ruleTable.check('ability:' + this.toID(abilityName));
					if (banReason) {
						return [`${set.name}'s ability ${abilityName} is ${banReason}.`];
					}
				}
			}
			const comboBans = [
				'Regenerator + Wimp Out', 'Regenerator + Emergency Exit', 'Drizzle + Swift Swim', 'Primordial Sea + Swift Swim', 'Drought + Chlorophyll',
				'Desolate Land + Chlorophyll', 'Electric Surge + Surge Surfer', 'Hadron Engine + Surge Surfer', 'Hadron Engine + Quark Drive', 'Electric Surge + Quark Drive',
				'Drought + Protosynthesis', 'Sand Stream + Sand Rush', 'Snow Warning + Slush Rush',
				'Protomorphosis + Sand Rush', 'Neuro Drive + Psychic Surge', 'Neuro Drive + Neuro Engine',
			];
			for (const banEntry of comboBans) {
				if (!banEntry.includes('+') && !banEntry.includes('>')) continue;
				if (banEntry.includes('+')) {
					const [firstAbility, secondAbility] = banEntry.split('+').map((part: string) => this.toID(part.trim()));
					if (firstAbility && secondAbility && availableAbilityIDs.has(firstAbility) && availableAbilityIDs.has(secondAbility)) {
						return [`${set.name}'s ability combination ${banEntry} is banned.`];
					}
					continue;
				}
				const [abilityName, thresholdText] = banEntry.split('>').map((part: string) => part.trim());
				const abilityID = this.toID(abilityName);
				const threshold = Number(thresholdText);
				if (abilityID && availableAbilityIDs.has(abilityID) && !Number.isNaN(threshold)) {
					const abilityCount = Array.from(availableAbilityIDs).filter(id => id === abilityID).length;
					if (abilityCount > threshold) {
						return [`${set.name}'s ability combination ${banEntry} is banned.`];
					}
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.aaaAbility = pokemon.ability;
			
				if (pokemon.ability === this.toID(pokemon.species.abilities['S'])) {
					continue;
				}
			
				const innates = new Set<string>();
				const addAbilitiesFromSpecies = (targetSpecies: any) => {
					for (const key of Object.keys(targetSpecies.abilities)
						.filter(key => key !== 'S' && (key !== 'H' || !targetSpecies.unreleasedHidden))) {
						const ability = this.toID(targetSpecies.abilities[key as "0" | "1" | "H" | "S"]);
						if (!ability || ability === pokemon.ability || innates.has(ability)) continue;
						innates.add(ability);
					}
				};
			
				addAbilitiesFromSpecies(pokemon.species);
				const namedSpecies = pokemon.name && pokemon.name !== pokemon.species.name
					? this.dex.species.get(pokemon.name)
					: null;
				if (namedSpecies && namedSpecies.exists && namedSpecies.id !== pokemon.species.id) {
					addAbilitiesFromSpecies(namedSpecies);
				}
			
				pokemon.m.innates = Array.from(innates);
			}
		},
		onBeforeSwitchIn(pokemon) {
			const neededBeforeSwitchInIDs = [
				'clearbody', 'competitive', 'contrary', 'defiant', 'fullmetalbody', 'hypercutter', 'innerfocus',
				'mirrorarmor', 'oblivious', 'owntempo', 'rattled', 'scrappy', 'simple', 'whitesmoke',
			];
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					if (!neededBeforeSwitchInIDs.includes(innate)) continue;
					if (pokemon.hasAbility(innate)) continue;
					pokemon.addVolatile("ability:" + innate, pokemon);
				}
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					if (pokemon.hasAbility(innate)) continue;
					pokemon.addVolatile("ability:" + innate, pokemon);
				}
			}
		},
		onSwitchOut(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
		},
		onFaint(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				const innateEffect = this.dex.conditions.get(innate) as Effect;
				this.singleEvent('End', innateEffect, null, pokemon);
			}
		},
		onAfterMega(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
		
			const megaSpecies = pokemon.species;
			const baseSpecies = megaSpecies.baseSpecies
				? this.dex.species.get(megaSpecies.baseSpecies)
				: megaSpecies;
		
			const innates: string[] = [];
			const seen = new Set<string>();
			const addAbilitiesFromSpecies = (targetSpecies: any) => {
				for (const key of Object.keys(targetSpecies.abilities)
					.filter(key => key !== 'S' && (key !== 'H' || !targetSpecies.unreleasedHidden))) {
					const ability = targetSpecies.abilities[key as "0" | "1" | "H" | "S"];
					if (!ability) continue;
					const id = this.toID(ability);
					if (id === pokemon.ability || seen.has(id)) continue;
					seen.add(id);
					innates.push(id);
				}
			};
		
			if (pokemon.m.aaaAbility) {
				const aaaAbility = this.toID(pokemon.m.aaaAbility);
				if (aaaAbility !== pokemon.ability && !seen.has(aaaAbility)) {
					seen.add(aaaAbility);
					innates.push(aaaAbility);
				}
			}
		
			addAbilitiesFromSpecies(baseSpecies);
			addAbilitiesFromSpecies(megaSpecies);
			const namedSpecies = pokemon.name && pokemon.name !== pokemon.species.name
				? this.dex.species.get(pokemon.name)
				: null;
			if (namedSpecies && namedSpecies.exists && namedSpecies.id !== pokemon.species.id) {
				addAbilitiesFromSpecies(namedSpecies);
			}
		
			pokemon.m.innates = innates;
		
			for (const innate of innates) {
				if (!pokemon.hasAbility(innate)) {
					pokemon.addVolatile('ability:' + innate, pokemon);
				}
			}
		},
	}
	//{
	//	name: "[Gen 9] National Dex Custom Game",
	//	mod: 'gen9',
	//	searchShow: false,
	//	debug: true,
	//	battle: { trunc: Math.trunc },
	//	// no restrictions, for serious (other than team preview)
	//	ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	//}
];
