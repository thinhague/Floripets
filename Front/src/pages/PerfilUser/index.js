import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, ImageBackground, StyleSheet, FlatList, StatusBar, ScrollView } from 'react-native';
import * as P from '../Perfil/styles'

import Posts from '../../components/Post'
import { AntDesign, Feather, Fontisto, Ionicons } from '@expo/vector-icons';
import { usePost } from '../../Context/Contextt'

export default function Perfil({ navigation }) {

    const { post, setPost, like, setLike, PerfilUser, infoPost, image, imageBackground, user } = usePost();
    const [perfilPost, setPerfilPost] = useState(true)


    const deletePost = async (item) => {


        setPost(post.filter(posts => posts !== item))

    }
    return (
        <P.Container>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />
            <P.ContainerTop>
                <ImageBackground  style={styles.image}>
                    <P.ButtonArrowBack>
                        <TouchableOpacity style={{ width: 40, marginTop: 20 }} onPress={() => navigation.goBack()}>
                            <AntDesign name="left" size={25} color="#fff" />
                        </TouchableOpacity>
                    </P.ButtonArrowBack>

                    <P.ContainerTopBot>
                        <P.ImgPerfil>
                            <P.Perfil source={PerfilUser.imagePerfil == "null" || PerfilUser.imagePerfil == '' || PerfilUser.imagePerfil == null ? require('../../../assets/userNotImage.png') : { uri: `http://192.168.0.116:3000/files/${PerfilUser.imagePerfil}` }} />
                        </P.ImgPerfil>




                    </P.ContainerTopBot>

                </ImageBackground>
            </P.ContainerTop>


            <P.ContainerMid>

                <P.ContainerDescricao>
                    <P.ContainerDescTop>
                        <P.Usuario>{PerfilUser.nome}</P.Usuario>
                    </P.ContainerDescTop>

                    <P.ContainerDescBot>
                        <P.Descricao>
                            {PerfilUser.descricao}
                        </P.Descricao>
                    </P.ContainerDescBot>

                </P.ContainerDescricao>

                <P.ContainerPostFav>
                    <TouchableOpacity onPress={() => setPerfilPost(true)}>
                        <P.Apelido>Posts</P.Apelido>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => setPerfilPost(false)}>
                        <P.Apelido >Contato</P.Apelido>
                    </TouchableOpacity>
                </P.ContainerPostFav>

                <P.layoutBar>
                    <P.layoutBarOnFocus style={perfilPost == true ? { backgroundColor: '#ffa826', transition:"1s" } : null}>

                    </P.layoutBarOnFocus>

                    <P.layoutBarOnFocus style={perfilPost == false ? { backgroundColor: '#ffa826', transition:"1s" } : null}>

                    </P.layoutBarOnFocus>
                </P.layoutBar>
            </P.ContainerMid>







            {perfilPost == true ?
                <FlatList
                    style={{ flex: 1 }}
                    data={post.filter(e => e.id_usuario == infoPost.id_usuario)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Posts item={item} idpost={item.id} deletePost={deletePost} navigation={navigation} />
                    )}

                /> :
                <ScrollView>
                    <P.ContatoView>

                        <P.TopView>
                            <P.IconView>
                                <Ionicons name="call-outline" size={24} color="#fff" />
                            </P.IconView>

                            <P.TextView>
                                <P.Usuario>Telefone</P.Usuario>
                            </P.TextView>
                        </P.TopView>

                        <P.RightView>

                            <P.Descricao>{PerfilUser.telefone == null || PerfilUser.telefone == undefined ? "Não possui número" : PerfilUser.telefone}</P.Descricao>
                        </P.RightView>

                    </P.ContatoView>

                    <P.ContatoView>

                        <P.TopView>
                            <P.IconView>
                                <Fontisto name="email" size={24} color="#fff" />
                            </P.IconView>

                            <P.TextView>
                                <P.Usuario>email</P.Usuario>
                            </P.TextView>
                        </P.TopView>


                        <P.RightView>
                            <P.Descricao>{PerfilUser.email}</P.Descricao>
                        </P.RightView>
                    </P.ContatoView>



                    <P.ContatoView>

                        <P.TopView>
                            <P.IconView>
                                <AntDesign name="instagram" size={24} color="#fff" />
                            </P.IconView>

                            <P.TextView>
                                <P.Usuario>Instagram</P.Usuario>
                            </P.TextView>
                        </P.TopView>

                        <P.RightView>
                            <P.Descricao>{PerfilUser.instagram == null || PerfilUser.instagram == undefined ? "Não possui instagram" : PerfilUser.instagram}</P.Descricao>
                        </P.RightView>
                    </P.ContatoView>

                    <P.ContatoView>

                        <P.TopView>
                            <P.IconView>
                                <Feather name="twitter" size={24} color="#fff" />
                            </P.IconView>

                            <P.TextView>
                                <P.Usuario>Twitter</P.Usuario>
                            </P.TextView>
                        </P.TopView>

                        <P.RightView>
                            <P.Descricao>{PerfilUser.twitter == null || PerfilUser.twitter == undefined ? "Não possui twitter" : PerfilUser.twitter}</P.Descricao>
                        </P.RightView>
                    </P.ContatoView>


                </ScrollView>
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