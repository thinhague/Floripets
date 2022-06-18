import styled from 'styled-components/native';

export const Container  = styled.View`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ContainerModal = styled.View`
    display: flex;
    width: 90%;
    height: 300px;
    border-width: 1px;
    border-color: #999;
    border-radius: 12px;
    background-color: #32343698;
`;

export const ContainerModalTop = styled.View`
    display:flex;
    flex-direction:column;
    width:100%;
    height:80%;
   
`;

export const ContainerModalBot = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100%;
    height:15%;
    padding-right:20px;
    padding-left:20px;
   
`;

export const ButtonSucess = styled.TouchableOpacity`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#FFA826;
    color:#fff;
    width:48%;
    border-radius: 12px;
    margin:3px;
`;

export const CancelButton = styled.TouchableOpacity`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#363636;
    width:48%;
    border-radius: 12px;
    margin:3px;
`;

export const TextButton = styled.Text`
    color:#fff;
    font-weight:600;
`;

export const ContainerAlterarSenha = styled.View`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100%;
    height:50%;
    padding:20px;
    
`;



export const InputModal = styled.TextInput`
    display:flex;
    width:100%;
    padding:10px;
    height:35px;
    border-radius:50px;
    background-color:#363636;
    color:#fff;
`;