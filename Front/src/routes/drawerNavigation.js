import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';


import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import SuaConta from '../pages/SuaConta'
import EditarPerfil from '../pages/EditarPerfil'
import CustomDrawer from '../components/CustomDrawer/customDrawer'


import { Entypo,FontAwesome,FontAwesome5 } from '@expo/vector-icons';
// import EditarPerfil from '../pages/EditarPerfil';



const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (

        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#21212180',
                    paddingTop: 20,
                    borderRadius:12,
                
                    
                },
                drawerActiveBackgroundColor: '#323436',
                drawerActiveTintColor: '#ffa826',
                drawerInactiveTintColor: '#fff',
                drawerInactiveBackgroundColor:'#323436',

                drawerItemStyle:{
                    borderRadius:15,
                    marginTop:10,
                    marginBottom:10
                }
            }
           
        }
        
        >

            <Drawer.Screen
                name="HomeDrawer"
                component={Home}
                options={{
                    title: "Home",
                   drawerIcon:({size,color})=>(
                    <Entypo name="home" size={size} color={color} />
                   )
                }}
            />

            <Drawer.Screen
                name="PerfilDrawer"
                component={Perfil}
                options={{
                    title: "Perfil",
                    drawerIcon:({size,color})=>(
                        <FontAwesome name="user" size={size} color={color} />
                    )
                }}
            />
                <Drawer.Screen
                    name="EditarPerfilDrawer"
                    component={EditarPerfil}
                    options={{
                        title: "Editar Perfil",
                        drawerIcon:({size,color})=>(
                            <FontAwesome name="cog" size={size} color={color} />
                        )
                    }}
                />
            <Drawer.Screen
                name="SuaContaDrawer"
                component={SuaConta}
                options={{
                    title: "Configurações",
                    drawerIcon:({size,color})=>(
                        <FontAwesome5 name="user-cog" size={size} color={color} />
                    )
                }}
            />
           
           
            
        </Drawer.Navigator>
       
        
    )
}