import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {
    getDatabase,
    ref,
    push
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://tasklist-e141a-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const taskListInDB = ref(database, "taskList")

const inputFieldEl = document.querySelector("#input-field")
const addButtonEl = document.querySelector("#add-button")
const ulEl = document.querySelector("#shopping-list")

addButtonEl.addEventListener("click", () => {
    let inputValue = inputFieldEl.value

    push(taskListInDB, inputValue)
    ulEl.innerHTML = `<li>${inputValue}</li>`
    inputFieldEl.value = ""
})