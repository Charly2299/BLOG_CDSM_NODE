const router = require('express').Router()

const authServices = require('./auth.http')
const {register} = require('../users/users.http')

router.post('/login', authServices.login)

// {
//     "email": "daniel.sanchez@academlo.com",
//     "password": "root"

//   }


router.post('/register', register)

exports.router = router    