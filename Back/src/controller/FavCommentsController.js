import FavComments from '../models/FavComments'

export default {
    async FavoritatComentario(req, res) {
        const { id, id_comments, id_post } = req.params;

        try {

            const result = FavComments.create({
                id_usuario:id,
                id_comments,
                id_post
            })

            return res.status(200).json({
                "error": false,
                "dados": result
            })
        } catch (error) {

        }
    },
    async verificaFavoritarComments(req, res) {

        const { id, id_comments, id_post } = req.params;
        try {
            const verificaFavorito = await FavComments.findAll({
                where: {
                    id_usuario:id,
                    id_comments,
                    id_post
                }
            })

            return res.status(200).json({
                erro: false,
                msg: verificaFavorito
            })

        } catch (err) {
            return res.status(400).json({
                erro: true,
                msg: "Falha!"
            })
        }

    },
    async deletefavComments(req, res){
        const { id, id_comments, id_post } = req.params;
        try {
            const deleted = await FavComments.destroy({
                where:{
                    id_usuario:id,
                    id_comments,
                    id_post
                }
            })

            return res.status(200).json({
                erro:false,
                msg:deleted
            })
        } catch (error) {
            return res.status(400).json({
                erro: true,
                msg: "Falha!"
            })
        }
    },
    async getUserFavoriteComments(req, res) {
        try {
            const { id } = req.params;
            const getResult = await FavComments.findAll({
                attributes: ['id_comments'],
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
}