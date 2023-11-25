// turning an object into an array

let scrimbaUsers = {
    "00": "sindre@scrimba.com", //"key": "values"
    "01": "per@scrimba.com",
    "02": "frode@scrimba.com"
}

Object.values(scrimbaUsers)

// turning just the keys into an array
Object.keys(scrimbaUsers)

//for both 
Object.entries(scrimbaUsers)

// Challenge: Create a let variable called 'scrimbaUsersEmails' and use one of Object methods to set it equal to an array with the values
let scrimbaUsersEmails = Object.values(scrimbaUsers)
// Challenge: Create a let variable called 'scrimbaUsersIDs' and use one of Object methods to set it equal to an array with the keys
let scrimbaUsersIDs = Object.keys(scrimbaUsers)
// Challenge: Create a let variable called 'scrimbaUsersEntries' and use one of Object methods to set it equal to an array with the both the keys and values
let scrimbaUsersEntries = Object.entries(scrimbaUsers)