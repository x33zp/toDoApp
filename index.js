import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

const appSettings = {
    databaseURL: "https://playground-5f5ea-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)

console.log(app)

let inputFieldEl = document.querySelector("#input-field")
const addBtnEl = document.querySelector("#add-button")

addBtnEl.addEventListener("click", () => {
    let inputValue = inputFieldEl.value

    console.log(inputValue)
})