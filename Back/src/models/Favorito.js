import Sequelize from 'sequelize'
import db from '../config/database'
import Post from '../models/Post'
import Usuario from '../models/Usuario'

const Favorito = db.define('favorito',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
     apelido:{
        type:Sequelize.STRING,
        allowNull:true
    },
    texto:{
        type:Sequelize.STRING,
        allowNull:false
    },
    likes:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    imagePerfil:{
        type:Sequelize.STRING,
        allowNull:true
    },
    imagePost:{
        type:Sequelize.STRING,
        allowNull:true
    }
})

Favorito.belongsTo(Usuario,{
    constraint:true,
    foreignKey:'id_usuario'
})

Favorito.belongsTo(Post,{
    constraint:true,
    foreignKey:'id_post'
})

Favorito.sync()

export default Favorito