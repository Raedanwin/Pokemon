// $(() => {

    const starters = [`Pikachu`, `Bulbasaur`, `Charmander`, `Squirtle`]
    

    const baseLogic = {
        randomNum: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

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