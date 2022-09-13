const uuid = require("uuid");
//declaramos un post del usuario por defgfault
const userControllers = require("../users/users.controllers");

const postDB = [
  {
    id: "2f0adbaf-6f9b-4d85-be57-ec4c1685f299",
    title: "Halo es mejor juego de 2022?",
    content:
      "Los juegos de Halo son juegos de disparos en primera persona que marcaron una generación mucho antes de que Call of Duty o Battlefield se convirtieran en la norma",
    header_image: "url_to_img",
    user_id: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f", //Aqui hara referencia al usuario de tu userDB
    published: true,
  },
];

//4.A.1.Crear posts
const createPost = (user_id, data) => {
  const newPost = {
    id: uuid.v4(),
    title: data.title,
    content: data.content,
    header_image: data.header_image ? data.header_image : "",
    user_id: user_id, //Aqui hara referencia al usuario de tu userDB
    published: true,
  };
  postDB.push(newPost);
  return newPost;
};

//4.A.Ver los posts de todos los usuarios
const getAllPosts = () => {
  return postDB;
};

//4.B.1.Ver un post en especifico
const getPostById = (id) => {
  const data = postDB.filter((post) => post.id === id);
  return data.length ? data[0] : null;
};

// const getPostByIdUser=(id)=>{
//     const data=postDB.filter((post)=>post.user_id===id)
//     return data.length?data[0]:null
// }

// const getPostMyById=(user_id,id)=>{
//     const data2=getPostByIdUser(user_id)
//     const data=postDB.filter((post)=>post.id===id)
//     return data.length?data[0]:null
// }

//4.C.1.Ver unicamente los posts del usuario loggeado
const getPostsByUser = (user_id) => {
  const data = postDB.filter((post) => post.user_id === user_id);
  return data.length ? data : null;
};

//4.D.1.Ver un post en especifico pero solo los del usuario loggeado

// const getMyPostByIdUser=(user_id,id)=>{
//  const data1=getPostsByUser(user_id)
//  const data2=data1?data1.filter((post)=>post.id===id):undefined
//  return data2?data2[0]:data2
// }

const getMyPostByIdUser = (user_id, id) => {
  const data_user = getPostsByUser(user_id);
  if (data_user) {
    const data_post = data_user.filter((post) => post.id === id);
    return data_post ? data_post[0] : false;
  } else {
    return false;
  }
};

//4.D.2.Editar un post

const editMyPost = (user_id, id, data) => {
  const data_user = getPostsByUser(user_id);
  if (data_user) {
    const index = data_user.findIndex((post) => post.id == id);
    const edited_Data = {
      id: id,
      title: data.title ? data.title : data_user[index].title,
      content: data.content ? data.content : data_user[index].content,
      header_image: data.header_image ? data.header_image : data_user[index].header_image,
      user_id: user_id,
      published: true,
    };
    if (index !== -1) {
      postDB[index] = edited_Data;
      return postDB[index];
    }
  } else {
    return false;
  }
};

//4.D.2.Eliminar un post

const deleteMyPost = (user_id, id) => {
    const data_user = getPostsByUser(user_id);
    if (data_user) {
        const index = data_user.findIndex((post) => post.id === id);
        if (index !== -1) {
          postDB.splice(index, 1);
          return true;
        } else {
          return false;
        }
    }
    else{
        return false
    }


};

// //C.VER  LOS POST DEL USUARIO LOGEADO
// const getPostsByUser=(user_id)=>{
//     const data =  postDB.filter((post)=>post.user_id===user_id)
//     return data.length?data:null
// }


module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  getPostsByUser,
  getMyPostByIdUser,
  editMyPost,
  deleteMyPost,

  // getPostByIdUser,
  // getPostMyById
};
