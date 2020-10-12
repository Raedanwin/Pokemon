// Very long battle function that takes 2 parameters and depending on the type of the pokemon, will do damage accordingly
const typeFight = (attacker, defender) => {
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
}

