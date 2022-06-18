import Sequelize from 'sequelize'
import db from '../config/database'
import Post from '../models/Post'
import Comments from '../models/Comments'
import Usuario from './Usuario'

const FavComments = db.define('favcomments',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    }
  
})

FavComments.belongsTo(Usuario,{
    constraint:true,
    foreignKey:'id_usuario'
})

FavComments.belongsTo(Comments,{
    constraint:true,
    foreignKey:'id_comments'
})

FavComments.belongsTo(Post,{
    constraint:true,
    foreignKey:'id_post'
})

FavComments.sync()

export default FavComments