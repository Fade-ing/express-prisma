const express = require('express')
const app = express()
const port = 3000
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', async (req, res) => {
  res.render('dashboard')
  const getTodo = await prisma.todo.findMany()
})

app.post('/add/todo', async (req, res) => {
  const { activity, description } = req.body
  const status = req.body.status ? true : false
  const post = await prisma.todo.create({
    data: {
      activity,
      description,
      status
    },
  })
  res.json(post)
})

app.listen(port, () => {
  console.log(`App listening on port localhost:${port}`)
})