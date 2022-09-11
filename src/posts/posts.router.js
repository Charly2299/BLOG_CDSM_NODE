const  router=require('express').Router()
const passport = require('passport')

const postServices=require('./posts.http')

router.route('/') //  /api/v1/posts
    .get(postServices.getAllOfPosts)
    .post(passport.authenticate('jwt',{session:false}),postServices.createOfPost)


router.get('/:id',postServices.getPostOfId)

exports.router=router
