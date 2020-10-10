// $(() => {

    const starters = [`Pikachu`, `Bulbasaur`, `Charmander`, `Squirtle`]

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
    ]
    
    // base logic that will probably be reused a lot 
    const baseLogic = {
        randomNum: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

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