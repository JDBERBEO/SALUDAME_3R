const express = require('express');
const app = express ();
const path = require('path');
const hbs = require ('express-handlebars');

//setting engine 

app.set('views', path.join(__dirname, 'views'))

app.engine('hbs', hbs({
    defaultLayout: 'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs'
}))

app.set('view engine', '.hbs')
// middlewares

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/',(req,res)=> {
    res.render('home', {
        nombre: 'Juan'
    })
})
//routes

app.get('/user',(req,res)=>{
    res.render('user')
})

app.post('/user', (req,res)=> {
    res.render('greetings', {
        name: req.body.name
    })
})
app.listen(3000, ()=>console.log('Listening in port 3000'))