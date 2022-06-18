import React, { useState } from 'react';
import { TouchableOpacity, Alert, StatusBar } from 'react-native';
import * as S from './styles';


import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Modal from '../../components/Modal';
import api from '../../services/api';
import { usePost } from '../../Context/Contextt';


export default function SuaConta({ navigation }) {

    const [visivel, setVisivel] = useState(false)
    const [key, setKey] = useState(0)
    const { user } = usePost()

    const createTwoButtonAlert = () =>
        Alert.alert(
            'Tem certeza que deseja desativar está conta?',
            '',
            [

                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => desativarContar()
                },
            ],
            { cancelable: false },
        );

    const editSenha = () => {
        setVisivel(true)
        setKey(4)
    }

    const desativarContar = async () => {
        const id = user.id
        try {
            await api.delete(`usuario/${id}`);
            return navigation.navigate("Login")
        } catch (err) {
            return err
            
        }
    }
    return (
        <S.Container style={visivel == true ? {opacity:0.3} : {opacity:1}}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />
            <S.ContainerTop>

                <S.ContainerTopTop>
                    <AntDesign name="left" size={25} color="#fff" onPress={() => navigation.goBack()} />
                </S.ContainerTopTop>

                <S.ContainerTopBot>
                    <S.Apelido>Sua Conta</S.Apelido>
                    <S.Usuario>@{user.nome}</S.Usuario>
                </S.ContainerTopBot>

            </S.ContainerTop>

            <S.ContainerMid>





                <TouchableOpacity onPress={() => navigation.navigate('InfoConta')}>

                    <S.ContainerMidItens>
                        <S.ContainerMidIcons>
                         <Feather name="user" size={30} color="#ffa826" />
                        </S.ContainerMidIcons>

                        <S.ContainerMidText>
                            <S.Apelido>Informações da conta</S.Apelido>
                            <S.Usuario>Altere as Informações da sua conta.</S.Usuario>
                        </S.ContainerMidText>
                    </S.ContainerMidItens>

                </TouchableOpacity>


                <TouchableOpacity onPress={() => editSenha()}>
                    <S.ContainerMidItens>
                        <S.ContainerMidIcons>
                             <Feather name="lock" size={30} color="#ffa826" />
                        </S.ContainerMidIcons>

                        <S.ContainerMidText>
                            <S.Apelido>Altere sua senha</S.Apelido>
                            <S.Usuario>Altere sua senha a qualquer momento.</S.Usuario>
                        </S.ContainerMidText>
                    </S.ContainerMidItens>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => createTwoButtonAlert()}>
                    <S.ContainerMidItens>
                        <S.ContainerMidIcons>
                           <MaterialCommunityIcons name="delete-forever-outline" size={35} color="#ffa826" />
                        </S.ContainerMidIcons>

                        <S.ContainerMidText>
                            <S.Apelido>Desativar sua conta</S.Apelido>
                            <S.Usuario>Descubra como desativar sua conta.</S.Usuario>
                        </S.ContainerMidText>
                    </S.ContainerMidItens>
                </TouchableOpacity>
            </S.ContainerMid>

            <Modal chave={key} setChave={setKey} visivel={visivel} setVisivel={setVisivel} />
        </S.Container>
    )
}