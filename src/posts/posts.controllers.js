const uuid = require("uuid");
//declaramos un post del usuario por defgfault

const postDB=[
    {
    "id": "2f0adbaf-6f9b-4d85-be57-ec4c1685f299",
	"title": "Halo es mejor juego de 2022?",
	"content":"Los juegos de Halo son juegos de disparos en primera persona que marcaron una generación mucho antes de que Call of Duty o Battlefield se convirtieran en la norma",
	"header_image": "url_to_img",
	"user_id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",//Aqui hara referencia al usuario de tu userDB
	"published": true
    }
]

//VER TODOS LOS POST
const getAllPosts =()=>{
    return postDB

}


//CREAR UN POST
const createPost =(data,user_id)=>{
    const newPost ={
        id: uuid.v4(),
        title: data.title,
        content:data.content,
        header_image: data.header_image?data.header_image:'',
        user_id: user_id,//Aqui hara referencia al usuario de tu userDB
        published: true
    }
    postDB.push(newPost)
    return newPost
}

// VER UN POST POR ID DEL POST
const getPostById=(id)=>{
    const data=postDB.filter((post)=>post.id===id)
    return data.length?data[0]:null
}




// const getPostByIdUser=(id)=>{
//     const data=postDB.filter((post)=>post.user_id===id)
//     return data.length?data[0]:null
// }

// const getPostMyById=(user_id,id)=>{
//     const data2=getPostByIdUser(user_id)
//     const data=postDB.filter((post)=>post.id===id)
//     return data.length?data[0]:null
// }

//VER  LOS POST DEL USUARIO LOGEADO
const  getPostsByUser=(user_id)=>{
    const data =  postDB.filter((post)=>post.user_id===user_id)
    return data.length?data:null
}


module.exports={
    getAllPosts,
    createPost,
    getPostById,
    getPostsByUser
    // getPostByIdUser,
    // getPostMyById
}