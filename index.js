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

        // Challenge: Make two let variables:
        // currentItemID and currentItemValue and use currentItem to set both of
        // them equal to the correct values.
        let taskListID = taskList[0]
        let taskListValue = taskList[1]

        appendItemToListEl(taskListValue)
    }

    console.log(taskListArray)
})

const clearlistEl = () => {
    listEl.innerHTML = ""
}

const appendItemToListEl = (itemValue) => {
    listEl.innerHTML += `<li>${itemValue}</li>`
}

const clearInput = () => {
    inputFieldEl.value = ""
}