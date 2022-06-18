import React, { useEffect } from 'react';
import * as M from './styles'

import { Modal } from 'react-native'
import { TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { usePost } from '../../Context/Contextt';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';


export default function ModalPost({ visivel, setVisivel, setNewPost, newPost, addPost }) {

    const { image, setImage, user } = usePost()

    const PickImagePost = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })

     
        if(!result.cancelled){
            setImage(result.uri)
        }
    }

    const cancelPost = () => {
        setVisivel(false)
        setNewPost("")
        setImage(null)
    }


    return (

        <Modal
            animationType="slide"
            visible={visivel}
            transparent={true}

        >
            <M.Container>

                <M.ContainerModal>

                    <M.ContainerTop>

                        <TouchableOpacity onPress={() => cancelPost()}>
                            <Feather name="x" size={26} color="white" />
                        </TouchableOpacity>


                    </M.ContainerTop>

                    <M.ContainerMid>

                        <M.ContainerL>
                            <M.Perfil source={user.imagePerfil == null || user.imagePerfil == '' ? require('../../../assets/userNotImage.png') : {uri:`http://192.168.0.116:3000/files/${user.imagePerfil}`}} />
                        </M.ContainerL>

                        <M.ContainerR>
                            <M.InputPost
                                multiline={true}
                                autoCorrect={true}
                                onChangeText={text => setNewPost(text)}
                                value={newPost}
                                placeholder="O que você está pensando?"
                                placeholderTextColor="#696969"
                                textAlign="left"

                            />
                        </M.ContainerR>

                    </M.ContainerMid>

                    <M.ContainerBot>

                        <TouchableOpacity onPress={() => PickImagePost()}>
                          <AntDesign name="picture" size={30} color="#fff" style={image == null ? {opacity:0.5} : {opacity:1}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => addPost()}>
                            <Feather name="send" size={26} color="#FFA826" />
                        </TouchableOpacity>
                        
                    </M.ContainerBot>
                </M.ContainerModal>

            </M.Container>
        </Modal>


    )
}