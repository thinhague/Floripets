import Post from '../models/Post';

export default {
    async cadastroPost(req, res) {

        try {

            const { id, nome, apelido, texto, likes, imagePerfil, imagePost } = req.params;
            const image = req.file.filename;

            const result = await Post.create({
                nome,
                apelido,
                texto,
                likes,
                imagePerfil,
                imagePost:image,
                id_usuario: id


            })

            return res.status(200).json({
                erro: false,
                msg: "Post efetuado com sucesso!",
                dados: result
            })

        } catch (err) {
            return res.status(400).json({
                erro: true,
                msg: "Não foi possível efetuar o post!"
            })
        }

    },
    async getPost(req, res) {

        try {

            const getResult = await Post.findAll({
                attributes: ['id', 'nome', 'apelido', 'texto','likes','imagePerfil','imagePost','id_usuario'],
                order: [['id', 'DESC']]

            });


            return res.status(200).json({
                erro: false,
                msg: getResult
            })
        } catch (err) {
            return res.status(400).json({
                erro: true,
                msg: err
            })
        }
    },
    async getUserPost(req, res) {
        try {
            const { id } = req.params;
            const getResult = await Post.findAll({
                attributes: ['id', 'nome', 'apelido', 'texto','imagePerfil','imagePost','id_usuario'],
                order: [['id', 'DESC']],
                where: { id_usuario: id }
            })


            return res.status(200).json({
                erro: false,
                msg: getResult
            })
        } catch (err) {
            return res.status(400).json({
                erro: true,
                msg: err
            })
        }
    },
    async getFavoritePost(req, res) {
        const { id } = req.params;
        try{
            const getResult = await Post.findAll({
                attributes: ['id', 'nome', 'apelido', 'texto','likes','id_usuario','imagePerfil','imagePost'],
                order: [['id', 'DESC']],
                where:{ id: id }
            })

            return res.status(200).json({
                erro: false,
                msg: getResult
            })
        }catch(err){
            return res.status(400).json({
                erro: true,
                msg: err
            })
        }
    },
    async deletePost(req, res){
        const { id } = req.params;
        try {
            const result = await Post.destroy({
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
    async updateApelido(req,res){
        const { id_usuario } = req.params;
        const { apelido, likes } = req.body;

        try{
            const result = await Post.update(
                {apelido},
                {where: {id_usuario}}
            )
            await Post.update({ likes }, { where: {id_usuario} })

            return res.status(200).json({
                erro: false,
                msg: result

            })
        
        }catch(err){
            return res.status(400).json({
                erro: true,
                msg: "Erro:não foi possível alterar o item!"
            })
        }
    },
    async updateLikes(req,res){
        const { id } = req.params;
        const { likes } = req.body;

        try{
            
           const result = await Post.update({ likes }, { where: {id} })

            return res.status(200).json({
                erro: false,
                msg: result

            })
        
        }catch(err){
            return res.status(400).json({
                erro: true,
                msg: "Erro:não foi possível alterar o item!"
            })
        }
    }



}