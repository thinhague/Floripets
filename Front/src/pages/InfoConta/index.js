import React,{ useState } from 'react'
import { StatusBar, TouchableOpacity } from 'react-native'
import * as C from './style';
import { usePost } from '../../Context/Contextt'
import { AntDesign } from '@expo/vector-icons';
import Modal from '../../components/Modal'

export default function InfoConta({ navigation }) {
    const { user } = usePost()
    const [visivel,setVisivel] = useState(false)
    const [key,setKey]=useState(0)

    const editApelido = ()=>{
        setVisivel(true)
        setKey(1)
    }

    const editTelefone = ()=>{
        setVisivel(true)
        setKey(2)
    }

    const editEmail = ()=>{
        setVisivel(true)
        setKey(3)
    }

    return (
        <C.Container style={visivel == true ? {opacity:0.3} : {opacity:1}}>
             <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />
            <C.ContainerTop>
                <C.ContainerTopTop>
                    <AntDesign name="left" size={25} color="#fff" onPress={() => navigation.goBack()} />
                </C.ContainerTopTop>
            
                <C.ContainerTopUsers>
                    <C.Apelido>Informações da Conta</C.Apelido>
                    <C.Usuario>{user.nome}</C.Usuario>
                </C.ContainerTopUsers>
            </C.ContainerTop>
            
            <C.ContainerMid>
                
                <C.ContainerMidText onPress={()=>editApelido()}>
                    <C.Apelido>Nome de Usuario</C.Apelido>
                    <C.Usuario>{user.apelido == user.nome || user.apelido == null || user.apelido == "null" ? "Escolha um apelido" : user.apelido}</C.Usuario>
                </C.ContainerMidText>

                <C.ContainerMidText onPress={()=>editTelefone()}>
                    <C.Apelido>Telefone</C.Apelido>
                    <C.Usuario>{user.telefone == null ? "Coloque um número" : user.telefone}</C.Usuario>
                </C.ContainerMidText>

                <C.ContainerMidText onPress={()=>editEmail()}>
                    <C.Apelido>Email</C.Apelido>
                    <C.Usuario>{user.email}</C.Usuario>
                </C.ContainerMidText>

            </C.ContainerMid>

            <Modal chave={key} setChave={setKey} visivel={visivel} setVisivel={setVisivel} />


        </C.Container>
    )
}