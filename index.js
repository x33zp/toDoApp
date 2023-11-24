import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {
    getDatabase,
    ref,
    push
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://playground-5f5ea-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const dataBase = getDatabase(app)
const movieInDB = ref(dataBase, "movies")

let inputFieldEl = document.querySelector("#input-field")
const addBtnEl = document.querySelector("#add-button")

addBtnEl.addEventListener("click", () => {
    let inputValue = inputFieldEl.value

    push(movieInDB, inputValue)

    console.log(inputValue)
})