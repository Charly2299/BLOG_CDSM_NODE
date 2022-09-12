const usePostControllers = require("./posts.controllers");

//VER TODOS LOS POST
const getAllOfPosts = (req, res) => {
  const data = usePostControllers.getAllPosts();
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
      const response = usePostControllers.createPost(data,req.user.id)
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
    const data=usePostControllers.getPostById(id)

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
    const data=usePostControllers. getPostsByUser(id)
    res.status(200).json(data)
}


//VER  UN POST POR ID DEL POST DEL USUARIO LOGEADO
const getMyPostById=(req,res)=>{
const user_id=req.user.id
const id=req.params.id
const data=usePostControllers.getMyPostByIdUser(user_id,id)
if(data){
    res.status(200).json(data)
}
else{
    res.status(400).json({message:'No existe el id del  post ingresado'})
}
}

//EDITAR UNPOST DE UN USUARIO LOGEADO CON ID DEL POST (FALTADECORREIR)
const editPostById=(req,res)=>{
    const user_id=req.user.id
    const data=req.body
    const id=req.params.id
    if(
        !data.title||
        !data.content||
        !data.header_image
    ){
        return res.status(400).json({
            messae:'Todos los campos deben estar llenos',
            fields:{
                title: "string",
                content: "string",
                header_image: "url_to_img"
            }
        })
    }
    else{
        const response=usePostControllers.editMyPost(user_id,id,data)
        return res.status(200).json({
            message:'POST EDITADO CORRECTAMENTE',
            post:response
        })
    }
           
    
}

///ELIINAR UN POST  CREADO

const removeMyPost=(req,res)=>{
    const user_id=req.user.id
    const id=req.params.id
    const data=usePostControllers.deleteMyPost(user_id,id)

    if(data){
        res.status(204).json()
    }else{
        res.status(400).json({message:'id del post invalido'})
    }

}

//PRUEBA
const pruebadata=(req,res)=>{
    const user_id=req.user.id
    const response=usePostControllers.prueba(user_id)
    return res.status(200).json({
        post:response
})
}

module.exports = {
  getAllOfPosts,
  createOfPost,
  getPostOfId,
  getMyPost,
  getMyPostById,
  editPostById,
  removeMyPost,
  pruebadata
};
