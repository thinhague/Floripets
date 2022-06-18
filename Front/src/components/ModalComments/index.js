import React, { useEffect } from 'react';
import * as M from '../ModalPost/styles'

import { Modal } from 'react-native'
import { TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { usePost } from '../../Context/Contextt';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';


export default function ModalComments({ visivel, setVisivel, setNewComments, newComments, addComments }) {

    const { image, user } = usePost()

   

    const cancelPost = () => {
        setVisivel(false)
        setNewComments("")
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
                                onChangeText={text => setNewComments(text)}
                                value={newComments}
                                placeholder="O que você está pensando?"
                                placeholderTextColor="#fff"
                                textAlign="left"

                            />
                        </M.ContainerR>

                    </M.ContainerMid>

                    <M.ContainerBot>

                        <TouchableOpacity>
                          {/* <AntDesign name="picture" size={30} color="#fff" /> */}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => addComments()}>
                            <Feather name="send" size={26} color="#FFA826" />
                        </TouchableOpacity>
                        
                    </M.ContainerBot>
                </M.ContainerModal>

            </M.Container>
        </Modal>


    )
}