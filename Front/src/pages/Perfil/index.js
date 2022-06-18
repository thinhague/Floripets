import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, ImageBackground, StyleSheet, FlatList, StatusBar } from 'react-native';
import * as P from './styles'

import Posts from '../../components/Post'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { usePost } from '../../Context/Contextt'
import api from '../../services/api';


export default function Perfil({ navigation }) {

    const { post, setPost, like, setLike, image, imageBackground, user } = usePost();
    const [perfilPost, setPerfilPost] = useState(true)


    const id = user.id
   
    useEffect(() => {
        const setarMeusFavs = async () => {
            const getResult = await api.get(`getUserFavoritePosts/${id}`)
            setLike(getResult.data.msg)
        }
        setarMeusFavs()

    }, [post])
   
   
    const deletePost = async (item) => {


        setPost(post.filter(posts => posts !== item))

    }

    const deleteLike = (item) => {
        setLike(like.filter(likes => likes !== item))
    }


    return (
        <P.Container>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />
            <P.ContainerTop>
                <ImageBackground source={{ uri: imageBackground }} style={styles.image}>
                    <P.ButtonArrowBack>
                        <TouchableOpacity style={{ width: 40, marginTop: 20 }} onPress={() => navigation.goBack()}>
                            <AntDesign name="left" size={25} color="#fff" />
                        </TouchableOpacity>
                    </P.ButtonArrowBack>

                    <TouchableOpacity onPress={() => navigation.navigate("EditarPerfil")}>
                        <P.ContainerTopBot>
                            <P.ImgPerfil>
                                <P.Perfil source={user.imagePerfil == null || user.imagePerfil == '' ? require('../../../assets/userNotImage.png') : {uri:`http://192.168.0.116:3000/files/${user.imagePerfil}`}} />
                            </P.ImgPerfil>




                        </P.ContainerTopBot>
                    </TouchableOpacity>

                </ImageBackground>
            </P.ContainerTop>


            <P.ContainerMid>

                <P.ContainerDescricao>
                    <P.ContainerDescTop>
                        <P.Usuario>{user.nome}</P.Usuario>
                    </P.ContainerDescTop>

                    <P.ContainerDescBot>
                        <P.Descricao>
                           {user.descricao == null ? "Adicione uma descrição..." : user.descricao}
                        </P.Descricao>
                    </P.ContainerDescBot>

                </P.ContainerDescricao>

                <P.ContainerPostFav>
                    <TouchableOpacity onPress={() => setPerfilPost(true)}>
                        <P.Apelido >Meus Posts</P.Apelido>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => setPerfilPost(false)}>
                        <P.Apelido >Minha lista</P.Apelido>
                    </TouchableOpacity>
                </P.ContainerPostFav>

                <P.layoutBar>
                    <P.layoutBarOnFocus style={perfilPost == true ? { backgroundColor: '#ffa826',transition:"1s" } : null}>

                    </P.layoutBarOnFocus>

                    <P.layoutBarOnFocus style={perfilPost == false ? { backgroundColor: '#ffa826',transition:"1s"  } : null}>

                    </P.layoutBarOnFocus>
                </P.layoutBar>
            </P.ContainerMid>

            {perfilPost == true ?
                <FlatList
                    style={{ flex: 1 }}
                    data={post.filter(e => e.id_usuario == user.id)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Posts item={item} idpost={item.id} deletePost={deletePost} navigation={navigation} />
                    )}

                /> :
                <FlatList
                    style={{ flex: 1 }}
                    data={like}
                    keyExtractor={item => item.id_post}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Posts item={item} idpost={item.id_post} deletePost={deleteLike} navigation={navigation} />
                    )}

                />
            }

        </P.Container>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: '100%'

    }
})