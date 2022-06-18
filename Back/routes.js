// const express = require('express')
import express from 'express'
import multer from 'multer';
import UsuarioController from './src/controller/UsuarioController'
import PostController from './src/controller/PostController';
import FavoritoController from './src/controller/FavoritoController';
import CommentsController from './src/controller/CommentsController';
import FavCommentsController from './src/controller/FavCommentsController';
const routes = express.Router()
import uploadConfig from './src/config/multer';

const upload = multer(uploadConfig.upload('./tmp'))
routes.post('/uploadImage/:id',upload.single('file'),UsuarioController.uploadImage)

routes.get('/usuario/:id',UsuarioController.getUsuario);
routes.get('/getPost',PostController.getPost)
routes.get('/getUserPost/:id',PostController.getUserPost)
routes.post('/cadastro',UsuarioController.cadastro);
routes.post('/login',UsuarioController.login);
routes.post('/post/:id/:nome/:apelido/:texto/:likes/:imagePerfil',upload.single('file'),PostController.cadastroPost)
routes.delete('/usuario/:id',UsuarioController.deleteUsuario);
routes.delete('/deletePost/:id',PostController.deletePost)
routes.delete('/deleteFavPost/:id',FavoritoController.deleteFavPost)
routes.patch('/usuario/:id',UsuarioController.editItens);
routes.patch('/editImagemPerfil/:id',UsuarioController.editImagePerfil)
routes.patch('/updateApelido/:id_usuario',PostController.updateApelido)
routes.patch('/updateApelidoFav/:id_usuario',FavoritoController.updateApelidoFav)
routes.patch('/updateLikes/:id',PostController.updateLikes)

routes.post('/favorito/:id/:idpost',FavoritoController.favoritar)
routes.get('/verificaFavorito/:id/:idpost',FavoritoController.verificaFavoritar)
routes.get('/getFavoritePost/:id',PostController.getFavoritePost)
routes.get('/getUserFavoritePosts/:id',FavoritoController.getUserFavoritePosts)

routes.post('/addComments/:id/:id_usuario',CommentsController.addComments)
routes.get('/getComments/:id',CommentsController.getComments)
routes.delete('/deleteComments/:id',CommentsController.deleteComments)
routes.patch('/updateCommentsLikes/:id',CommentsController.updateCommentsLikes)

routes.post('/favComments/:id/:id_comments/:id_post',FavCommentsController.FavoritatComentario)
routes.get('/verificaFavoritarComments/:id/:id_comments/:id_post',FavCommentsController.verificaFavoritarComments)
routes.get('/getUserFavoriteComments/:id',FavCommentsController.getUserFavoriteComments)
routes.delete('/deletefavComments/:id/:id_comments/:id_post',FavCommentsController.deletefavComments)












// module.exports = routes
export default routes
