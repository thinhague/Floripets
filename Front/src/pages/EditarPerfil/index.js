import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, ImageBackground, StyleSheet, Platform, StatusBar } from 'react-native';
import * as P from './styles';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { usePost } from '../../Context/Contextt';
import api from '../../services/api';
import { AntDesign, Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function EditarPerfil({ navigation }) {


    const { image, setImage, setImageBackground, imageBackground, user, setUser, setPost, imagemPerfil, setImagemPerfil, setComments, comments } = usePost()
    // const [imagemPerfil, setImagemPerfil] = useState(true)
    const [newDesc, setNewDesc] = useState("")
    const [instagram, setInstagram] = useState("")
    const [twitter, setTwitter] = useState("")

    useEffect(() => {
        atualizaUser();
    }, [imagemPerfil])

    const atualizaUser = async () => {
        const getResult = await api.get(`usuario/${id}`)
        const getPost = await api.get('getPost')
       
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
         setPost(getPost.data.msg)
         setComments(comments.map(e => {
             if(e.id_usuario == user.id){
                 return(
                     {
                         id:e.id,
                         id_post:e.id_post,
                         id_usuario:e.id_usuario,
                         imagePerfil:getResult.data.dados.imagePerfil,
                         likes:e.likes,
                         nome:e.nome,
                         apelido:e.apelido,
                         texto:e.texto
                     }
                 )
             }
             return e
         }))
         await api.patch(`updateCommentsLikes/${user.id}`,{
             imagePerfil: getResult.data.dados.imagePerfil
         })
      
    }

    const PickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        const id = user.id

        try {
            if (Platform.OS !== 'web') {


                if (status !== 'granted') {
                    alert('Permissão negada')
                }
            }
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1
            })

            if (!result.cancelled) {
                setImage(result.uri)

            }

            const formData = new FormData()
            formData.append('file', {
                name: 'image.jpg',
                type: 'image/jpg',
                uri: result.uri

            })

            let url = `http://192.168.0.116:3000/uploadImage/${id}`;


            let header = {
                "Content-Type": `multipart/form-data`,
                Accept: "application/json",
            };

            let object = {
                method: "POST",
                headers: header,
                body: formData,
            };

           await fetch(url, object)
                .then((resp) => {
                    let json = null;
                    json = resp.json();

                    if (resp.ok) {
                        return json;
                    }
                    return json.then((err) => {
                        throw err;
                    });
                })
                .then((json) => json);

            setImagemPerfil(!imagemPerfil)
        } catch (error) {
            console.log(error);
        }


    }

    const PickImageBackground = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })

        if (!result.cancelled) {
            const newUpload = new FormData();
            newUpload.append("file", {
                name: "image.jpg",
                type: "image/jpg",
                uri: result.uri
            })
            setImageBackground(result.uri)
        }
    }

    const id = user.id
    const addInstagram = async () => {

        try {
            await api.patch(`usuario/${id}`, {
                instagram
            })

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

            return setInstagram("")


        } catch (error) {
            return error

        }

    }
    const addDesc = async () => {

        try {
            await api.patch(`usuario/${id}`, {
                descricao: newDesc
            })

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

            return setNewDesc("")


        } catch (error) {
            return error

        }

    }
    const addTwitter = async () => {

        try {
            await api.patch(`usuario/${id}`, {
                twitter
            })

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

            return setTwitter("")


        } catch (error) {
            return error

        }

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

                    <TouchableOpacity onPress={() => PickImageBackground()}>
                        <P.iconeMudarBackground>
                            <AntDesign name="pluscircle" size={30} color="#EEEEEE" />
                        </P.iconeMudarBackground>
                    </TouchableOpacity>


                    <P.ContainerTopBot>

                        <TouchableOpacity>

                            <P.ImgPerfil>

                                <P.Perfil source={user.imagePerfil == null || user.imagePerfil == '' ? require('../../../assets/userNotImage.png') : {uri:`http://192.168.0.116:3000/files/${user.imagePerfil}`}} />

                                <P.iconeMudarPerfil>

                                    <TouchableOpacity onPress={() => PickImage()}>

                                        <AntDesign style={{ display: 'flex', justifyContent: 'center', height: '100%' }} name="pluscircle" size={25} color="#fff" />

                                    </TouchableOpacity>


                                </P.iconeMudarPerfil>


                            </P.ImgPerfil>

                        </TouchableOpacity>




                    </P.ContainerTopBot>


                </ImageBackground>

            </P.ContainerTop>


            <P.ContainerMid>

                <P.ContainerDescricao>
                    <P.Apelido>{user.nome}</P.Apelido>
                </P.ContainerDescricao>

            </P.ContainerMid>
            <ScrollView>
                <P.ContainerMidDescricao>

                    <P.ContainerMidDesc>

                        <P.RedeSocialLeft>
                            <AntDesign name="instagram" size={24} color="#fff" />
                        </P.RedeSocialLeft>

                        <P.RedeSocialCenter>
                            <P.RedeSocialInput placeholder="Seu Instagram" placeholderTextColor="#696969" onChangeText={text => setInstagram(text)} value={instagram} />
                        </P.RedeSocialCenter>

                        <P.RedeSocialRight>
                            <P.RedeSocialButton onPress={() => addInstagram()}>
                                <P.DescricaoUsuario>
                                    Salvar
                                </P.DescricaoUsuario>
                            </P.RedeSocialButton>
                        </P.RedeSocialRight>

                    </P.ContainerMidDesc>

                    <P.ContainerMidDesc>
                        <P.RedeSocialLeft>
                            <Feather name="twitter" size={24} color="#fff" />
                        </P.RedeSocialLeft>

                        <P.RedeSocialCenter>
                            <P.RedeSocialInput placeholder="Seu Twitter" placeholderTextColor="#696969" onChangeText={text => setTwitter(text)} value={twitter} />
                        </P.RedeSocialCenter>

                        <P.RedeSocialRight>
                            <P.RedeSocialButton onPress={() => addTwitter()}>
                                <P.DescricaoUsuario>
                                    Salvar
                                </P.DescricaoUsuario>
                            </P.RedeSocialButton>
                        </P.RedeSocialRight>
                    </P.ContainerMidDesc>

                    <P.ContainerMidDesc>
                        <P.DescricaoUsuario>
                            Descrição
                        </P.DescricaoUsuario>
                    </P.ContainerMidDesc>


                    <P.ContainerMidDescBot>

                        <P.InputDesc
                            multiline={true}
                            autoCorrect={true}
                            onChangeText={text => setNewDesc(text)}
                            value={newDesc}
                            placeholder="O que você está pensando?"
                            placeholderTextColor="#696969"
                            textAlign="left"
                        />

                        <P.ContainerBotDesc>

                            <P.ButtonDesc onPress={() => addDesc()}>
                                <P.DescricaoUsuario>
                                    Salvar
                                </P.DescricaoUsuario>
                            </P.ButtonDesc>

                        </P.ContainerBotDesc>

                    </P.ContainerMidDescBot>


                </P.ContainerMidDescricao>
            </ScrollView>





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