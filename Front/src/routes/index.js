import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from '../pages/Login'
import Perfil from '../pages/Perfil';
import Cadastro from '../pages/Cadastro';
import Drawer from './drawerNavigation';
import SuaConta from '../pages/SuaConta';
import InfoConta from '../pages/InfoConta';
import EditarPerfil from '../pages/EditarPerfil';
import Comentario from '../pages/Comentario'
import PerfilUser from '../pages/PerfilUser'
import CustomDrawer from '../components/CustomDrawer/customDrawer'


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>


            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Home"
                component={Drawer}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="SuaConta"
                component={SuaConta}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="InfoConta"
                component={InfoConta}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="EditarPerfil"
                component={EditarPerfil}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Comentario"
                component={Comentario}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="PerfilUser"
                component={PerfilUser}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="CustomDrawer"
                component={CustomDrawer}
                options={{
                    headerShown: false
                }}
            />



        </Stack.Navigator>
    )
}