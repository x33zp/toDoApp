import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {
    getDatabase
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://playground-5f5ea-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const dataBase = getDatabase(app)

let inputFieldEl = document.querySelector("#input-field")
const addBtnEl = document.querySelector("#add-button")

addBtnEl.addEventListener("click", () => {
    let inputValue = inputFieldEl.value

    console.log(inputValue)
})