import React, { useState } from 'react';
import api from '../../services/api';
import { usePost } from '../../Context/Contextt'
import * as M from './styles'

import { Alert, Keyboard, Modal, Text } from 'react-native'


export default function Modall({ visivel, setVisivel, chave, setChave }) {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [status, setStatus] = useState({
        type: "",
        msg: ""
    })

    const { user, setUser, setPost, post } = usePost()

    const cancelarAlteracao = () => {
        setVisivel(false)
        setChave(0)
        setValue1("")
        setValue2("")
    }

    const editItem = async () => {

        const id = user.id

        try {
            if (value1 !== value2) {
                Keyboard.dismiss()
                Alert.alert("Os campos devem ser iguais!")
                return
            }

            if (chave == 1) {
                await api.patch(`updateApelido/${id}`, {
                    apelido: value1
                })
                await api.patch(`usuario/${id}`, {
                    apelido: value1
                })
                await api.patch(`updateApelidoFav/${id}`, {
                    apelido: value1
                })
            }
            else if (chave == 2) {
                await api.patch(`usuario/${id}`, {
                    telefone: value1
                })
            }
            else if (chave == 3) {
                await api.patch(`usuario/${id}`, {
                    email: value1
                })
            }
            else if (chave == 4) {
                await api.patch(`usuario/${id}`, {
                    senha: value1
                })
            }
            setValue1("")
            setValue2("")

            const getResult = await api.get(`usuario/${id}`)
            setUser({
                id: getResult.data.dados.id,
                nome: getResult.data.dados.nome,
                email: getResult.data.dados.email,
                senha: getResult.data.dados.senha,
                imagePerfil: getResult.data.dados.imagePerfil,
                imagePerfilBackground: getResult.data.dados.imagePerfilBackground,
                descricao: getResult.data.dados.descricao,
                apelido: getResult.data.dados.apelido,
                telefone: getResult.data.dados.telefone,
                instagram: getResult.data.dados.instagram,
                twitter: getResult.data.dados.twitter
            })

            const getPost = await api.get('getPost')
            setPost(getPost.data.msg)

            return setVisivel(false)
        }
        catch (err) {
            setStatus({
                type: "error",
                msg: "Não foi possível fazer a alteração!"
            })
        }
    }

    return (

        <Modal
            animationType="fade"
            visible={visivel}
            transparent={true}

        >
            <M.Container>
                <M.ContainerModal>
                    <M.ContainerModalTop>

                        <M.ContainerAlterarSenha>
                            <Text style={{ color: "#fff", paddingBottom: 5 }}>{chave == 1 ? "Novo Apelido" : chave == 2 ? "Novo Telefone" : chave == 3 ? "Novo Email" : chave == 4 ? "Nova Senha" : ""}</Text>
                            <M.InputModal
                                secureTextEntry={chave == 4 ? true : false}
                                onChangeText={text => setValue1(text)}
                                value={value1}
                            />
                        </M.ContainerAlterarSenha>

                        <M.ContainerAlterarSenha>
                            <Text style={{ color: "#fff", paddingBottom: 5 }}>{chave == 1 ? "Confirmar Apelido" : chave == 2 ? "Confirmar Telefone" : chave == 3 ? "Confirmar Email" : chave == 4 ? "Confirmar Senha" : ""}</Text>
                            <M.InputModal
                                secureTextEntry={chave == 4 ? true : false}
                                onChangeText={text => setValue2(text)}
                                value={value2}
                            />
                        </M.ContainerAlterarSenha>

                    </M.ContainerModalTop>

                    <M.ContainerModalBot>
                        <M.CancelButton onPress={() => cancelarAlteracao()}>
                            <M.TextButton>Cancelar</M.TextButton>
                        </M.CancelButton>

                        <M.ButtonSucess onPress={() => editItem()}>
                            <M.TextButton>Salvar</M.TextButton>
                        </M.ButtonSucess>


                    </M.ContainerModalBot>
                </M.ContainerModal>
            </M.Container>
        </Modal>


    )
}