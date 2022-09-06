const express = require('express')
const app = express()

const d = new Date()
let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const info = `<p>Phonebook has info for ${persons.length} people</p>
              ${d}`


const generateID = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}


app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

app.get('/', (request, response)=> {
  response.send("<h1>Hello World</h1>")
})

app.get("/info", (request, response)=> {
  response.send(info)
})

app.get("/api/persons/:id", (request, response)=> {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if(person == null) {
    response.status(400).json({
      error:"Person Missing"
    })
  }
  else {
    response.json(person)
  }
})

app.delete("/api/persons/:id", (request, response)=> {
  const id = Number(request.params.id)
  persons  = persons.filter(person => person.id!==id)
  response.status(204).end()
})

app.post("api/persons", (request, response)=> {
  
  const body = request.body
  console.log(body)
  if(!body.name){
    response.status(400).json({
      error: "Name missing"
    })
  }
  if(!body.number){
    response.status(400).json({
      error: "Number missing"
    })
  }

  const person = {
    id: generateID(1,1000),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)
  response.json(person)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})