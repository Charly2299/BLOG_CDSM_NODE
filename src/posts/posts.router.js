const  router=require('express').Router()
const passport = require('passport')

const postServices=require('./posts.http')

//A CREAR POST Y VER LOS POSTS DE TODOS LOS USUARIOS
router.route('/') //  /api/v1/posts
    .get(postServices.getAllOfPosts)
    .post(passport.authenticate('jwt',{session:false}),postServices.createOfPost)

//B VER UN POST EN ESPECIFICO
router.get('/:id',postServices.getPostOfId)

//C VER UNICAMENTE LOS POSTS DEL USUARIO LOGEADO
router.route('/me/posts')
.get(passport.authenticate('jwt', {session: false}),postServices.getMyPost)


exports.router=router
