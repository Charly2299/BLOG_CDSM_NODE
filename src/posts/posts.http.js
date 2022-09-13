const usePostControllers = require("./posts.controllers");

//4.A.1.CREAR UN POST
//CREAR UNA POST YA CON CUENTA INICIADA

// {
//     "title": "postprueba",
//         "content": "contenido prueba",
//         "header_image": "url_to_img"
// }
const createOfPost = (req, res) => {
  const data = req.body;
  const user_id = req.user.id;
  if (!data) {
    return res.status(400).json({ messae: "Faltan datos" });
  } else if (!data.title || !data.content || !data.header_image) {
    return res.status(400).json({
      message: "Debes de llenar los campos ",
      fields: {
        title: "string",
        content: "string",
        header_image: "url_to_img",
      },
    });
  } else {
    const response = usePostControllers.createPost(user_id, data);
    return res.status(201).json({
      message: "Post creado con exito",
      post: response,
    });
  }
};

//4.A.Ver los posts de todos los usuarios
const getAllOfPosts = (req, res) => {
  const data = usePostControllers.getAllPosts();
  res.status(200).json({ items: data.length, posts: data });
};

//4.B.1.Ver un post en especifico
const getPostOfId = (req, res) => {
  const id = req.params.id;
  const data = usePostControllers.getPostById(id);

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(400).json({ message: "No existe el id ingresado" });
  }
};

//4.C.1.Ver unicamente los posts del usuario loggeado
const getMyPost = (req, res) => {
  const id = req.user.id;
  const data = usePostControllers.getPostsByUser(id);
  res.status(200).json(data);
};

//4.D.1.Ver un post en especifico pero solo los del usuario loggeado
const getMyPostById = (req, res) => {
  const user_id = req.user.id;
  const id = req.params.id;
  const data = usePostControllers.getMyPostByIdUser(user_id, id);
  if (data) {
    res.status(200).json(data);
  } else {
    res
      .status(400)
      .json({
        message:
          "No existe el id del post ingresado o tu usuario no tiene posts",
      });
  }
};

//4.D.2.Editar un post
const editPostById = (req, res) => {
  const user_id = req.user.id;
  const id = req.params.id;
  const data = req.body;

  const response = usePostControllers.editMyPost(user_id, id, data);

  if (response) {
    return res.status(200).json({
      message: "POST EDITADO CORRECTAMENTE",
      post: response,
    });
  } else {
    return res.status(400).json({
      message: "Id ingresado no existe",
    });
  }
};


//4.D.2.Eliminar un post

const removeMyPost = (req, res) => {
  const user_id = req.user.id;
  const id = req.params.id;
  const data = usePostControllers.deleteMyPost(user_id, id);

  if (data) {
    res.status(204).json();
  } else {
    res.status(400).json({ message: "id del post invalido" });
  }
};



module.exports = {
  getAllOfPosts,
  createOfPost,
  getPostOfId,
  getMyPost,
  getMyPostById,
  editPostById,
  removeMyPost,

};
