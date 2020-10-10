// $(() => {

    const starters = [`Pikachu`, `Bulbasaur`, `Charmander`, `Squirtle`, `Eevee`]

    const pokemon = [
        pikachu = {
            health: 48,
            attack: 50,
            speed: 100,
            level: 1,
            type: `electric`,
            experience: 5,
            rarity: 3,
        },
        bulbasaur = {
            health: 50,
            attack: 40,
            speed: 50,
            level: 1,
            type: `grass`,
            experience: 5,
            rarity: 4,
        },
        charmander = {
            health: 60,
            attack: 60,
            speed: 60,
            level: 1,
            type: `fire`,
            experience: 5,
            rarity: 4,
        },
        squirtle = {
            health: 70,
            attack: 50,
            speed: 40,
            level: 1,
            type: `water`,
            experience: 5,
            rarity: 4,
        },
        eevee = {
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
                player.team.push(starters[0])
                comp.team.push(starters[4])
            }
            console.log(player.team)
            console.log(comp.team)
        },
        pickBulb: function() {
            if (player.team.length === 1) {
                console.log(`You got a Bulbasaur!`)
            } else {
                player.team.push(starters[1])
                comp.team.push(starters[2])
            } 
            console.log(player.team)
            console.log(comp.team)
        },
        pickChar: function() {
            if (player.team.length === 1) {
                console.log(`You got a Charmander!`)
            } else {
                player.team.push(starters[2])
                comp.team.push(starters[3])
            }
            console.log(player.team)
            console.log(comp.team)
        },
        pickSquirtle: function() {
            if (player.team.length === 1) {
                console.log(`You got a Squirtle!`)
            } else {
                player.team.push(starters[3])
                comp.team.push(starters[1])
            }
            console.log(player.team)
            console.log(comp.team)
        }
    }
    const battleLogic = {

    }

    const catchLogic = {

    }

    const player = {
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