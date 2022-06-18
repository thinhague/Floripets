import React, { useState, useEffect } from "react";
import { Text, View } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { usePost } from "../../Context/Contextt";
import * as P from './style'
import { Feather, AntDesign } from '@expo/vector-icons';
import api from "../../services/api";





export default function Comments({ item, idComments }) {
    const { image, user, comments, setComments, idCommentsPost } = usePost()
    const [color, setColor] = useState("#fff")

    const id = user.id

    const deleteComments = async () => {
        setComments(comments.filter(e => e.id !== idComments))
        await api.delete(`deleteComments/${idComments}`)
    }

    const verificaColor = async () => {
        const getResult = await api.get(`getUserFavoriteComments/${id}`)
        const likeItens = getResult.data.msg.map(e => e.id_comments)


        if (likeItens.indexOf(idComments) > -1) {
            setColor("#FFA826")

        }

    }

    useEffect(() => {
        verificaColor()
    }, [])

    const like = async (indice) => {
        const verificaFavorito = await api.get(`verificaFavoritarComments/${id}/${indice}/${idCommentsPost}`)
        try {
            if (verificaFavorito.data.msg[0]) {
                await api.delete(`deleteFavComments/${id}/${indice}/${idCommentsPost}`)
                await api.patch(`updateCommentsLikes/${indice}`, {
                    likes: item.likes - 1
                })
                setColor('#fff')
                setComments(comments.map(item => {
                    if (item.id == indice) {

                        return (
                            {
                                id: item.id,
                                nome: item.nome,
                                apelido: item.apelido,
                                texto: item.texto,
                                likes: item.likes - 1,
                                id_usuario: item.id_usuario
                            }
                        )

                    }
                    return item
                }))


            }
            else if (!verificaFavorito.data.msg[0]) {
                await api.post(`favComments/${id}/${indice}/${idCommentsPost}`)
                await api.patch(`updateCommentsLikes/${indice}`, {
                    likes: item.likes + 1,
                })
                setColor('#FFA826')
                setComments(comments.map(item => {
                    if (item.id == indice) {

                        return (
                            {
                                id: item.id,
                                nome: item.nome,
                                apelido: item.apelido,
                                texto: item.texto,
                                likes: item.likes + 1,
                                id_usuario: item.id_usuario

                            }
                        )



                    }
                    return item
                }))
            }


        } catch (error) {
          return  error

        }

    }
 
    return (
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#323436' }}>
            <P.ContainerTop>

                <P.ContainerTopLeft>
                    <P.ImgPerfil>
                        <P.Perfil source={item.imagePerfil == "null" || item.imagePerfil == '' || item.imagePerfil == null ? require('../../../assets/userNotImage.png') : { uri: `http://192.168.0.116:3000/files/${item.imagePerfil}` }}></P.Perfil>
                    </P.ImgPerfil>
                </P.ContainerTopLeft>

                <P.ContainerTopRigth>
                    <P.ContainerUser>
                        <P.Apelido>
                            {item.nome}
                        </P.Apelido>
                        <P.Usuario>
                            {item.apelido}
                        </P.Usuario>
                    </P.ContainerUser>
                </P.ContainerTopRigth>

            </P.ContainerTop>

            <P.ViewText>
                <Text style={{ color: '#fff' }}>
                    {item.texto}
                </Text>
            </P.ViewText>

            {item.id_usuario == user.id ?

                <P.ContainerBot>
                    <TouchableOpacity onPress={() => deleteComments()}>
                        <Feather name="trash-2" size={20} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => like(item.id)}>
                        <P.ContainerLike>
                            <P.TextLike>{item.likes}</P.TextLike>
                            <AntDesign name="like2" size={20} color={color} />
                        </P.ContainerLike>
                    </TouchableOpacity>
                </P.ContainerBot>
                :

                <P.ContainerBot>
                    <TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => like(item.id)}>
                        <P.ContainerLike>
                            <P.TextLike>{item.likes}</P.TextLike>
                            <AntDesign name="like2" size={20} color={color} />
                        </P.ContainerLike>
                    </TouchableOpacity>
                </P.ContainerBot>
            }


        </View>
    )
}