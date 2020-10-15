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
    let candy = new GameItems(`Rare Candy`, 1000)
    let potion = new GameItems(`Potion`, 200, 20)


    // base logic that will probably be reused a lot 
    const baseLogic = {
        randomNum: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        continueFunc: function() {
            
        }
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
        team: [],
        caught: [],
        items: [potion],
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
                htmlLogic.lose()
            } else if (comp.team.length === 0 && player.team.length >= 1) {
                alert(`You have won the battle`)
                for(let i = 0; i < player.team.length; i++) {
                    player.team[i].experience += 5
                }
                levelUp()
                this.resetHealth(comp)  
                htmlLogic.win()
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
            if (comp.team[0].health > 0) {
                typeFight(comp, player)
            }
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

    const htmlLogic = {
        first: function() {
            $(`#container`).empty()
            htmlLogic.hideThings()
            htmlLogic.pokemonHide()
            $(`<h3>`).text(`Gary: Wake up ${player.name}, today's the day we get our pokemon! We should head to Professor Oak's lab right away. Race you there!`).appendTo(`#container`)
        },
        second: function() {
            $(`#container`).empty()
            $(`body`).addClass(`screenII`)
            $(`<h3>`).html(`Professor Oak: You're early today, eager to get your hands on some pokemon are you? <br> Gary and ${player.name}: Yup! <br>Professor Oak: There are a few pokemon over there, why don't you go take your pick`).appendTo(`#container`)
            $(`#container`).on(`click`, htmlLogic.third)
        },
        third: function() {
            $(`#container`).empty()
            $(`body`).addClass(`screenII`)
            $(`<h4>`).text(`Pick your starter Pokémon.`).appendTo(`#container`)
            $(`<button>`).addClass(`starterB`).text(`Pikachu`).on(`click`, pickStarter.pickPika).appendTo(`#container`)
            $(`<button>`).addClass(`starterB`).text(`Charmander`).on(`click`, pickStarter.pickChar).appendTo(`#container`)
            $(`<button>`).addClass(`starterB`).text(`Bulbasaur`).on(`click`, pickStarter.pickBulb).appendTo(`#container`)
            $(`<button>`).addClass(`starterB`).text(`Squirtle`).on(`click`, pickStarter.pickSquirtle).appendTo(`#container`)
            $(`#container`).on(`click`, htmlLogic.fourth)
        },
        fourth: function() {
            $(`#container`).empty()
            $(`body`).addClass(`screenIII`).removeClass(`screenII`)
            $(`<h3>`).html(`Gary: Wow you got a ${player.team[0].name}?! That's so cool! I got a ${comp.team[0].name} though so I have the type advantage haha. <br> ${player.name}: Well if you're so confident, why don't we battle then? <br> Gary: You're on!`).appendTo(`#container`)
            $(`#container`).on(`click`, htmlLogic.fifth)
        },
        fifth: function() {
            $(`#container`).empty()
            $(`<h3>`).html(`You challenged Gary to a battle!`).appendTo(`#container`)
            $(`#container`).on(`click`, htmlLogic.sixth)
        },
        sixth: function() {
            $(`#container`).empty()
            $(`#container`).css({background: `linear-gradient(to bottom, #615F61 0%, #DBD8DB 50%, #615F61 100%)`})
            $(`<div>`).attr(`id`, `fightCon`).appendTo(`#container`)
            $(`<div>`).attr(`id`, `buttonCon`).appendTo(`#container`)
            $(`<h2>`).text(`What will ${player.team[0].name} do?`).appendTo(`#fightCon`)
            $(`<button>`).text(`Fight`).addClass(`fightB`).attr(`id`, `fight`).on(`click`, battleLogic.fightMain).appendTo(`#buttonCon`)
            $(`<button>`).text(`Bag`).addClass(`fightB`).attr(`id`, `bag`).on(`click`, htmlLogic.things).appendTo(`#buttonCon`)
            $(`<button>`).text(`Pokémon`).addClass(`fightB`).attr(`id`, `poke`).appendTo(`#buttonCon`)
            $(`<button>`).text(`Run`).addClass(`fightB`).attr(`id`, `run`).appendTo(`#buttonCon`)
            $(`#container`).on(`click`, htmlLogic.seventh)
            $(`.fightB`).on(`click`, function() {
                event.stopPropagation()
            })       
        },
        lose: function() {
            $(`#container`).empty()
            $(`#container`).css({background: `white`})
            $(`<h3>`).text(`Gary: That was a good battle but I told you I had the type advantage haha. Better luck next time!`).appendTo(`#container`)
            $(`#container`).on(`click`, htmlLogic.seventh)
        },
        win: function() {
            $(`#container`).empty()
            $(`#container`).css({background: `white`})
            $(`<h3>`).text(`Gary: Man, even with my type advantage you still beat me! You're gonna be a super trainer one day!`).appendTo(`#container`)
            $(`#container`).on(`click`, htmlLogic.seventh)
        },
        seventh: function() {
            $(`#container`).empty()
            $(`<h3>`).text(`Gary: We should head off on our Pokémon training adventure now! See you at the next town ${player.name}!`).appendTo(`#container`)
            $(`#container`).css({background: `white`})
            $(`#container`).on(`click`, htmlLogic.eighth)
        },
        eighth: function() {
            $(`#container`).empty()
            $(`<h3>`).html(`Professor Oak: Wait! Before you two go, take these. These are called Pokédexes. They're used to identify and document every pokémon you encounter, so be sure to catch em' all!<br> Gary and ${player.name}: Thanks! We'll try our best!`).appendTo(`#container`)
            $(`#container`).on(`click`, htmlLogic.ninth)
        },
        ninth: function() {
            $(`#container`).empty()
            $(`<h3>`).html(`To be continued...`).appendTo(`#container`)
            $(`#container`).on(`click`, htmlLogic.end)
        },
        end: function() {
            location.reload()
        },
        things: function() {
            $(`#bag`).on(`click`, function() {$(`#things`).toggle().html(`Items: ${player.items[0].name}`)})
        },
        hideThings: function() {
            $(`#things`).hide()
        },
        pokemonShow: function() {
            $(`#poke`).on(`click`, function() {$(`#things`).toggle().html(`Who do you want to switch to?<br>${player.team[0]}`)})
        },
        pokemonHide: function() {
            $(`#mon`).hide()
        }
    }

    // event listeners
    htmlLogic.first()
    $(`#container`).on(`click`, htmlLogic.second)
})
