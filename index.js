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
const booksInDB = ref(database, "books")

const inputFieldEl = document.querySelector("#input-field")
const addButtonEl = document.querySelector("#add-button")
const listEl = document.querySelector("#shopping-list")

addButtonEl.addEventListener("click", () => {
    let inputValue = inputFieldEl.value

    // push(taskListInDB, inputValue)
    onValue(booksInDB, function (snapshot) {
        let booksArray = Object.values(snapshot.val())
        // Challenge: Write a for loop where you console log each book.
        for (let i = 0; i < booksArray.length; i++) {
            let currentBook = booksArray[i]
            appendItemToListEl(currentBook)
        }
        // console.log(booksArray)
    })
    // appendItemToListEl(inputValue)
    // clearInput()
})

function appendItemToListEl(itemValue) {
    listEl.innerHTML = `<li>${itemValue}</li>`
}

const clearInput = () => {
    inputFieldEl.value = ""
}