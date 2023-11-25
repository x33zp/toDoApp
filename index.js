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
    appendItemToListEl(inputValue)
    clearInput()
})

/*
Challenge:
Call the onValue function with
shoppingListInDB as the first argument and
function(snapshot) {} as the second argument
*/

onValue(taskListInDB, function (snapshot) {
    // Challenge: Use Object.values() to convert snapshot.val() from an Object to an Array. Create a variable for this.
    let taskListArray = Object.values(snapshot.val())

    // Challenge: Write a for loop to iterate on itemsArray and console log each item
    for (let i = 0; i < taskListArray.length; i++) {
        let taskList = taskListArray[i]
        console.log(taskList)

        // Challenge: Use the appendItemToShoppingListEl(itemValue) function inside of the for loop to append item to the shopping list element for each iteration.
        appendItemToListEl(taskList)
    }

    console.log(taskListArray)
})

const appendItemToListEl = (itemValue) => {
    listEl.innerHTML += `<li>${itemValue}</li>`
}

const clearInput = () => {
    inputFieldEl.value = ""
}