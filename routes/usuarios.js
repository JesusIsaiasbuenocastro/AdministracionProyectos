//rutas para crear usuarios
const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const { check } = require('express-validator');

const router = express.Router();

//crea un usuario 
// endpoint api/usuarios

router.post('/', 
    [
        check('nombre' , 'El nombre es obligatorio').not().isEmpty(),
        check('email' , 'agrega un email valido').isEmail(),
        check('password','El password debe de ser minimo de 6 caracteres').isLength({min: 6})
    ],
    usuarioController.crearUsuario
    
); 
module.exports = router;