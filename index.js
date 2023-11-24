import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

// Challenge: Make sure that add is working by console logging add with two number arguments.
console.log(add(2, 3))

const appSettings = {
    databaseURL: "https://playground-5f5ea-default-rtdb.firebaseio.com/"
}

let inputFieldEl = document.querySelector("#input-field")
const addBtnEl = document.querySelector("#add-button")

addBtnEl.addEventListener("click", () => {
    let inputValue = inputFieldEl.value

    console.log(inputValue)
})