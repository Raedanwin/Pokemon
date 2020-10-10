// $(() => {

    const pokemon = [
        pikachu = {
            name: `Pikachu`,
            health: 48,
            attack: 50,
            speed: 100,
            level: 1,
            type: `electric`,
            experience: 5,
            rarity: 3,
        },
        bulbasaur = {
            name: 'Bulbasaur',
            health: 50,
            attack: 40,
            speed: 50,
            level: 1,
            type: `grass`,
            experience: 5,
            rarity: 4,
        },
        charmander = {
            name: 'Charmander',
            health: 60,
            attack: 60,
            speed: 60,
            level: 1,
            type: `fire`,
            experience: 5,
            rarity: 4,
        },
        squirtle = {
            name: 'Squirtle',
            health: 70,
            attack: 50,
            speed: 40,
            level: 1,
            type: `water`,
            experience: 5,
            rarity: 4,
        },
        eevee = {
            name: 'Eevee',
            health: 50,
            attack: 50,
            speed: 50,
            level: 1,
            type: `normal`,
            experience: 5,
            rarity: 5,
        },

    ]
    
    // base logic that will probably be reused a lot 
    const baseLogic = {
        randomNum: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

    }

    const pickStarter = {
        pickPika: function() {
            if (player.team.length === 1) {
                console.log(`You got a Pikachu!`)
            } else {
                player.team.push(pokemon[0])
                comp.team.push(pokemon[4])
            }
            console.log(player.team)
            console.log(comp.team)
        },
        pickBulb: function() {
            if (player.team.length === 1) {
                console.log(`You got a Bulbasaur!`)
            } else {
                player.team.push(pokemon[1])
                comp.team.push(pokemon[2])
            } 
            console.log(player.team)
            console.log(comp.team)
        },
        pickChar: function() {
            if (player.team.length === 1) {
                console.log(`You got a Charmander!`)
            } else {
                player.team.push(pokemon[2])
                comp.team.push(pokemon[3])
            }
            console.log(player.team)
            console.log(comp.team)
        },
        pickSquirtle: function() {
            if (player.team.length === 1) {
                console.log(`You got a Squirtle!`)
            } else {
                player.team.push(pokemon[3])
                comp.team.push(pokemon[1])
            }
            console.log(player.team[0])
            console.log(comp.team[0])
        }
    }
    
    const player = {
        itemCounter: '',
        team: [],
        caught: [],
        items: [],
        pokeballs: [],
    }

    const comp = {
        team: [],
        items: [],
    }
    const battleLogic = {
        types: [`water`, `fire`, `electric`, `normal`, `dragon`, `fairy`, `grass`, `ground`, `rock`, `ice`, `flying`, `fighting`, `poison`, `psychic`, `bug`, `steel`, `ghost`, `dark`],
        typeFight: function(attacker, defender) {
            if (attacker.team[0].type === `normal` && defender.team[0].type === `rock`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `normal` && defender.team[0].type === `ghost`) {
                console.log(defender.team[0].health -= 0)
            } else if (attacker.team[0].type === `normal` && defender.team[0].type === `steel`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `fire` && defender.team[0].type === `fire`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `fire` && defender.team[0].type === `water`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `fire` && defender.team[0].type === `grass`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `fire` && defender.team[0].type === `ice`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `fire` && defender.team[0].type === `bug`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `fire` && defender.team[0].type === `rock`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `fire` && defender.team[0].type === `dragon`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `fire` && defender.team[0].type === `steel`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `water` && defender.team[0].type === `fire`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `water` && defender.team[0].type === `water`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `water` && defender.team[0].type === `grass`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `water` && defender.team[0].type === `ground`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `water` && defender.team[0].type === `rock`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `water` && defender.team[0].type === `dragon`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `electric` && defender.team[0].type === `water`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `electric` && defender.team[0].type === `electric`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `electric` && defender.team[0].type === `grass`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `electric` && defender.team[0].type === `water`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `electric` && defender.team[0].type === `ground`) {
                console.log(defender.team[0].health -= 0)
            } else if (attacker.team[0].type === `electric` && defender.team[0].type === `flying`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `electric` && defender.team[0].type === `dragon`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `grass` && defender.team[0].type === `fire`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `grass` && defender.team[0].type === `water`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `grass` && defender.team[0].type === `grass`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `grass` && defender.team[0].type === `poison`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `grass` && defender.team[0].type === `ground`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `grass` && defender.team[0].type === `flying`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `grass` && defender.team[0].type === `bug`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `grass` && defender.team[0].type === `rock`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `grass` && defender.team[0].type === `dragon`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `grass` && defender.team[0].type === `steel`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `ice` && defender.team[0].type === `fire`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `ice` && defender.team[0].type === `water`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `ice` && defender.team[0].type === `grass`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `ice` && defender.team[0].type === `ice`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `ice` && defender.team[0].type === `ground`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `ice` && defender.team[0].type === `flying`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `ice` && defender.team[0].type === `dragon`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `ice` && defender.team[0].type === `steel`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `fighting` && defender.team[0].type === `normal`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `fighting` && defender.team[0].type === `ice`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `fighting` && defender.team[0].type === `poison`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `fighting` && defender.team[0].type === `psychic`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `fighting` && defender.team[0].type === `flying`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `fighting` && defender.team[0].type === `bug`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `fighting` && defender.team[0].type === `rock`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `fighting` && defender.team[0].type === `ghost`) {
                console.log(defender.team[0].health -= 0)
            } else if (attacker.team[0].type === `fighting` && defender.team[0].type === `dark`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `fighting` && defender.team[0].type === `steel`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `fighting` && defender.team[0].type === `fairy`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `poison` && defender.team[0].type === `grass`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `poison` && defender.team[0].type === `poison`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `poison` && defender.team[0].type === `ground`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `poison` && defender.team[0].type === `rock`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `poison` && defender.team[0].type === `ghost`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `poison` && defender.team[0].type === `steel`) {
                console.log(defender.team[0].health -= 0)
            } else if (attacker.team[0].type === `poison` && defender.team[0].type === `fairy`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `ground` && defender.team[0].type === `fire`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `ground` && defender.team[0].type === `electric`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `ground` && defender.team[0].type === `grass`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `ground` && defender.team[0].type === `poison`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `ground` && defender.team[0].type === `flying`) {
                console.log(defender.team[0].health -= 0)
            } else if (attacker.team[0].type === `ground` && defender.team[0].type === `bug`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `ground` && defender.team[0].type === `rock`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `ground` && defender.team[0].type === `steel`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `flying` && defender.team[0].type === `electric`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `flying` && defender.team[0].type === `grass`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `flying` && defender.team[0].type === `fighting`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `flying` && defender.team[0].type === `bug`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `flying` && defender.team[0].type === `rock`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `flying` && defender.team[0].type === `steel`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `psychic` && defender.team[0].type === `fighting`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `flying` && defender.team[0].type === `poison`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `flying` && defender.team[0].type === `psychic`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `flying` && defender.team[0].type === `steel`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `flying` && defender.team[0].type === `dark`) {
                console.log(defender.team[0].health -= 0)
            } else if (attacker.team[0].type === `flying` && defender.team[0].type === `steel`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `bug` && defender.team[0].type === `fire`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `bug` && defender.team[0].type === `grass`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `bug` && defender.team[0].type === `fighting`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `bug` && defender.team[0].type === `poison`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `bug` && defender.team[0].type === `flying`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `bug` && defender.team[0].type === `psychic`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `bug` && defender.team[0].type === `ghost`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `bug` && defender.team[0].type === `dark`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `bug` && defender.team[0].type === `steel`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `bug` && defender.team[0].type === `fairy`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `rock` && defender.team[0].type === `fire`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `rock` && defender.team[0].type === `ice`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `rock` && defender.team[0].type === `fighting`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `rock` && defender.team[0].type === `ground`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `rock` && defender.team[0].type === `flying`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `rock` && defender.team[0].type === `bug`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `rock` && defender.team[0].type === `steel`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `ghost` && defender.team[0].type === `normal`) {
                console.log(defender.team[0].health -= 0)
            } else if (attacker.team[0].type === `ghost` && defender.team[0].type === `psychic`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `ghost` && defender.team[0].type === `ghost`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `ghost` && defender.team[0].type === `dark`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `dragon` && defender.team[0].type === `dragon`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `dragon` && defender.team[0].type === `steel`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `dragon` && defender.team[0].type === `fairy`) {
                console.log(defender.team[0].health -= 0)
            } else if (attacker.team[0].type === `dark` && defender.team[0].type === `fighting`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `dark` && defender.team[0].type === `psychic`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `dark` && defender.team[0].type === `ghost`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `dark` && defender.team[0].type === `dark`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `dark` && defender.team[0].type === `fairy`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `steel` && defender.team[0].type === `fire`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `steel` && defender.team[0].type === `water`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `steel` && defender.team[0].type === `electric`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `steel` && defender.team[0].type === `ice`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `steel` && defender.team[0].type === `rock`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `steel` && defender.team[0].type === `steel`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `steel` && defender.team[0].type === `fairy`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `fairy` && defender.team[0].type === `fire`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `fairy` && defender.team[0].type === `fighting`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `fairy` && defender.team[0].type === `poison`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else if (attacker.team[0].type === `fairy` && defender.team[0].type === `dragon`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `fairy` && defender.team[0].type === `dark`) {
                console.log(defender.team[0].health -= attacker.team[0].attack * 2)
            } else if (attacker.team[0].type === `fairy` && defender.team[0].type === `steel`) {
                console.log(defender.team[0].health -= attacker.team[0].attack / 2)
            } else {
                console.log(defender.team[0].health -= attcker.team[0].attack)
            }
        },  
    }

    const catchLogic = {

    }




// })