/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/

const appSettings = {
    databaseURL: "https://playground-5f5ea-default-rtdb.firebaseio.com/"
}

let inputFieldEl = document.querySelector("#input-field")
const addBtnEl = document.querySelector("#add-button")

addBtnEl.addEventListener("click", () => {
    let inputValue = inputFieldEl.value

    console.log(inputValue)
})