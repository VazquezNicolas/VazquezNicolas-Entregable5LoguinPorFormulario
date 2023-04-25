const express = require('express')
const session = require('express-session')

const app = express ()

app.use(express.json())
app.use(session({
    secret: 'coderSecret',
    reseve: false,
    saveUninitialized: false
}))

app.listen(3000, () => {
    console.log(3001)
})