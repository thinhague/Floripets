import React, { useState } from 'react';
import { View, Text, Keyboard, StatusBar, Image, ActivityIndicator, StyleSheet } from 'react-native'
import { Input, TextApp, ButtonEntrar, EsqueceuSenha, Conta, CriarConta, TypeText, ImageView, InputView, LinkView } from './style'
import { LoginSucessView } from '../Login/style'
import api from '../../services/api';
import * as Yup from 'yup';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto'

export default function Cadastro({ navigation }) {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const apelido = nome

    const [status, setStatus] = useState({
        type: "",
        msg: ""
    })

    const colorError = {
        color: 'red'
    }
    const colorSuccess = {
        color: 'green'
    }


    const validacao = async () => {
        const schema = Yup.object().shape({
            nome: Yup.string()
                .required("Campo nome é obrigatório!")
                .min(3, "Campo nome precisa ter pelo menos 3 caracteres!"),
            email: Yup.string()
                .required("Campo email é obrigatório!")
                .email("Por favor informar um e-mail válido!"),
            senha: Yup.string()
                .required("Campo senha é obrigatório!")
                .min(6, "Campo senha precisa ter pelo menos 6 caracteres!"),
        });

        try {

            return await schema.validate({ nome, email, senha });

        } catch (err) {
            return setStatus({
                type: "error",
                msg: err.message
            })

        }
    }

    const cadastrar = async () => {
        if (!(await validacao())) return

        try {
            const result = await api.post("cadastro", {
                nome,
                email,
                senha,
                apelido


            })
            setNome('')
            setEmail('')
            setSenha('')
            setStatus({
                type: "success",
                msg: "Usuário cadastrado com sucesso!, aguarde..."
            })

            Keyboard.dismiss()
            return setTimeout(() => navigation.navigate("Login"), 4000)

        } catch (err) {

            setNome('')
            setEmail('')
            setSenha('')
            return setStatus({
                type: "error",
                msg: "Usuário já cadastrado!"
            })
        }

    };

    let [fontsLoaded] = useFonts({
        Roboto_500Medium,
        Roboto_400Regular
    })

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#212121' }}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />
            <ImageView>
                <Image style={{ flex: 1, width: '100%', height: '100%' }} source={require('../../../assets/Logo.png')} />
            </ImageView>

            <TextApp style={{ fontFamily: 'Roboto_500Medium' }}>Cadastre-se</TextApp>

            <InputView>
                <View style={{ display: 'flex', width: '75%' }}>
                    <Text style={{ color: '#fff' }}>Usuario</Text>
                </View>
                <Input placeholder="Nome" placeholderTextColor="#696969" keyboardType="default" onChangeText={text => setNome(text)} value={nome} />
            </InputView>

            <InputView>
                <View style={{ display: 'flex', width: '75%' }}>
                    <Text style={{ color: '#fff' }}>Email</Text>
                </View>
                <Input placeholder="examplo@gmail.com" placeholderTextColor="#696969" keyboardType="email-address" onChangeText={text => setEmail(text)} value={email} />
            </InputView>

            <InputView>
                <View style={{ display: 'flex', width: '75%' }}>
                    <Text style={{ color: '#fff' }}>Senha</Text>
                </View>
                <Input placeholder="**********" keyboardType="default" placeholderTextColor="#696969" secureTextEntry={true} onChangeText={text => setSenha(text)} value={senha} />
            </InputView>

            <ButtonEntrar onPress={() => cadastrar()}><Text>Entrar</Text></ButtonEntrar>
            <EsqueceuSenha><Text>Esqueceu a senha?</Text></EsqueceuSenha>
            <LoginSucessView>

                {status.type == "success" ?

                    <View style={styles.container, styles.horizontal}>

                        <ActivityIndicator size="large" color="#ffa826" />
                    </View>
                    :
                    status.type == "error" ?

                        <TypeText style={{ color: "red" }}>
                            {status.msg}
                        </TypeText>
                        :
                        null
                }


            </LoginSucessView>

            <LinkView>
                <Conta><Text>Já possui uma conta?</Text></Conta>
                <CriarConta onPress={() => navigation.navigate("Login")}><Text>Logar</Text></CriarConta>
            </LinkView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});