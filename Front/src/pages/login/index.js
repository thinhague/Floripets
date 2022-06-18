import React, { useState } from 'react';
import { View, Text, Keyboard, StatusBar, Image, ActivityIndicator, StyleSheet } from 'react-native'
import { Input, TextApp, ButtonEntrar, EsqueceuSenha, Conta, CriarConta, TypeText, InputView, ImageView, LinkView, LoginSucessView  } from './style'
import { usePost } from '../../Context/Contextt';
import api from '../../services/api';
import * as Yup from 'yup'
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto'

export default function Login({ navigation }) {
    const { user, setUser } = usePost()
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const [status, setStatus] = useState({
        type: "",
        msg: ""
    })


    const validacao = async () => {
        const schema = Yup.object().shape({
            email: Yup.string()
                .required("Campo email é obrigatório!")
                .email("Por favor informar um e-mail válido!"),
            senha: Yup.string()
                .required("Campo senha é obrigatório!")
        });

        try {

            return await schema.validate({ email, senha });

        } catch (err) {
            return setStatus({
                type: "error",
                msg: err.message
            })

        }
    }

    const Login = async () => {

        if (!(await validacao())) return

        try {
            const result = await api.post('login', {
                email,
                senha
            })


            setUser({
                id: result.data.dados.id,
                nome: result.data.dados.nome,
                email: result.data.dados.email,
                senha: result.data.dados.senha,
                imagePerfil:result.data.dados.imagePerfil,
                imagePerfilBackground:result.data.dados.imagePerfilBackground,
                descricao: result.data.dados.descricao,
                apelido: result.data.dados.apelido,
                telefone: result.data.dados.telefone
            })

            setStatus({
                type: "success",
                msg: "Login efetuado com sucesso..."
            })
            Keyboard.dismiss()


            return setTimeout(() => {
                setEmail("")
                setSenha("")
                setStatus({
                    type: "",
                    msg: ""
                })
                navigation.navigate("Home")
            }, 3000)

        } catch (err) {
            return setStatus({
                type: "error",
                msg: "Não foi possível fazer o login!"

            })
        }

    }

    let [fontsLoaded] = useFonts({
        Roboto_500Medium,
        Roboto_400Regular
    })

    if (!fontsLoaded) {
        return <AppLoading />
    } else {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#212121' }}>
                <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />
                <ImageView>
                    <Image style={{ flex: 1, width: '100%', height: '100%' }} source={require('../../../assets/Logo.png')} />
                </ImageView>
                <TextApp style={{ fontFamily: 'Roboto_500Medium' }}>Login</TextApp>

                <InputView>
                    <View style={{ display: 'flex', width: '75%' }}>
                        <Text style={{ color: '#fff' }}>Email</Text>
                    </View>
                    <Input placeholder="examplo@gmail.com" placeholderTextColor="#696969" value={email} keyboardType="email-address" onChangeText={text => setEmail(text)} />
                </InputView>

                <InputView>
                    <View style={{ display: 'flex', width: '75%' }}>
                        <Text style={{ color: '#fff' }}>Senha</Text>
                    </View>
                    <Input placeholder="**********" placeholderTextColor="#696969" value={senha} keyboardType="default" secureTextEntry={true} onChangeText={text => setSenha(text)} />
                </InputView>
                <ButtonEntrar onPress={() => Login()}><Text>Entrar</Text></ButtonEntrar>
                <EsqueceuSenha onPress={() => navigation.navigate("Home")}>Esqueceu a senha?</EsqueceuSenha>

                <LoginSucessView>

                    {status.type == "success" ?

                        <View style={styles.container,styles.horizontal}>

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
                    <Conta><Text>Não possui uma conta?</Text></Conta>
                    <CriarConta onPress={() => navigation.navigate("Cadastro")}><Text>Crie sua conta</Text></CriarConta>
                </LinkView>
            </View>


        )
    }

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