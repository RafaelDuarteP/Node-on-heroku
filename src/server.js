const express = require('express')
const path = require('path')
const Pessoa = require('./db/models/Pessoa')
const bodyParser = require("body-parser")
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT || 3030
const app = express()

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/index', (req, res)=>{
    console.log(typeof process.env.DATABASE_URL)
    res.render('index')
})

app.post('/add/pessoa', async (req, res)=>{
    const pessoa = await Pessoa.create({
        nome: req.body.nome,
        nascimento: req.body.nascimento
    }).catch((e)=>{
        console.log(e)
    })

    console.log(pessoa)

    res.render('pessoa', req.body)
})


app.listen(port, ()=>{
    console.log('Server running on port ' + port)
    console.log(process.env.DIALECT)
    console.log(process.env.HOST)
    console.log(process.env.DATABASE_PORT)
    console.log(process.env.USER)
    console.log(process.env.DATABASE_PASSWORD)
    console.log(process.env.DATABASE)
})