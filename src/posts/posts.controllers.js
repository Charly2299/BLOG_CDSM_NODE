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

//A.VER TODOS LOS POST
const getAllPosts =()=>{
    return postDB

}


//A.CREAR UN POST
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

//B. VER UN POST POR ID DEL POST
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

//C.VER  LOS POST DEL USUARIO LOGEADO
const getPostsByUser=(user_id)=>{
    const data =  postDB.filter((post)=>post.user_id===user_id)
    return data.length?data:null
}


//D.VER  UN  POST  EN ESPECIFICO PERO SOLO LOS DEL USUARIO LOGEADO
const getMyPostByIdUser=(user_id,id)=>{
 const data1=getPostsByUser(user_id)
 const data2=data1?data1.filter((post)=>post.id===id):undefined
 return data2?data2[0]:data2

}

//D.EDITAR UN POST DE UN USUARIO LOEADO  //falta arrerarlo!!!
const editMyPost=(user_id,id,data)=>{
    let data1=getPostsByUser(user_id)

    const post=data1.filter((post)=>post.id===data.id)

        const index=data1.findIndex((post)=>post.id==id)

        if(index!==-1){
            data1[index]={
                id:id,
                title:data.title,
                content:data.content,
                header_image:data.header_image,
                user_id:user_id,
                published:true

            }
            return postDB[index]
        }
        else{
            return createPost(data,user_id)
        }
}


//D.ELIIMINAR UN POST  //falta arreglar

const deleteMyPost=(user_id,id)=>{
    let dataUser=getPostsByUser(user_id)

const index=dataUser.findIndex(post=>post.id===id)
if(index!==-1){
    dataUser.splice(index,1)
    return true
}
else{
    return false
}
}


// //C.VER  LOS POST DEL USUARIO LOGEADO
// const getPostsByUser=(user_id)=>{
//     const data =  postDB.filter((post)=>post.user_id===user_id)
//     return data.length?data:null
// }


//PRUEBA DEQUE ME TRAE
const prueba=(user_id)=>{
  let dataUser=getPostsByUser(user_id)
  return dataUser
}


module.exports={
    getAllPosts,
    createPost,
    getPostById,
    getPostsByUser,
    getMyPostByIdUser,
    editMyPost,
    deleteMyPost,
    prueba
    // getPostByIdUser,
    // getPostMyById
}