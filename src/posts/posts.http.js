const userPostControllers = require("./posts.controllers");

//VER TODOS LOS POST
const getAllOfPosts = (req, res) => {
  const data = userPostControllers.getAllPosts();
  res.status(200).json({ items: data.length, posts: data });
};

//CREAR UNA POST YA CON CUENTA INICIADA

// {
//     "title": "postprueba",
//         "content": "contenido prueba",
//         "header_image": "url_to_img"
// }
const createOfPost = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ messae: "Faltan datos" });
  } else if (!data.title || !data.content || !data.header_image) {
    return res.status(400).json({
      message: "Debes de llenar los campos ",
      fields: {
        title: "string",
        content: "string",
        header_image: "url_to_img"
      },
    });
  }
  else{
      const response = userPostControllers.createPost(data,req.user.id)
    return res
    .status(201)
    .json({
        message:'Post creado con exito',
        post: response
    })
    }
};


//VER UN POST POR ID

const getPostOfId=(req,res)=>{
    const id=req.params.id
    const data=userPostControllers.getPostById(id)

    if(data){
        res.status(200).json(data)
    }
    else{
        res.status(400).json({message:'No existe el id ingresado'})
    }
}

//VER UN POST POR usuario QUE SE HA LOGEADO
const getMyPost=(req,res)=>{
    const id=req.user.id
    const data=userPostControllers. getPostsByUser(id)
    res.status(200).json(data)
}

module.exports = {
  getAllOfPosts,
  createOfPost,
  getPostOfId,
  getMyPost
};
