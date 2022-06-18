// const { Sequelize } = require('sequelize');
// const db = require('./database')
import Sequelize from 'sequelize'
import db from '../config/database'



const Usuario = db.define('usuario',{
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
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    senha:{
        type:Sequelize.STRING,
        allowNull:false
    },
    imagePerfil:{
        type:Sequelize.STRING,
        allowNull:true
    },
    imagePerfilBackground:{
        type:Sequelize.STRING,
        allowNull:true
    },
    descricao:{
        type:Sequelize.STRING,
        allowNull:true
    },
    apelido:{
        type:Sequelize.STRING,
        allowNull:true
    },
    telefone:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    instagram:{
        type:Sequelize.STRING,
        allowNull:true
    },
    twitter:{
        type:Sequelize.STRING,
        allowNull:true
    }
    
})

    // Usuario.belongsTo(Post,{
    //     constraint:true,
    //     foreignKey:'idPost'
    // })

   Usuario.sync({alter:true})


// module.exports = Pessoa
export default Usuario