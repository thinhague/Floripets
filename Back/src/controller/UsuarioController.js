import Usuario from '../models/Usuario';
import Post from '../models/Post';
import * as Yup from 'yup'

export default {
    async cadastro(req, res) {

        const schema = Yup.object().shape({
            nome: Yup.string()
                .required("Erro: Campo nome é obrigatório!")
                .min(3, "Erro: Campo nome precisa ter pelo menos 3 caracteres!"),
            email: Yup.string()
                .required("Erro: Campo email é obrigatório!")
                .email("Erro: Por favor informar um e-mail válido!"),
            senha: Yup.string()
                .required("Erro: Campo senha é obrigatório!")
                .min(6, "Erro: Campo senha precisa ter pelo menos 6 caracteres!"),
        });

        try {

            await schema.validate(req.body)

            const { nome, email, senha, descricao, apelido, telefone, instagram, twitter, imagePerfil, imagePerfilBackground } = req.body;

            const VerificarUser = await Usuario.findAll({
                where: {
                    email
                }
            })


            if (VerificarUser[0]) {
                return res.status(400).json({
                    erro: true,
                    msg: email
                })
            }

            const result = await Usuario.create({
                nome,
                email,
                senha,
                imagePerfil,
                imagePerfilBackground,
                descricao,
                apelido,
                telefone,
                instagram,
                twitter
            })
            return res.status(201).json({
                erro: false,
                cadastroEfetuado: result
            })

        } catch (err) {
            return res.status(400).json({
                erro: true,
                msg: err.errors
            })
        }

    },

    async login(req, res) {

        const schema = Yup.object().shape({
            email: Yup.string()
                .required("Erro: Campo email é obrigatório!")
                .email("Erro: Por favor informar um e-mail válido!"),
            senha: Yup.string()
                .required("Erro: Campo senha é obrigatório!")
        });

        try {

            await schema.validate(req.body);
            const { email, senha } = req.body;
            const verificaLogin = await Usuario.findOne({
                where: {
                    email,
                    senha
                }
            })

            if (verificaLogin) return res.status(200).json({
                erro: false,
                msg: "Login efetuado com sucesso!",
                dados: verificaLogin
            })

            else if (!verificaLogin) return res.status(400).json({
                erro: true,
                msg: "Falha ao efetuar o login!"
            })

        } catch (err) {
            return res.status(400).json({
                erro: true,
                msg: err.errors
            })
        }
    },
    async editImagePerfil(req, res) {

        try {
            const { id } = req.params;
            const { imagemPerfil } = req.body;
            const result = await Usuario.update({ imagemPerfil }, { where: { id } });

            
            return res.status(200).json({
                erro: false,
                msg: result

            })

        } catch (err) {
            console.log(err);
            return res.status(400).json({
                erro: true,
                msg: "Error familia"
            })
        }
    },

    async getUsuario(req, res) {
        try {
            const { id } = req.params;
            const getResult = await Usuario.findOne({
                where: { id }
            })


            return res.status(201).json({
                erro: false,
                dados: getResult
            })

        } catch (err) {
            return res.status(400).json({
                erro: true,
                msg: err.error
            })

        }
    },

    async deleteUsuario(req, res) {

        const { id } = req.params;
        try {
            const result = await Usuario.destroy({
                where: { id }
            })
            
            return res.status(200).json({
                erro: false,
                msg: result

            })

        } catch (err) {
            return res.status(400).json({
                erro: true,
                msg: "Erro:não foi possível cadastrar!"
            })
        }
    },

    async editItens(req, res) {

        const { apelido, telefone, email, senha, descricao, instagram, twitter } = req.body;
        const { id } = req.params;

        try {
            await Usuario.update({ telefone }, { where: { id } });
            await Usuario.update({ apelido }, { where: { id } });
            await Usuario.update({ email }, { where: { id } })
            await Usuario.update({ senha }, { where: { id } })
            await Usuario.update({ descricao }, { where: { id }})
            await Usuario.update({ instagram }, { where: { id }})
            await Usuario.update({ twitter }, { where: { id }})

            return res.status(200).json({
                erro: false,
                msg: "Alterado com sucesso!"
            })


        } catch (err) {
            return res.status(400).json({
                erro: true,
                msg: "Erro:não foi possível cadastrar!"
            })
        }
    },
    async uploadImage(req,res) {
        const imageLocal = req.file.filename;
        const imagens = req.file;
        const { id } = req.params;
        try {
            await Usuario.update({ imagePerfil:imageLocal }, { where: { id } });
            await Post.update({ imagePerfil:imageLocal }, { where: { id_usuario:id } });
            return res.status(201).json({
                erro:false,
                result:imagens
            })
        } catch (error) {
            return res.status(400).json({
                erro:true
            })
        }
       
    }
}
