# Rutas

- /api/v1/users
- /api/v1/users/:id
- /api/v1/users/me

- /api/v1/auth/login
- /api/v1/auth/register
- /api/v1/auth/password-recovery
- /api/v1/auth/verify-account

- /api/v1/users
- - GET 

- /api/v1/users/:id
- - GET  
- - PUT (ADMIN)
- - DELETE (ADMIN)

- /api/v1/users/me
- - GET
- - PUT
- - PATCH
- - DELETE

- /api/v1/auth/login
- - POST

- /api/v1/auth/register
- - POST

- /api/v1/auth/password-recovery
- - POST 
- - PATCH



-  /api/v1/posts
- - POST(PROTEGIDA) (Crear posts) X
- - GET (*)   (Ver los posts de todos los usuarios) X


- /api/v1/posts/:id
 - - GET(*) (Ver un post en especifico) X
 
 - /api/v1/users/me/posts 
- - GET(PROTEGIDA) (Ver unicamente los posts del usuario loggeado) X

- /api/v1/users/me/posts/:id 
- - GET(PROTEGIDA) (Ver un post en especifico pero solo los del usuario loggeado) X
- - PUT(PROTEGIDA) (Editar un post) X
- - DELETE(PROTEGIDA) (Eliminar un post) x

    