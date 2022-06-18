import Sequelize from 'sequelize'
import db from '../config/database'
import Post from '../models/Post'
import Usuario from './Usuario'

const Comments = db.define('comments',{
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
    }
   
})


Comments.belongsTo(Post,{
    constraint:true,
    foreignKey:'id_post'
})

Comments.belongsTo(Usuario,{
    constraint:true,
    foreignKey:'id_usuario'
})

Comments.sync()

export default Comments