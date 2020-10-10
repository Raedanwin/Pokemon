const baseURL = `https://pokeapi.co/api/v2/`
const type = `pokemon/`
const search = `pikachu`
const queryURL = baseURL + type + search

console.log(queryURL)

$(() => {
    const change = () => {
        $(`body`).addClass(`catch`).css(`background-image`, `url('https://i.imgur.com/TwyTW24.png')`)
        $(`body`).html(`<h1>`).text(`This is a test`).addClass(`catch`)
    }
    $(`#test`).on(`click`, change)
})