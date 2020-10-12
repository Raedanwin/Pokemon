$(() => {
    const pokemon = [
        {
            name: `Pikachu`,
            overallHealth: 48,
            health: 48,
            attack: 50,
            speed: 100,
            level: 1,
            type: `electric`,
            experience: 0,
            rarity: 3,
            isFainted: false
        },
        {
            name: 'Bulbasaur',
            overallHealth: 50,
            health: 50,
            attack: 40,
            speed: 50,
            level: 1,
            type: `grass`,
            experience: 0,
            rarity: 4,
            isFainted: false
        },
        {
            name: 'Charmander',
            overallHealth: 60,
            health: 60,
            attack: 60,
            speed: 60,
            level: 1,
            type: `fire`,
            experience: 0,
            rarity: 4,
            isFainted: false
        },
        {
            name: 'Squirtle',
            overallHealth: 70,
            health: 70,
            attack: 50,
            speed: 40,
            level: 1,
            type: `water`,
            experience: 0,
            rarity: 4,
            isFainted: false
        },
        {
            name: 'Eevee',
            overallHealth: 50,
            health: 50,
            attack: 50,
            speed: 50,
            level: 1,
            type: `normal`,
            experience: 0,
            rarity: 5,
            isFainted: false
        },

    ]

    // class that makes items with specific attributes
    class GameItems {
        // health is for potions, strength is for how powerful a pokeball is
        constructor(name, price, health, strength) {
            this.name = name;
            this.price = price;
            this.health = health || 0;
            this.strength = strength || 0;
        }

        increaseLevel() {
            player.team[0].experience += 10
        }

        heal(user) {
            user.team[0].health += this.health
        }
    }
    let test = new GameItems(`Rare Candy`, 1000)

    // base logic that will probably be reused a lot 
    const baseLogic = {
        randomNum: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        gainExp: function() {
            
        },
        levelUp: function() {
            for(let i = 0; i < player.team.length; i++) {
                if (player.team[i].experience) {

                }
            }
        }
    }

    // function that pushes the starter you chose into the player team array and only lets you choose 1 starter
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
            console.log(player.team)
            console.log(comp.team)
        }
    }
    
    const player = {
        name: `Rae`,
        fainted: [],
        team: [],
        caught: [],
        items: [],
        pokeballs: [],
    }

    const comp = {
        name: `Gary`,
        fainted: [],
        team: [],
        items: [],
    }

    // overall logic for the battle
    const battleLogic = {
        types: [`water`, `fire`, `electric`, `normal`, `dragon`, `fairy`, `grass`, `ground`, `rock`, `ice`, `flying`, `fighting`, `poison`, `psychic`, `bug`, `steel`, `ghost`, `dark`],
        // Very long battle function that takes 2 parameters and depending on the type of the pokemon, will do damage accordingly
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
                console.log(defender.team[0].health -= attacker.team[0].attack)
            }
        },
        // heals the pokemon when needed
        resetHealth: function(user) {
            if (user.team.length === 0) {
                for(let i = 0; i < user.fainted.length; i++) {
                    user.fainted[i].health = user.fainted[i].overallHealth
                    user.team.push(user.fainted[i])
                }
            }
        },
        win: function() {
            levelUp()
            for (let i = 0; i < player.team.length; i++) {
                if (player.team[i].experience % 10 === 0) {
                    console.log(`Your ${player.team[i].name} has leveled up! Health: ${player.team[i].overallHealth} Attack damage: ${player.team[i].attack} Speed: ${player.team[i].speed}`)
                }
            }
        },
        // logic for a player and computer loss
        fightOutcome: function() {
            if (player.team.length === 0 && comp.team.length >= 1) {
                alert(`All your Pokemon fainted and you rushed to the Pokécenter`)
                this.resetHealth(player)
                this.resetHealth(comp)
                return
            } else if (comp.team.length === 0 && player.team.length >= 1) {
                alert(`You have won the battle`)
                for(let i = 0; i < player.team.length; i++) {
                    player.team[i].experience += 5
                    this.win()
                    console.log(player.team[i].experience)
                }
                this.resetHealth(comp)
                return
            }
        },
        // applies a fainted value if a pokemon's health is 0 or less and moves them to a different array.
        faintLogic: function(user) {
            if (user.team[0].health <= 0) {
                user.team[0].isFainted = true
                if (user.team[0].isFainted === true) {
                    user.fainted.push(user.team[0])
                    user.team.shift()
                }
            } 
        },
    }
    // general logic for catching pokemon
    const catchLogic = {

    }

    const levelUp = () => {
        for (let i = 0; i < player.team.length; i++) {
            if (player.team[i].experience % 10 === 0) {
                player.team[i].level++
                player.team[i].overallHealth += 5
                player.team[i].health = player.team[i].overallHealth
                player.team[i].attack += 5
                player.team[i].speed += 5
            }
        }
    }

    const testFunction = () => {
        battleLogic.faintLogic(player)
        battleLogic.faintLogic(comp)
        battleLogic.fightOutcome()
    }

    // event listeners
    $(`#pik`).on(`click`, pickStarter.pickPika)
    $(`#char`).on(`click`, pickStarter.pickChar)
    $(`#squir`).on(`click`, pickStarter.pickSquirtle)
    $(`#bulb`).on(`click`, pickStarter.pickBulb)
    $(`#fight`).on(`click`, () => {battleLogic.typeFight(player, comp)})
    $(`#end`).on(`click`, () => {battleLogic.typeFight(comp, player)})
    $(`#test`).on(`click`, testFunction)
})
