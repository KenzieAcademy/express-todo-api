const express = require('express')
const app = express()
const port = 3000

// Express Middleware
app.use(express.json())

// Our mock database (array of objects)
let db = []

app.get('/', (req, res) => {
    res.send('testing 123...')
})

app.get('/todos', (req, res) => {
    // send our whole list of todos back
})

app.post('/todos', (req, res) => {
    // create a new todos (append the new todo object to our db array)
    // the data for the todo must come in the body of the POST request
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

