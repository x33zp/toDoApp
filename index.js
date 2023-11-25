import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {
    getDatabase,
    ref,
    push,
    onValue,
    remove
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
    // Challenge: Change the onValue code so that it uses snapshot.exists() to show items when there are items in the database and if there are not displays the text 'No items here... yet'.

    if (snapshot.exists()) {
        let snapshotValue = snapshot.val()
        let taskListArray = Object.entries(snapshotValue)

        clearlistEl()

        for (let i = 0; i < taskListArray.length; i++) {
            let taskList = taskListArray[i]

            appendItemToListEl(taskList)
        }
    } else {
        listEl.innerHTML = "No items here... yet."
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
        let exactLocationOftaskListInDB = ref(database, `taskList/${itemID}`)
        // Challenge: Use the remove function to remove the item from the database
        remove(exactLocationOftaskListInDB)
    })

    listEl.append(newEl)
}

const clearInput = () => {
    inputFieldEl.value = ""
}