import Favorito from '../models/Favorito'

export default {
    async favoritar(req, res) {

        const { id, idpost } = req.params;
        const { nome, texto, apelido, likes, imagePost, imagePerfil } = req.body;

        try {

            const verificaFavorito = await Favorito.findAll({
                where: {
                    id_usuario: id,
                    id_post: idpost
                }
            })

            if (verificaFavorito[0]) {

                await Favorito.destroy({
                    where: {
                        id_usuario: id,
                        id_post: idpost
                    }
                })
                return res.json({
                    erro: true,
                    msg: "Desfavoritado com sucesso!"
                })
            }

            const result = await Favorito.create({
                id_usuario: id,
                id_post: idpost,
                nome,
                apelido,
                texto,
                likes,
                imagePerfil,
                imagePost
            })

            return res.status(200).json({
                erro: false,
                msg: "Favoritado com sucesso!"
            })
        } catch (err) {
            return res.status(400).json({
                erro: true,
                msg: "Falha!"
            })
        }
    },
    async verificaFavoritar(req, res) {

        const { id, idpost } = req.params;
        try {
            const verificaFavorito = await Favorito.findAll({
                where: {
                    id_usuario: id,
                    id_post: idpost
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
    async getUserFavoritePosts(req, res) {
        try {
            const { id } = req.params;
            const getResult = await Favorito.findAll({
                attributes: ['id_post', 'nome', 'apelido', 'texto','imagePost','imagePerfil'],
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
    async deleteFavPost(req, res) {
        const { id } = req.params;
        try {
            const result = await Favorito.destroy({
                where: { id_post: id }
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
    async updateApelidoFav(req, res) {
        const { id_usuario } = req.params;
        const { apelido } = req.body;

        try {
            const result = await Favorito.update(
                { apelido },
                { where: { id_usuario } }
            )


            return res.status(200).json({
                erro: false,
                msg: result

            })

        } catch (err) {
            return res.status(400).json({
                erro: true,
                msg: "Erro:não foi possível alterar o item!"
            })
        }
    },


}