// const { Sequelize } = require('sequelize');
import Sequelize from 'sequelize'


const sequelize = new Sequelize('trabalho','postgres','thinhague',{
    host:'localhost',
    dialect:'postgres'
});
 
sequelize.authenticate().then(()=>{
    console.log('Conectou com o banco');
}).catch((error)=>{
    console.log(`Falha ao conectar com o banco. ${error}`);
})

// module.exports = sequelize
export default sequelize

