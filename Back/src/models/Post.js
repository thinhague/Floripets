import Sequelize from 'sequelize'
import db from '../config/database'
import Usuario from './Usuario'

const Post = db.define('post',{
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
    },
})

Post.belongsTo(Usuario,{
    constraint:true,
    foreignKey:'id_usuario'
})



 Post.sync({alter:true})

export default Post