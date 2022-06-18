import Comments from '../models/Comments';

export default {
    async addComments(req, res) {

        const { id, id_usuario } = req.params;
        const { nome, apelido, texto, likes, imagePerfil } = req.body;

        try{
            const result = await Comments.create({
                nome,
                apelido,
                texto,
                likes,
                imagePerfil,
                id_post:id,
                id_usuario
            })

            return res.status(200).json({
                error:false,
                msg:"Comentário adicionado com sucesso !",
                dados:result
            })

        }catch(err){
            throw err;
            return res.status(400).json({
                error:true,
                msg:"Comentário não efetuado !",
                dados:err
                
            })
        }

    },
    async getComments(req, res) {
        const { id } = req.params;
        try{
            const getResult = await Comments.findAll({
                atributes:['nome','apelido','texto','likes','imagePerfil'],
                order:[['id','DESC']],
                where:{ id_post:id }
            })

            return res.status(200).json({
                error:false,
                dados:getResult
            })

        }catch(err){
            return res.status(400).json({
                error:true,
                dados:err
            })
        }

    },
    async deleteComments(req, res){
        const { id } = req.params;
        try {
            const result = await Comments.destroy({
                where: { id }
            })
            
            return res.status(200).json({
                erro: false,
                msg: result

            })

        } catch (err) {
            return res.status(400).json({
                erro: true,
                msg: "Erro:não foi possível excluir o item!"
            })
        }
    },
    async updateCommentsLikes(req,res){
        const { id } = req.params;
        const { likes, imagePerfil } = req.body;

        try{
            
           const result = await Comments.update({ likes }, { where: {id} })
           const image = await Comments.update({ imagePerfil }, { where: {id_usuario:id} })

            return res.status(200).json({
                erro: false,
                results: result,
                imagePerfil:image

            })
        
        }catch(err){
            return res.status(400).json({
                erro: true,
                msg: "Erro:não foi possível alterar o item!"
            })
        }
    }
}