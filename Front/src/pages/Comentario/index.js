import React, { useEffect, useState } from "react";
import { TouchableOpacity, FlatList, Keyboard, Image, StatusBar, ScrollView, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { usePost } from "../../Context/Contextt";
import Post from "../../components/Post/postComments";
import Comments from "../../components/Comments";
import * as H from '../Home/styles';
import ModalComments from '../../components/ModalComments'
import api from "../../services/api";


export default function Comentario({ navigation }) {
    const { idCommentsPost, post, user, comments, setComments, imagemPerfil, setImagemPerfil } = usePost()
    const [visivel, setVisivel] = useState(false)
    const [newComments, setNewComments] = useState("")
    const postComments = post.filter(e => e.id == idCommentsPost)
  
    useEffect(() => {
        const setarComments = async () => {
            const getResult = await api.get(`getComments/${idCommentsPost}`)
            setComments(getResult.data.dados)
        }

        setarComments()
    }, [idCommentsPost, imagemPerfil])

   

    const addComments = async () => {
        if (newComments == '') return;

        try {

            const result = await api.post(`addComments/${idCommentsPost}/${user.id}`, {
                nome: user.nome,
                apelido: user.apelido,
                texto: newComments,
                likes:0,
                imagePerfil:user.imagePerfil
               
            })

            setComments([{
                id: result.data.dados.id,
                nome: result.data.dados.nome,
                apelido: result.data.dados.apelido,
                texto: newComments,
                likes:0,
                imagePerfil:user.imagePerfil,
                id_usuario:user.id
                
            }, ...comments])

            setNewComments("")
            Keyboard.dismiss()

            return setVisivel(false)

        } catch (err) {
            return err
        }
    }
 
    return (
        <H.Container style={visivel == true ? {opacity:0.3} : {opacity:1}}>
        <ScrollView>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />
            <H.ContainerTop>
            
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={25} color="#fff" />
                </TouchableOpacity>

                <H.InputView>
                    <TouchableOpacity onPress={() => { setVisivel(true) }}>
                        <H.ContainerPost>
                            <H.TextContainerPost>Faça um comentário...</H.TextContainerPost>
                        </H.ContainerPost>
                    </TouchableOpacity>
                </H.InputView>


                <Image
                    style={{ display: 'flex', width: 70, height: 70 }}
                    source={require('../../../assets/LogoPreto.png')}
                />

            </H.ContainerTop>
          
            <Post item={postComments[0]} idpost={postComments[0].id} index={0}  />
    
                {comments.map((e,index) => 
                    <View key={index}>
                        <Comments item={e} idComments={e.id} />
                    </View>
                )}
                
                    
        </ScrollView>

            <ModalComments newComments={newComments} setNewComments={setNewComments} visivel={visivel} setVisivel={setVisivel} addComments={addComments} />
        </H.Container>
    )
}