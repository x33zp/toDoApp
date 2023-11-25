import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {
    getDatabase,
    ref,
    push,
    onValue
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://tasklist-e141a-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const taskListInDB = ref(database, "taskList")

const inputFieldEl = document.querySelector("#input-field")
const addButtonEl = document.querySelector("#add-button")
const listEl = document.querySelector("#shopping-list")

addButtonEl.addEventListener("click", () => {
    let inputValue = inputFieldEl.value

    push(taskListInDB, inputValue)
    // appendItemToListEl(inputValue)
    clearInput()
})

onValue(taskListInDB, function (snapshot) {
    let snapshotValue = snapshot.val()
    let taskListArray = Object.entries(snapshotValue)

    clearlistEl()

    for (let i = 0; i < taskListArray.length; i++) {
        let taskList = taskListArray[i]

        appendItemToListEl(taskList)
    }
})

const clearlistEl = () => {
    listEl.innerHTML = ""
}

const appendItemToListEl = (item) => {
    let itemID = item[0]
    let itemValue = item[1]

    let newEl = document.createElement("li")

    newEl.textContent = itemValue

    newEl.addEventListener("click", () => {
        // Challenge: Make a let variable called 'exactLocationOfItemInDB' and set it equal to ref(database, something) where you substitute something with the code that will give you the exact location of the item in question.
        let exactLocationOftaskListInDB = ref(database, `taskList/${itemID}`)
    })

    listEl.append(newEl)
}

const clearInput = () => {
    inputFieldEl.value = ""
}