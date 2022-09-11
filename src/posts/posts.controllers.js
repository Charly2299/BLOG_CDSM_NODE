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

//ver todos los post
const getAllPosts =()=>{
    return postDB

}


//crear un post  
const createPost =(data)=>{
    const newPost ={

    }
}



module.exports={
    getAllPosts
}