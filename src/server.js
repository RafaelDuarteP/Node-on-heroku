const express = require('express')
const path = require('path')
// const Pessoa = require('./db/models/Pessoa')
const bodyParser = require("body-parser")

const port = process.env.PORT || 3030
const app = express()

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/index', (req, res)=>{
    console.log(process.env.DATABASE_URL)
    res.render('index')
})

/* app.post('/add/pessoa', async (req, res)=>{
    const pessoa = await Pessoa.create({
        nome: req.body.nome,
        nascimento: req.body.nascimento
    }).catch((e)=>{
        console.log(e)
    })

    console.log(pessoa)

    res.render('pessoa', pessoa.dataValues)
}) */


app.listen(port, ()=>{
    console.log('Server running on port ' + port)
})