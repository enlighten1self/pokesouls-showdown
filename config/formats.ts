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
			"Standard NatDex",
			"Baton Pass Stat Trap Clause",
			"OHKO Clause",
			"Evasion Clause",
			"Species Clause",
			"Sleep Moves Clause",
			"Terastal Clause",
		],
		banlist: [
			"ND Uber",
			"ND AG",
			"Arena Trap",
			"Moody",
			"Power Construct",
			"Shadow Tag",
			"King's Rock",
			"Quick Claw",
			"Razor Fang",
			"Assist",
			"Last Respects",
			"Shed Tail",
		],
	},
	{
		name: "[Gen 9] National Dex Ubers",
		mod: "gen9",
		ruleset: [
			"Standard NatDex",
			"Baton Pass Stat Trap Clause",
			"OHKO Clause",
			"Evasion Moves Clause",
			"Evasion Items Clause",
			"Species Clause",
			"Sleep Moves Clause",
			"Mega Rayquaza Clause",
			"Terastal Clause",
		],
		banlist: [
			"ND AG",
			"Assist",
		],
	},
	{
		name: "[Gen 9] National Dex Ubers UU",
		mod: "gen9",
		ruleset: [
			"[Gen 9] National Dex Ubers", "!Sleep Moves Clause", 'Sleep Clause Mod'
		],
		banlist: [
			"Arceus",
			"Marshadow",
			"Calyrex-Ice",
			"Chien-Pao",
			"Deoxys-Attack",
			"Eternatus",
			"Frostikenite",
			"Griseous Core",
			"Red Orb",
			"Ho-Oh",
			"Blue Orb",
			"Necrozma-Dusk-Mane",
			"Ultranecrozium Z",
			"Rayquaza",
			"Salamencite",
			"Xerneas",
			"Yveltal",
			"Kyurem-Black",
			"Rusted Sword",
			"Power Construct",
			"Shadow Tag",
			"King's Rock",
			"Razor Fang",
			"Last Respects",
			"Mewtwonite Y",
			"Caimanragonite",
			"Cereblazite",
			"Tempervianite"
		],
	},
	{
		name: "[Gen 9] National Dex UU",
		mod: "gen9",
		ruleset: ["[Gen 9] National Dex"],
		banlist: [
			"ND OU",
			"ND UUBL",
			"Drizzle"
		],
	},
	{
		name: "[Gen 9] National Dex BU",
		mod: "gen9",
		ruleset: ["[Gen 9] National Dex UU"],
		banlist: ["ND UU", "ND BUBL", "Slowbro-Base + Slowbronite", "Drought"],
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
			"Standard NatDex",
			"Baton Pass Stat Trap Clause",
			"Same Type Clause",
			"Terastal Clause",
			"Species Clause",
			"OHKO Clause",
			"Evasion Clause",
			"Sleep Clause Mod",
		],
		banlist: [
			"Annihilape",
			"Arceus",
			"Baxcalibur",
			"Blastoise-Mega",
			"Blaziken",
			"Blaziken-Mega",
			"Calyrex-Ice",
			"Calyrex-Shadow",
			"Chi-Yu",
			"Chien-Pao",
			"Darkrai",
			"Deoxys-Base",
			"Deoxys-Attack",
			"Dialga",
			"Dracovish",
			"Dragapult",
			"Espathra",
			"Eternatus",
			"Flutter Mane",
			"Frostiken-Mega",
			"Genesect",
			"Gengar-Mega",
			"Giratina",
			"Giratina-Origin",
			"Groudon",
			"Ho-Oh",
			"Hoopa-Unbound",
			"Iron Bundle",
			"Kangaskhan-Mega",
			"Kartana",
			"Kingambit",
			"Koraidon",
			"Kyogre",
			"Kyurem-Black",
			"Kyurem-White",
			"Lucario-Mega",
			"Lugia",
			"Lunala",
			"Magearna",
			"Marshadow",
			"Mawile-Mega",
			"Medicham-Mega",
			"Metagross-Mega",
			"Mewtwo",
			"Miraidon",
			"Naganadel",
			"Necrozma-Dawn-Wings",
			"Necrozma-Dusk-Mane",
			"Ogerpon-Hearthflame",
			"Palafin",
			"Palkia",
			"Pheromosa",
			"Rayquaza",
			"Reshiram",
			"Salamence-Mega",
			"Shaymin-Sky",
			"Solgaleo",
			"Spectrier",
			"Ursaluna-Bloodmoon",
			"Urshifu-Base",
			"Xerneas",
			"Yveltal",
			"Zacian",
			"Zacian-Crowned",
			"Zamazenta",
			"Zamazenta-Crowned",
			"Zekrom",
			"Zygarde-Base",
			"Zygarde-Complete",
			"Moody",
			"Shadow Tag",
			"Power Construct",
			"Booster Energy",
			"Damp Rock",
			"Focus Band",
			"Icy Rock",
			"King's Rock",
			"Leppa Berry",
			"Quick Claw",
			"Razor Fang",
			"Smooth Rock",
			"Terrain Extender",
			"Acupressure",
			"Baton Pass",
			"Last Respects",
			"Shed Tail",
			"Tricky Reception",
			"Caimanrago",
			"Cereblaze-Mega",
			"Forrogue-Mega",
			"Tempervian-Mega",
			"Wyrmperior-Mega",
			"Tempervian-Mega-Ashen"
		],
	},
	{
		name: "[Gen 9] National Dex Doubles",
		mod: "gen9",
		gameType: "doubles",
		ruleset: [
			"Standard NatDex",
			"Baton Pass Stat Trap Clause",
			"OHKO Clause",
			"Evasion Moves Clause",
			"Evasion Abilities Clause",
			"Species Clause",
			"Gravity Sleep Clause",
		],
		banlist: [
			"Annihilape",
			"Arceus",
			"Calyrex-Ice",
			"Calyrex-Shadow",
			"Dialga",
			"Dialga-Origin",
			"Eternatus",
			"Genesect",
			"Gengar-Mega",
			"Giratina",
			"Giratina-Origin",
			"Groudon",
			"Ho-Oh",
			"Koraidon",
			"Kyogre",
			"Kyurem-White",
			"Lugia",
			"Lunala",
			"Magearna",
			"Melmetal",
			"Mewtwo",
			"Miraidon",
			"Necrozma-Dawn-Wings",
			"Necrozma-Dusk-Mane",
			"Palkia",
			"Palkia-Origin",
			"Rayquaza",
			"Reshiram",
			"Shedinja",
			"Solgaleo",
			"Terapagos",
			"Urshifu-Base",
			"Xerneas",
			"Yveltal",
			"Zacian",
			"Zacian-Crowned",
			"Zamazenta-Crowned",
			"Zekrom",
			"Commander",
			"Power Construct",
			"Assist",
			"Coaching",
			"Dark Void",
			"Swagger",
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
			"-Nonexistent",
			"Standard NatDex",
			"Forme Clause",
			"Sleep Moves Clause",
			"Ability Clause = 2",
			"OHKO Clause",
			"Evasion Moves Clause",
			"Dynamax Clause",
			"CFZ Clause",
			"Terastal Clause",
			"!Obtainable",
		],
		banlist: [
			"Cramorant-Gorging",
			"Calyrex-Shadow",
			"Darmanitan-Galar-Zen",
			"Eternatus-Eternamax",
			"Groudon-Primal",
			"Rayquaza-Mega",
			"Shedinja",
			"Arena Trap",
			"Contrary",
			"Gorilla Tactics",
			"Huge Power",
			"Illusion",
			"Innards Out",
			"Magnet Pull",
			"Moody",
			"Neutralizing Gas",
			"Parental Bond",
			"Pure Power",
			"Shadow Tag",
			"Stakeout",
			"Water Bubble",
			"Wonder Guard",
			"Gengarite",
			"Berserk Gene",
			"Belly Drum",
			"Bolt Beak",
			"Chatter",
			"Double Iron Bash",
			"Electrify",
			"Last Respects",
			"Octolock",
			"Rage Fist",
			"Revival Blessing",
			"Shed Tail",
			"Shell Smash",
			"Comatose + Sleep Talk",
			"Imprison + Transform",
		],
		restricted: ["Arceus"],
		onValidateTeam(team, format) {
			// baseSpecies:count
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
		ruleset: ["Standard NatDex", 'Standard OMs', '!Obtainable Abilities', 'Ability Clause = 1', 'Sleep Moves Clause', 'Terastal Clause',],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 
			'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Mewtwo', "Last Respects", "Shed Tail", "Caimanragonite", "Cereblazite", "Forroguite", "Frostikenite", "Tempervianite", 
			"Tricky Reception", "Rising Voltage", "Wyrmperionite", "Speed Boost", "Gorilla Tactics", "Alakazite", "Blastoisinite", "Blazikenite", "Dracovish", "Kangaskhanite", "Lucarionite", "Marshadow", 
			"Necrozma-Dusk-Mane", "Necrozma-Dawn-Wings", "Palkia", "Salamencite", "Shaymin-Sky", "Xerneas", "Yveltal", "Zekrom", "Miraidon", "Zacian", "Rayquaza", "Gengarite", "Shadow Tag", "Power Construct"
		],
		restricted : [
			'Ceruledge', 'Darkrai', 'Dragonite', 'Gouging Fire', 'Hoopa-Unbound', 'Iron Valiant', 'Keldeo', 'Noivern', 'Regigigas', 'Slaking', 'Sneasler', 'Urshifu-Rapid-Strike', 'Volcarona', 
			'Walking Wake', 'Weavile', 'Melmetal', 'Ultigigas', 'Magic Bounce', "Magnet Pull", "Innards Out", "Neutralizing Gas", "Poison Heal", "Simple", "Stakeout", "Toxic Debris", "Triage", "Unburden", 
			"Water Bubble", "Wonder Guard", "Armored Poncho", "Corruption", "Stampede", "Pure Flux", "Antarctic Power", "Huesotops", "Fur Coat", "Good as Gold", 'Comatose', 'Contrary', 'Ice Scales', 'Illusion', 
			'Imposter', 'Huge Power', 'Abyssal Void', 'Iron Bundle', 'Magearna', 'Spectrier', 'Dragapult', "Beast Boost", "Urshifu-Base", 'Solgaleo', 'Kyurem', "Corrupted Spirit", "Eclipse Flare", "Scorn", 
			"Neuro Engine", 'Apex Predator', "As One (Withorde Mega)", "From Ashes", "Masquerade", "Hadron Engine", "Intrepid Sword", "Parental Bond", "Orichalcum Pulse", "Reshiram", "Ursaluna-Bloodmoon", 
			"Baxcalibur", "Naganadel", "Genesect", "Zygarde-Base", "Pheromosa", "Tectonic Shift"
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
		ruleset: ['Standard NatDex', 'Standard OMs', 'STABmons Move Legality', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Araquanid', 'Arceus', 'Azumarill', 'Baxcalibur', 'Blastoise-Mega', 'Blaziken-Mega', 'Basculegion', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao',
			'Cloyster', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack', 'Deoxys-Base', 'Dialga', 'Dialga-Origin', 'Dracovish', 'Dragapult', 'Dragonite', 'Enamorus-Base', 'Espathra',
			'Eternatus', 'Flutter Mane', 'Garchomp', 'Gengar-Mega', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Gouging Fire', 'Ho-Oh', 'Iron Bundle', 'Kangaskhan-Mega',
			'Kartana', 'Koraidon', 'Komala', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lilligant-Hisui', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna',
			'Manaphy', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Naganadel', 'Necrozma-Dusk-Mane', 'Necrozma-Dawn-Wings', 'Ogerpon-Hearthflame', 'Ogerpon-Wellspring', 'Palkia',
			'Palkia-Origin', 'Porygon-Z', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Silvally', 'Solgaleo', 'Spectrier', 'Tapu Koko', 'Tapu Lele', 'Terapagos',
			'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Walking Wake', 'Xerneas', 'Xurkitree', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Zoroark-Hisui',
			'Zygarde-50%', 'Arena Trap', 'Moody', 'Shadow Tag', 'Power Construct', 'Damp Rock', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects',
			'Shed Tail', 'Wicked Blow', 'Wicked Torque', 'Caimanrago-Mega', 'Cereblaze-Mega', 'Forrogue-Mega', 'Frostiken-Mega', 'Tempervianite', 'Huesotops', 
			'Ultigigas', 'Wyrmperior', 'Tricky Reception', 'Stratozone', 'Typhtesla'
		],
		restricted: [
			'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Chatter', 'Clangorous Soul', 'Dire Claw', 'Double Iron Bash', 'Dragon Energy', 'Electrify', 'Extreme Speed', 'Fillet Away', 'Final Gambit', 
			'Fishious Rend', 'Geomancy', 'Gigaton Hammer', 'No Retreat', 'Rage Fist', 'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Thousand Arrows', 'Trick-or-Treat', 'Triple Arrows', 'V-create', 
			'Victory Dance', 'Spectral Tail', 'Davy Smash', 'Photon Haymaker', 'Endless Torment', 'Torch Song', 'Ceaseless Edge', 'Stainless Slash'
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
			'Naganadel', 'Pheromosa', 'Boomkeldurr', 'Arceus', 'Elysian Dance'
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
			'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Comfey', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Deoxys-Speed',
			'Dialga', 'Dialga-Origin', 'Dondozo', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Haxorus', 'Ho-oh', 'Inteleon',
			'Iron Bundle', 'Iron Hands', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lilligant-Hisui', 'Lugia', 'Lunala',
			'Magearna', 'Manaphy', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Palkia', 'Palkia-Origin',
			'Porygon-Z', 'Primarina', 'Rayquaza', 'Regieleki', 'Regigigas', 'Reshiram', 'Roaring Moon', 'Shaymin-Sky', 'Solgaleo', 'Slaking', 'Smeargle', 'Sneasler',
			'Spectrier', 'Umbreon', 'Urshifu-Single-Strike', 'Urshifu-Rapid-Strike', 'Walking Wake', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned',
			'Zekrom', 'Arena Trap', 'Comatose', 'Contrary', 'Drizzle', 'Drought', 'Imposter', 'Moody', 'Pure Power', 'Shadow Tag', 'Speed Boost', 'Unburden',
			'King\'s Rock', 'Light Clay', 'Razor Fang', 'Baton Pass', 'Belly Drum', 'Boomburst', 'Extreme Speed', 'Final Gambit', 'Last Respects', 'Population Bomb',
			'Quiver Dance', 'Rage Fist', 'Shed Tail', 'Shell Smash', 'Transform', 'Assist', 'Xerneas', 'Tempervianite', 'Forroguite', 'Caimanragonite',
			'Tricky Reception', 'Gengarite', 'Alakazite', 'Blastoisinite', 'Blazikenite', 'Cereblazite', 'Frostikenite', 'Kangaskhanite', 'Lucarionite', 'Salamencite',
			'Wyrmperionite', 'Yveltal', 'Darmanitan-Galar', 'Fishious Rend', 'Bolt Beak', 'Victory Dance', 'Geomancy', 'Hydro Steam', 'No Retreat'
		],
	},
	//{
	//	name: "[Gen 9] Custom Game",
	//	mod: 'gen9',
	//	searchShow: false,
	//	debug: true,
	//	battle: {trunc: Math.trunc},
	//	ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	//}
];
