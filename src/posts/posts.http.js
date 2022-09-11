const userPostControllers= require('./posts.controllers')

const getAllOfPosts=(req,res)=>{
    const  data=userPostControllers.getAllPosts()
    res.status(200).json({items:data.length,posts:data})
}



module.exports={
    getAllOfPosts
}