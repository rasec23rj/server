
var mongoose = require('mongoose')
var fake = require('faker')
var PersonModel = require('../modules/PersonModel')

mongoose.connect('mongodb://localhost:27017/auth_test',{
   useNewUrlParser: true 
})

async function add(n) {
    try {
        for (let i = 0; i < n; i++) {
            const p = new PersonModel()
            p.name = fake.name.firstName()
            p.country = fake.address.country()
            p.company = fake.company.companyName()
            p.email = fake.internet.email()
            await p.save()
        }
    } catch (err) {
        console.log(err)
    }
}

add(100)
.then( () => {
    console.log('ok')
    mongoose.disconnect()
})
