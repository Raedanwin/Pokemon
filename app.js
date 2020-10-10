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

    const battleLogic = {
        fight: function () {
            comp.team[0].health -= player.team[0].attack
            console.log(comp.team[0].health)
        },
    }

    const catchLogic = {

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



// })