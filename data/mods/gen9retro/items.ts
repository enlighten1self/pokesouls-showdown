export const Items: {[k: string]: ModdedItemData} = {
	adamantorb: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && user.species.name === 'Dialga' && (move.type === 'Steel' || move.type === 'Dragon')) {
				return this.chainModify(1.2);
			}
		},
	},
	aguavberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 8);
			if (pokemon.getNature().minus === 'spd') {
				pokemon.addVolatile('confusion');
			}
		},
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		naturalGift: {
			basePower: 60,
			type: "Dragon",
		},
	},
	apicotberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4) {
				pokemon.eatItem();
			}
		},
		naturalGift: {
			basePower: 80,
			type: "Ground",
		},
	},
	aspearberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Ice",
		},
	},
	babiriberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Steel",
		},
	},
	belueberry: {
		inherit: true,
		naturalGift: {
			basePower: 80,
			type: "Electric",
		},
	},
	berryjuice: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				if (this.runEvent('TryHeal', pokemon, null, this.effect, 20) && pokemon.useItem()) {
					this.heal(20);
				}
			}
		},
	},
	bigroot: {
		inherit: true,
		onTryHeal(damage, target, source, effect) {
			const heals = ['drain', 'leechseed', 'ingrain', 'aquaring'];
			if (heals.includes(effect.id)) {
				return Math.floor(damage * 1.3);
			}
		},
	},
	blackbelt: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Fighting') {
				return this.chainModify(1.1);
			}
		},
	},
	blackglasses: {
		inherit: true,
		onBasePower() {},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Dark') {
				return this.chainModify(1.1);
			}
		},
	},
	blacksludge: {
		inherit: true,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
	},
	blukberry: {
		inherit: true,
		naturalGift: {
			basePower: 70,
			type: "Fire",
		},
	},
	brightpowder: {
		inherit: true,
		onModifyAccuracyPriority: 5,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('brightpowder - decreasing accuracy');
			return accuracy * 0.9;
		},
	},
	buggem: {
		inherit: true,
		isNonstandard: null,
	},
	charcoal: {
		inherit: true,
		onBasePower() {},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Fire') {
				return this.chainModify(1.1);
			}
		},
	},
	chartiberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Rock",
		},
	},
	cheriberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Fire",
		},
	},
	chestoberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Water",
		},
	},
	chilanberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Normal",
		},
	},
	choiceband: {
		inherit: true,
		onStart() {},
		onModifyMove() {},
		onAfterMove(pokemon) {
			pokemon.addVolatile('choicelock');
		},
	},
	choicescarf: {
		inherit: true,
		onStart() {},
		onModifyMove() {},
		onAfterMove(pokemon) {
			pokemon.addVolatile('choicelock');
		},
	},
	choicespecs: {
		inherit: true,
		onStart() {},
		onModifyMove() {},
		onAfterMove(pokemon) {
			pokemon.addVolatile('choicelock');
		},
	},
	chopleberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Fighting",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.causedCrashDamage) return damage;
			if (move.type === 'Fighting' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'];
				if (hitSub) return;
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
	},
	cobaberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Flying",
		},
	},
	colburberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Dark",
		},
	},
	cornnberry: {
		inherit: true,
		naturalGift: {
			basePower: 70,
			type: "Bug",
		},
	},
	custapberry: {
		inherit: true,
		naturalGift: {
			basePower: 80,
			type: "Ghost",
		},
		onFractionalPriority() {},
		onBeforeTurn(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 && pokemon.ability === 'gluttony')) {
				const action = this.queue.willMove(pokemon);
				if (!action) return;
				this.queue.insertChoice({
					choice: 'event',
					event: 'Custap',
					priority: action.priority + 0.1,
					pokemon: action.pokemon,
					move: action.move,
					targetLoc: action.targetLoc,
				});
			}
		},
		onCustap(pokemon) {
			const action = this.queue.willMove(pokemon);
			this.debug('custap action: ' + action);
			if (action && pokemon.eatItem()) {
				this.queue.cancelAction(pokemon);
				this.add('-message', "Custap Berry activated.");
				this.runAction(action);
			}
		},
	},
	darkgem: {
		inherit: true,
		isNonstandard: null,
	},
	deepseascale: {
		inherit: true,
		onModifySpD(spd, pokemon) {
			if (pokemon.species.name === 'Clamperl') {
				return this.chainModify(2);
			}
		},
	},
	deepseatooth: {
		inherit: true,
		onModifySpA(spa, pokemon) {
			if (pokemon.species.name === 'Clamperl') {
				return this.chainModify(2);
			}
		},
	},
	dragonfang: {
		inherit: true,
		onBasePower() {},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Dragon') {
				return this.chainModify(1.1);
			}
		},
	},
	dragongem: {
		inherit: true,
		isNonstandard: null,
	},
	durinberry: {
		inherit: true,
		naturalGift: {
			basePower: 80,
			type: "Water",
		},
	},
	electricgem: {
		inherit: true,
		isNonstandard: null,
	},
	enigmaberry: {
		name: "Enigma Berry",
		spritenum: 124,
		isBerry: true,
		num: 208,
		gen: 3,
	},
	flameorb: {
		inherit: true,
		onResidualOrder: 10,
		onResidualSubOrder: 20,
	},
	fightinggem: {
		inherit: true,
		isNonstandard: null,
	},
	figyberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Bug",
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 8);
			if (pokemon.getNature().minus === 'atk') {
				pokemon.addVolatile('confusion');
			}
		},
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
	},
	firegem: {
		inherit: true,
		isNonstandard: null,
	},
	flyinggem: {
		inherit: true,
		isNonstandard: null,
	},
	focussash: {
		inherit: true,
		onDamage() { },
		onTryHit(target, source, move) {
			if (target !== source && target.hp === target.maxhp) {
				target.addVolatile('focussash');
			}
		},
		condition: {
			duration: 1,
			onDamage(damage, target, source, effect) {
				if (effect && effect.effectType === 'Move' && damage >= target.hp) {
					this.effectState.activated = true;
					return target.hp - 1;
				}
			},
			onAfterMoveSecondary(target) {
				if (this.effectState.activated) target.useItem();
				target.removeVolatile('focussash');
			},
		},
	},
	ganlonberry: {
		inherit: true,
		naturalGift: {
			basePower: 80,
			type: "Ice",
		},
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4) {
				pokemon.eatItem();
			}
		},
	},
	ghostgem: {
		inherit: true,
		isNonstandard: null,
	},
	grassgem: {
		inherit: true,
		isNonstandard: null,
	},
	grepaberry: {
		inherit: true,
		naturalGift: {
			basePower: 70,
			type: "Flying",
		},
	},
	griseousorb: {
		inherit: true,
		onTakeItem(item, pokemon, source) {
			if (source?.baseSpecies.num === 487 || pokemon.baseSpecies.num === 487) {
				return false;
			}
			return true;
		},
		forcedForme: "Giratina-Origin",
		itemUser: ["Giratina-Origin"],
		onBasePower(basePower, user, target, move) {
			if (user.species.num === 487 && (move.type === 'Ghost' || move.type === 'Dragon')) {
				return this.chainModify(1.2);
			}
		},
	},
	groundgem: {
		inherit: true,
		isNonstandard: null,
	},
	habanberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Dragon",
		},
	},
	hardstone: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Rock') {
				return this.chainModify(1.1);
			}
		},
	},
	hondewberry: {
		inherit: true,
		naturalGift: {
			basePower: 70,
			type: "Ground",
		},
	},
	iapapaberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Dark",
		},
		onUpdate() {},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 8);
			if (pokemon.getNature().minus === 'def') {
				pokemon.addVolatile('confusion');
			}
		},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
	},
	icegem: {
		inherit: true,
		isNonstandard: null,
	},
	ironball: {
		inherit: true,
		onEffectiveness() {},
	},
	jabocaberry: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (move.category === 'Physical' && !source.hasAbility('magicguard')) {
				if (target.eatItem()) {
					this.damage(source.baseMaxhp / 8, source, target, null, true);
				}
			}
		},
		naturalGift: {
			basePower: 80,
			type: "Dragon",
		},
	},
	kasibberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Ghost",
		},
	},
	kebiaberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Poison",
		},
	},
	kelpsyberry: {
		inherit: true,
		naturalGift: {
			basePower: 70,
			type: "Fighting",
		},
	},
	kingsrock: {
		inherit: true,
		onModifyMove(move) {
			const affectedByKingsRock = [
				'aerialace', 'aeroblast', 'aircutter', 'armthrust', 'barrage', 'beatup', 'bide', 'bind', 'blastburn', 'bonerush', 'bonemerang', 'bounce', 'brickbreak', 'bulletseed', 'clamp', 'cometpunch', 'crabhammer', 'crosschop', 'cut', 'dig', 'dive', 'doublekick', 'doubleslap', 'doubleedge', 'dragonbreath', 'dragonclaw', 'dragonrage', 'drillpeck', 'earthquake', 'eggbomb', 'endeavor', 'eruption', 'explosion', 'extremespeed', 'falseswipe', 'feintattack', 'firespin', 'flail', 'fly', 'frenzyplant', 'frustration', 'furyattack', 'furycutter', 'furyswipes', 'gust', 'hiddenpower', 'highjumpkick', 'hornattack', 'hydrocannon', 'hydropump', 'hyperbeam', 'iceball', 'iciclespear', 'jumpkick', 'karatechop', 'leafblade', 'lowkick', 'machpunch', 'magicalleaf', 'magnitude', 'megakick', 'megapunch', 'megahorn', 'meteormash', 'mudshot', 'muddywater', 'nightshade', 'outrage', 'overheat', 'payday', 'peck', 'petaldance', 'pinmissile', 'poisontail', 'pound', 'psychoboost', 'psywave', 'quickattack', 'rage', 'rapidspin', 'razorleaf', 'razorwind', 'return', 'revenge', 'reversal', 'rockblast', 'rockthrow', 'rollingkick', 'rollout', 'sandtomb', 'scratch', 'seismictoss', 'selfdestruct', 'shadowpunch', 'shockwave', 'signalbeam', 'silverwind', 'skullbash', 'skyattack', 'skyuppercut', 'slam', 'slash', 'snore', 'solarbeam', 'sonicboom', 'spikecannon', 'spitup', 'steelwing', 'strength', 'struggle', 'submission', 'surf', 'swift', 'tackle', 'takedown', 'thrash', 'tickle', 'triplekick', 'twister', 'uproar', 'visegrip', 'vinewhip', 'vitalthrow', 'volttackle', 'watergun', 'waterpulse', 'waterfall', 'weatherball', 'whirlpool', 'wingattack', 'wrap',
			];
			if (affectedByKingsRock.includes(move.id)) {
				if (!move.secondaries) move.secondaries = [];
				move.secondaries.push({
					chance: 10,
					volatileStatus: 'flinch',
				});
			}
		},
	},
	lansatberry: {
		inherit: true,
		naturalGift: {
			basePower: 80,
			type: "Flying",
		},
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4) {
				pokemon.eatItem();
			}
		},
	},
	laxincense: {
		inherit: true,
		onModifyAccuracyPriority: 5,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('lax incense - decreasing accuracy');
			return accuracy * 0.9;
		},
	},
	leftovers: {
		inherit: true,
		onResidualOrder: 10,
		onResidualSubOrder: 4,
	},
	leppaberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Fighting",
		},
	},
	liechiberry: {
		inherit: true,
		naturalGift: {
			basePower: 80,
			type: "Grass",
		},
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4) {
				pokemon.eatItem();
			}
		},
	},
	lifeorb: {
		inherit: true,
		onModifyDamage() {},
		onAfterMoveSecondarySelf() {},
		onBasePower(basePower, user, target) {
			if (!target.volatiles['substitute']) {
				user.addVolatile('lifeorb');
			}
			return basePower;
		},
		onModifyDamagePhase2(damage, source, target, move) {
			if (!move.flags['futuremove']) return damage * 1.3;
		},
		condition: {
			duration: 1,
			onAfterMoveSecondarySelf(source, target, move) {
				if (move && move.effectType === 'Move' && source && source.volatiles['lifeorb']) {
					this.damage(source.baseMaxhp / 10, source, source, this.dex.items.get('lifeorb'));
					source.removeVolatile('lifeorb');
				}
			},
		},
	},
	lightball: {
		inherit: true,
		onModifyAtk() {},
		onModifySpA() {},
		onBasePower(basePower, pokemon) {
			if (pokemon.species.name === 'Pikachu') {
				return this.chainModify(2);
			}
		},
	},
	luckypunch: {
		inherit: true,
		onModifyCritRatio(critRatio, user) {
			if (user.species.name === 'Chansey') {
				return critRatio + 2;
			}
		},
	},
	lumberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Flying",
		},
	},
	lustrousorb: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && user.species.name === 'Palkia' && (move.type === 'Water' || move.type === 'Dragon')) {
				return this.chainModify(1.2);
			}
		},
	},
	magnet: {
		inherit: true,
		onBasePower() {},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Electric') {
				return this.chainModify(1.1);
			}
		},
	},
	magoberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Ghost",
		},
		onUpdate() {},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 8);
			if (pokemon.getNature().minus === 'spe') {
				pokemon.addVolatile('confusion');
			}
		},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
	},
	mail: {
		inherit: true,
		isNonstandard: null,
	},
	magostberry: {
		inherit: true,
		naturalGift: {
			basePower: 70,
			type: "Rock",
		},
	},
	mentalherb: {
		inherit: true,
		fling: {
			basePower: 10,
			effect(pokemon) {
				if (pokemon.removeVolatile('attract')) {
					this.add('-end', pokemon, 'move: Attract', '[from] item: Mental Herb');
				}
			},
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['attract'] && pokemon.useItem()) {
				pokemon.removeVolatile('attract');
				this.add('-end', pokemon, 'move: Attract', '[from] item: Mental Herb');
			}
		},
	},
	metalcoat: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Steel') {
				return this.chainModify(1.1);
			}
		},
	},
	metronome: {
		inherit: true,
		condition: {
			onStart(pokemon) {
				this.effectState.numConsecutive = 0;
				this.effectState.lastMove = '';
			},
			onTryMovePriority: -2,
			onTryMove(pokemon, target, move) {
				if (!pokemon.hasItem('metronome')) {
					pokemon.removeVolatile('metronome');
					return;
				}
				if (this.effectState.lastMove === move.id && pokemon.moveLastTurnResult) {
					this.effectState.numConsecutive++;
				} else {
					this.effectState.numConsecutive = 0;
				}
				this.effectState.lastMove = move.id;
			},
			onModifyDamagePhase2(damage, source, target, move) {
				return damage * (1 + (this.effectState.numConsecutive / 10));
			},
		},
	},
	micleberry: {
		inherit: true,
		naturalGift: {
			basePower: 80,
			type: "Rock",
		},
		condition: {
			duration: 2,
			onSourceModifyAccuracyPriority: 3,
			onSourceModifyAccuracy(accuracy, target, source) {
				this.add('-enditem', source, 'Micle Berry');
				source.removeVolatile('micleberry');
				if (typeof accuracy === 'number') {
					return accuracy * 1.2;
				}
			},
		},
	},
	miracleseed: {
		inherit: true,
		onBasePower() {},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Grass') {
				return this.chainModify(1.1);
			}
		},
	},
	mysticwater: {
		inherit: true,
		onBasePower() {},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Water') {
				return this.chainModify(1.1);
			}
		},
	},
	nanabberry: {
		inherit: true,
		naturalGift: {
			basePower: 70,
			type: "Water",
		},
	},
	nevermeltice: {
		inherit: true,
		onBasePower() {},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Ice') {
				return this.chainModify(1.1);
			}
		},
	},
	nomelberry: {
		inherit: true,
		naturalGift: {
			basePower: 70,
			type: "Dragon",
		},
	},
	occaberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Fire",
		},
	},
	oranberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Poison",
		},
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
	},
	pamtreberry: {
		inherit: true,
		naturalGift: {
			basePower: 70,
			type: "Steel",
		},
	},
	passhoberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Water",
		},
	},
	payapaberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Psychic",
		},
	},
	pechaberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Electric",
		},
	},
	persimberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Ground",
		},
	},
	petayaberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4) {
				pokemon.eatItem();
			}
		},
		naturalGift: {
			basePower: 80,
			type: "Poison",
		},
	},
	pinapberry: {
		inherit: true,
		naturalGift: {
			basePower: 70,
			type: "Grass",
		},
	},
	poisonbarb: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Poison') {
				return this.chainModify(1.1);
			}
		},
	},
	poisongem: {
		inherit: true,
		isNonstandard: null,
	},
	pomegberry: {
		inherit: true,
		naturalGift: {
			basePower: 70,
			type: "Ice",
		},
	},
	psychicgem: {
		inherit: true,
		isNonstandard: null,
	},
	qualotberry: {
		inherit: true,
		naturalGift: {
			basePower: 70,
			type: "Poison",
		},
	},
	quickclaw: {
		inherit: true,
		onFractionalPriority() {},
		// implemented in Pokemon#getActionSpeed()
	},
	rabutaberry: {
		inherit: true,
		naturalGift: {
			basePower: 70,
			type: "Ghost",
		},
	},
	rawstberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Grass",
		},
	},
	razorfang: {
		inherit: true,
		onModifyMove(move) {
			const affectedByRazorFang = [
				'aerialace', 'aeroblast', 'aircutter', 'airslash', 'aquajet', 'aquatail', 'armthrust', 'assurance', 'attackorder', 'aurasphere', 'avalanche', 'barrage', 'beatup', 'bide', 'bind', 'blastburn', 'bonerush', 'bonemerang', 'bounce', 'bravebird', 'brickbreak', 'brine', 'bugbite', 'bulletpunch', 'bulletseed', 'chargebeam', 'clamp', 'closecombat', 'cometpunch', 'crabhammer', 'crosschop', 'crosspoison', 'crushgrip', 'cut', 'darkpulse', 'dig', 'discharge', 'dive', 'doublehit', 'doublekick', 'doubleslap', 'doubleedge', 'dracometeor', 'dragonbreath', 'dragonclaw', 'dragonpulse', 'dragonrage', 'dragonrush', 'drainpunch', 'drillpeck', 'earthpower', 'earthquake', 'eggbomb', 'endeavor', 'eruption', 'explosion', 'extremespeed', 'falseswipe', 'feintattack', 'firefang', 'firespin', 'flail', 'flashcannon', 'fly', 'forcepalm', 'frenzyplant', 'frustration', 'furyattack', 'furycutter', 'furyswipes', 'gigaimpact', 'grassknot', 'gunkshot', 'gust', 'gyroball', 'hammerarm', 'headsmash', 'hiddenpower', 'highjumpkick', 'hornattack', 'hydrocannon', 'hydropump', 'hyperbeam', 'iceball', 'icefang', 'iceshard', 'iciclespear', 'ironhead', 'judgment', 'jumpkick', 'karatechop', 'lastresort', 'lavaplume', 'leafblade', 'leafstorm', 'lowkick', 'machpunch', 'magicalleaf', 'magmastorm', 'magnetbomb', 'magnitude', 'megakick', 'megapunch', 'megahorn', 'meteormash', 'mirrorshot', 'mudbomb', 'mudshot', 'muddywater', 'nightshade', 'nightslash', 'ominouswind', 'outrage', 'overheat', 'payday', 'payback', 'peck', 'petaldance', 'pinmissile', 'pluck', 'poisonjab', 'poisontail', 'pound', 'powergem', 'powerwhip', 'psychoboost', 'psychocut', 'psywave', 'punishment', 'quickattack', 'rage', 'rapidspin', 'razorleaf', 'razorwind', 'return', 'revenge', 'reversal', 'roaroftime', 'rockblast', 'rockclimb', 'rockthrow', 'rockwrecker', 'rollingkick', 'rollout', 'sandtomb', 'scratch', 'seedbomb', 'seedflare', 'seismictoss', 'selfdestruct', 'shadowclaw', 'shadowforce', 'shadowpunch', 'shadowsneak', 'shockwave', 'signalbeam', 'silverwind', 'skullbash', 'skyattack', 'skyuppercut', 'slam', 'slash', 'snore', 'solarbeam', 'sonicboom', 'spacialrend', 'spikecannon', 'spitup', 'steelwing', 'stoneedge', 'strength', 'struggle', 'submission', 'suckerpunch', 'surf', 'swift', 'tackle', 'takedown', 'thrash', 'thunderfang', 'triplekick', 'trumpcard', 'twister', 'uturn', 'uproar', 'vacuumwave', 'visegrip', 'vinewhip', 'vitalthrow', 'volttackle', 'wakeupslap', 'watergun', 'waterpulse', 'waterfall', 'weatherball', 'whirlpool', 'wingattack', 'woodhammer', 'wrap', 'wringout', 'xscissor', 'zenheadbutt',
			];
			if (affectedByRazorFang.includes(move.id)) {
				if (!move.secondaries) move.secondaries = [];
				move.secondaries.push({
					chance: 10,
					volatileStatus: 'flinch',
				});
			}
		},
	},
	razzberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Steel",
		},
	},
	rindoberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Grass",
		},
	},
	rockgem: {
		inherit: true,
		isNonstandard: null,
	},
	rockyhelmet: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				this.damage(source.baseMaxhp / 6, source, target, null, true);
			}
		},
	},
	rowapberry: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (move.category === 'Special' && !source.hasAbility('magicguard')) {
				if (target.eatItem()) {
					this.damage(source.baseMaxhp / 8, source, target, null, true);
				}
			}
		},
		naturalGift: {
			basePower: 80,
			type: "Dark",
		},
	},
	salacberry: {
		inherit: true,
		naturalGift: {
			basePower: 80,
			type: "Fighting",
		},
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4) {
				pokemon.eatItem();
			}
		},
	},
	seaincense: {
		inherit: true,
		onBasePower() {},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Water') {
				return this.chainModify(1.05);
			}
		},
	},
	sharpbeak: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Flying') {
				return this.chainModify(1.1);
			}
		},
	},
	shucaberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Ground",
		},
	},
	silkscarf: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Normal') {
				return this.chainModify(1.1);
			}
		},
	},
	silverpowder: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Bug') {
				return this.chainModify(1.1);
			}
		},
	},
	sitrusberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Psychic",
		},
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(30);
		},
	},
	softsand: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Ground') {
				return this.chainModify(1.1);
			}
		},
	},
	souldew: {
		inherit: true,
		onBasePower() {},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.num === 380 || pokemon.baseSpecies.num === 381) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.num === 380 || pokemon.baseSpecies.num === 381) {
				return this.chainModify(1.5);
			}
		},
	},
	spelonberry: {
		inherit: true,
		naturalGift: {
			basePower: 70,
			type: "Dark",
		},
	},
	spelltag: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Ghost') {
				return this.chainModify(1.1);
			}
		},
	},
	starfberry: {
		inherit: true,
		naturalGift: {
			basePower: 80,
			type: "Psychic",
		},
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4) {
				pokemon.eatItem();
			}
		},
	},
	steelgem: {
		inherit: true,
		isNonstandard: null,
	},
	stick: {
		inherit: true,
		onModifyCritRatio(critRatio, user) {
			if (user.species.id === 'farfetchd') {
				return critRatio + 2;
			}
		},
	},
	stickybarb: {
		inherit: true,
		onResidualOrder: 10,
		onResidualSubOrder: 20,
	},
	tamatoberry: {
		inherit: true,
		naturalGift: {
			basePower: 70,
			type: "Psychic",
		},
	},
	tangaberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Bug",
		},
	},
	thickclub: {
		inherit: true,
		onModifyAtk(atk, pokemon) {
			if (pokemon.species.name === 'Cubone' || pokemon.species.name === 'Marowak') {
				return this.chainModify(2);
			}
		},
	},
	toxicorb: {
		inherit: true,
		onResidualOrder: 10,
		onResidualSubOrder: 20,
	},
	twistedspoon: {
		inherit: true,
		onBasePower() {},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Psychic') {
				return this.chainModify(1.1);
			}
		},
	},
	wacanberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Electric",
		},
	},
	watergem: {
		inherit: true,
		isNonstandard: null,
	},
	watmelberry: {
		inherit: true,
		naturalGift: {
			basePower: 80,
			type: "Fire",
		},
	},
	wepearberry: {
		inherit: true,
		naturalGift: {
			basePower: 70,
			type: "Electric",
		},
	},
	widelens: {
		inherit: true,
		onSourceModifyAccuracyPriority: 4,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy === 'number') {
				return accuracy * 1.1;
			}
		},
	},
	wikiberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Rock",
		},
		onUpdate() {},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 8);
			if (pokemon.getNature().minus === 'spa') {
				pokemon.addVolatile('confusion');
			}
		},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
	},
	yacheberry: {
		inherit: true,
		naturalGift: {
			basePower: 60,
			type: "Ice",
		},
	},
	zoomlens: {
		inherit: true,
		onSourceModifyAccuracyPriority: 4,
		onSourceModifyAccuracy(accuracy, target) {
			if (typeof accuracy === 'number' && !this.queue.willMove(target)) {
				this.debug('Zoom Lens boosting accuracy');
				return accuracy * 1.2;
			}
		},
	},
};
