const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();
const port = 80;


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/contactform');
}

const contactSchema = new mongoose.Schema({
    name: String,
    number: String,
    emailid: String,
    address: String
});


const contact = mongoose.model('contact', contactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.status(200).render('home.pug');

})
app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');

})
app.post('/contact', (req, res) => {
    var myData = new contact(req.body);
    myData.save().then(() => {
    
        res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("item was not saved to the databse")
    })

})


app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
})