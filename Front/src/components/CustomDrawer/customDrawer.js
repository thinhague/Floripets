import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import * as C from './styleDrawer'
import { usePost } from '../../Context/Contextt';

import { MaterialIcons } from '@expo/vector-icons';

export default function CustomDrawer(props) {
    const { setUser } = usePost()

    const logout = () => {
        Alert.alert(
            'Tem certeza que deseja sair ?',
            '',
            [

                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed')
                    ,
                    style: 'cancel',
                },
                {
                    text: 'Sair',
                    onPress: () => signOut()
                },
            ],
            { cancelable: false }
        )
    }

    const signOut = () => {
        setUser({})
        return props.navigation.navigate("Login")
    }
    return (
        <View style={{ flex: 1 }}>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <C.ViewLogout>
                <C.Logout onPress={() => logout()}>
                    <View style={{ width: '20%' }}>

                        <MaterialIcons name="logout" size={25} color="#fff" />
                    </View>
                    <Text style={{ color: '#fff' }}>Log out</Text>
                </C.Logout>
            </C.ViewLogout>
        </View>
    )
}