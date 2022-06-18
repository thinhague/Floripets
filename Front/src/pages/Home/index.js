import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, Keyboard, Image, StatusBar } from 'react-native';
import Post from '../../components/Post'
import ModalPost from '../../components/ModalPost';
import { usePost } from '../../Context/Contextt'


import * as H from './styles';
import api from '../../services/api';
import { imagePost } from '../../components/Post/styles';



export default function Home({ navigation }) {


  const { post, setPost, user, like, setLike, image, setImage } = usePost();
  const [newPost, setNewPost] = useState("")
  const [visivel, setVisivel] = useState(false)
  const [status, setStatus] = useState({
    type: "",
    msg: ""
  })

  useEffect(() => {
    const setarPost = async () => {
      const getResult = await api.get('getPost')
      setPost(getResult.data.msg)
    }

    setarPost()


  }, [])
  useEffect(() => {
    attPost();
}, [image])

const attPost = async () => {
    const getPost = await api.get('getPost')
   
    setPost(getPost.data.msg)
  
}

  const addPost = async () => {

    if (newPost == '' || image == null) return;

    const id = user.id
    try {
      const formData = new FormData()
      formData.append('file', {
        name: 'image.jpg',
        type: 'image/jpg',
        uri: image

      })
      let url = `http://192.168.0.116:3000/post/${id}/${user.nome}/${user.apelido}/${newPost}/${0}/${user.imagePerfil}`;


      let header = {
        "Content-Type": `multipart/form-data`,
        Accept: "application/json",
      };

      let object = {
        method: "POST",
        headers: header,
        body: formData
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


      setStatus({
        type: "success",
        msg: "Post efetuado com sucesso!"
      })
    } catch (err) {
      setStatus({
        type: "error",
        msg: "Post não efetuado!"
      })
    }
    const getUserPost = await api.get(`getUserPost/${id}`)
    setPost([{
      id: getUserPost.data.msg[0].id,
      nome: getUserPost.data.msg[0].nome,
      apelido: getUserPost.data.msg[0].apelido,
      texto: getUserPost.data.msg[0].texto,
      imagePerfil: getUserPost.data.msg[0].imagePerfil,
      imagePost: getUserPost.data.msg[0].imagemPost,
      likes: 0,
      id_usuario: id
      
    }, ...post])
    Keyboard.dismiss()
    setNewPost("")
    setVisivel(false)
    setImage(null)
    

  }

  const deletePost = (item) => {
    setPost(post.filter(posts => posts !== item))
    setLike(like.filter(e => e != item))
  }
  const date = new Date();
  const Horas = date.getHours();

  return (

    <H.Container style={visivel == true ? { opacity: 0.3 } : { opacity: 1 }}>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />

      <H.ContainerTop>

        <H.InputView>
          <TouchableOpacity onPress={() => setVisivel(true)}>
            <H.ContainerPost>
              <H.TextContainerPost>{Horas >= 18 ? "Boa noite" : Horas >= 12 ? "Boa tarde" : Horas >= 5 ? "Bom dia" : "Boa noite"}, {user.nome}</H.TextContainerPost>
            </H.ContainerPost>
          </TouchableOpacity>
        </H.InputView>

        <TouchableOpacity>
          <Image
            style={{ display: 'flex', width: 70, height: 70 }}
            source={require('../../../assets/LogoPreto.png')}
          />
        </TouchableOpacity>

      </H.ContainerTop>

      <FlatList
        style={{ flex: 1 }}
        data={post}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Post item={item} idpost={item.id} deletePost={deletePost} index={index} navigation={navigation} />
        )}

      />

      <ModalPost visivel={visivel} setVisivel={setVisivel} newPost={newPost} setNewPost={setNewPost} addPost={addPost} />

    </H.Container>

  )
}