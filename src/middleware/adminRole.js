//saber siel rol es admin o no

const roleAdminMiddleware = (req, res, next) => {
    const rol = req.user.rol

    if(rol === 'admin'){
        next()
    }else {
        res.status(401).json({status: 'error', message: 'No tienes el rol autorizado para hacer este request'})
    }
}

exports.roleAdminMiddleware = roleAdminMiddleware