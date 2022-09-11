const  router=require('express').Router()

const postServices=require('./posts.http')

router.route('/') //  /api/v1/posts
    .get(postServices.getAllOfPosts)



exports.router=router
