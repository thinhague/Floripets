import React, { useState, useEffect, useReducer } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as P from './styles'
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { usePost } from '../../Context/Contextt';
import api from '../../services/api';


function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export default function PostComments({ navigation, item, idpost, index, }) {

    const { user, image, setPost, post, postUser, setPostUser, setidCommentsPost } = usePost()
    const [heart, setHeart] = useState("#fff")

    const id = user.id

    const verificaHeart = async () => {
        const getResult = await api.get(`getUserFavoritePosts/${id}`)
        const likeItens = getResult.data.msg.map(e => e.id_post)
        if (likeItens.indexOf(idpost) > -1) {
            setHeart("#FFA826")

        }


    }
    useEffect(() => {
        verificaHeart()

    }, [])
    const initialState = { count: item.likes };


    const deletePosts = async () => {
        setPostUser(postUser.filter(posts => posts.id !== idpost))
        setPost(post.filter(posts => posts.id !== idpost))

        await api.delete(`deleteFavPost/${idpost}`)
        await api.delete(`deletePost/${idpost}`)


    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const Like = async () => {
        try {
            const verificaFavorito = await api.get(`verificaFavorito/${id}/${idpost}`)
            const getPost = await api.get(`getFavoritePost/${idpost}`)

            if (!verificaFavorito.data.msg[0]) {
                setHeart("#FFA826")
                await api.post(`favorito/${id}/${idpost}`, {
                    nome: getPost.data.msg[0].nome,
                    apelido: getPost.data.msg[0].apelido,
                    texto: getPost.data.msg[0].texto,
                    likes: getPost.data.msg[0].likes
                })
                dispatch({ type: 'increment' })
                await api.patch(`updateLikes/${idpost}`, {
                    likes: state.count + 1
                })


            } else if (verificaFavorito.data.msg[0]) {

                setHeart("#fff")
                await api.post(`favorito/${id}/${idpost}`, {
                    nome: getPost.data.msg[0].nome,
                    apelido: getPost.data.msg[0].apelido,
                    texto: getPost.data.msg[0].texto,
                    likes: getPost.data.msg[0].likes
                })
                dispatch({ type: 'decrement' })
                await api.patch(`updateLikes/${idpost}`, {
                    likes: state.count - 1
                })
            }


        } catch (err) {
            return err
        }

    }

    const PageComments = () => {
        setidCommentsPost(idpost)
        return navigation.navigate("Comentario")
    }

    return (
        <P.Container>
            <P.ContainerTop>

                <P.ContainerTopLeft>
                    <P.ImgPerfil>
                        <P.Perfil source={item.imagePerfil == "null" || item.imagePerfil == '' || item.imagePerfil == null ? require('../../../assets/userNotImage.png') : { uri: `http://192.168.0.116:3000/files/${item.imagePerfil}` }}></P.Perfil>
                    </P.ImgPerfil>
                </P.ContainerTopLeft>

                <P.ContainerTopRigth>
                    <P.ContainerUser>
                        <P.Apelido>
                            {item.apelido}
                        </P.Apelido>
                        <P.Usuario>
                            @{item.nome}
                        </P.Usuario>
                    </P.ContainerUser>
                </P.ContainerTopRigth>

            </P.ContainerTop>

            <P.ContainerMid>
                <P.ScrollViewText>

                    <Text style={{ color: "#fff" }}>{item.texto}</Text>
                </P.ScrollViewText>
                <P.ViewImage>
                    <P.ViewImageChildren>
                        <P.imagePost source={{ uri: `http://192.168.0.116:3000/files/${item.imagePost}` }} />
                    </P.ViewImageChildren>
                </P.ViewImage>

            </P.ContainerMid>

            {item.id_usuario == user.id ?
                <P.ContainerBot>


                    <TouchableOpacity onPress={() => deletePosts()}>
                        <Feather name="trash-2" size={25} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Like()}>
                        <P.ContainerHeartLike>
                            <P.TextLike>{state.count}</P.TextLike>
                            <SimpleLineIcons name="heart" size={25} color={heart} />
                        </P.ContainerHeartLike>
                    </TouchableOpacity>


                </P.ContainerBot>
                :


                <P.ContainerBot>

                    <TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Like()}>
                        <P.ContainerHeartLike>

                            <P.TextLike>{state.count}</P.TextLike>

                            <SimpleLineIcons name="heart" size={25} color={heart} />
                        </P.ContainerHeartLike>
                    </TouchableOpacity>

                </P.ContainerBot>
            }
        </P.Container>
    )
}

