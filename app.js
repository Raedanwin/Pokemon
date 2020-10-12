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
            player.team[0].experience += 15
            levelUp()
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
    }

    // function that pushes the starter you chose into the player team array and only lets you choose 1 starter
    const pickStarter = {
        pickPika: function() {
            if (player.team.length === 1) {
                console.log(`You got a Pikachu!`)
            } else {
                player.team.unshift(pokemon[0])
                comp.team.unshift(pokemon[4])
            }
            console.log(player.team)
            console.log(comp.team)
        },
        pickBulb: function() {
            if (player.team.length === 1) {
                console.log(`You got a Bulbasaur!`)
            } else {
                player.team.unshift(pokemon[1])
                comp.team.unshift(pokemon[2])
            } 
            console.log(player.team)
            console.log(comp.team)
        },
        pickChar: function() {
            if (player.team.length === 1) {
                console.log(`You got a Charmander!`)
            } else {
                player.team.unshift(pokemon[2])
                comp.team.unshift(pokemon[3])
            }
            console.log(player.team)
            console.log(comp.team)
        },
        pickSquirtle: function() {
            if (player.team.length === 1) {
                console.log(`You got a Squirtle!`)
            } else {
                player.team.unshift(pokemon[3])
                comp.team.unshift(pokemon[1])
            }
            console.log(player.team)
            console.log(comp.team)
        }
    }
    
    const player = {
        name: `Rae`,
        fainted: [],
        team: [pokemon[2], pokemon[1]],
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
        // heals the pokemon when needed
        resetHealth: function(user) {
            if (user.team.length === 0) {
                for(let i = 0; i < user.fainted.length; i++) {
                    user.fainted[i].health = user.fainted[i].overallHealth
                    user.team.push(user.fainted[i])
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
                console.log(player.team.length)
                for(let i = 0; i < player.team.length; i++) {
                    player.team[i].experience += 5
                }
                levelUp()
                this.resetHealth(comp)
                return
            }
        },
        // applies a fainted value if a pokemon's health is 0 or less and moves them to a different array.
        faintLogic: function(user) {
            if (user.team[0].health <= 0) {
                user.team[0].isFainted = true
                console.log(`${user.name}'s ${user.team[0].name} has fainted`)
                if (user.team[0].isFainted === true) {
                    user.fainted.push(user.team[0])
                    user.team.shift()
                }
            } 
        },
        fightMain: function() {
            typeFight(player, comp)
            typeFight(comp, player)
            battleLogic.faintLogic(player)
            battleLogic.faintLogic(comp)
            battleLogic.fightOutcome()
        }
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
                console.log(`Your ${player.team[i].name} has leveled up! Health: ${player.team[i].overallHealth} Attack damage: ${player.team[i].attack} Speed: ${player.team[i].speed}`)
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
    $(`#fight`).on(`click`, battleLogic.fightMain)
})
