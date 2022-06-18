import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #212121;
`;

export const ContainerTop = styled.View`
    height: 150px;
    width: 100%;
    background-color: #363636;
`;

export const ImgPerfil = styled.View`
    width: 90px;
    height: 90px;
    border-radius: 50px;
    background-color: #ffa826;
`;

export const ContainerMid = styled.View`
    height: 100px;
    width: 100%;
    padding-left:20px;
    padding-right:20px;
    border-bottom-color: #323436;
    border-bottom-width: 1px;
`;

export const ContainerDescricao = styled.View`
    display: flex;
    justify-content: center;
    height: 70%;
    width: 100%;
    padding-left:10px;
    padding-right: 10px;
`;

export const ContainerPostFav = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height:30%;
    width: 100%;
    padding:0px 10px 0px 10px;
`;

export const Apelido = styled.Text`
    color: #fff;
    font-weight: bold;
    padding-top:40px;
`;

export const Usuario = styled.Text`
    color: #fff;
    opacity: 0.4;
`;

export const Descricao = styled.Text`
    color: #fff;
`;

export const ContainerTopBot = styled.View`
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    justify-content: flex-start;
    width: 100%;
`;

export const ContainerCog = styled.View`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 10px;
    padding-right: 30px;
`;

export const ButtonArrowBack = styled.View`
    display: flex;
    width: 50px;
    margin-top: 20px;
    margin-left: 20px;
`;

export const iconeMudarBackground = styled.View`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;

export const iconeMudarPerfil = styled.View`
    display: flex;
    position: absolute;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-self: center;
`;

export const Perfil = styled.Image`  
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 50px;
`;

export const DescricaoUsuario = styled.Text`
    font-weight:bold;
    color: #fff;
`;

export const ContainerMidDesc = styled.View`
    display:flex;
    flex-direction:row;
    margin:5px;
    margin-bottom:20px;
    height:30px;
    width:100%;
    justify-content:center;
    align-items:center;
`;
export const ContainerMidDescBot = styled.View`
    display:flex;
    height:90%;
    width:100%;
    
`;

export const ContainerMidDescricao = styled.View`
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 20px;
`;

export const InputDesc = styled.TextInput`
     display: flex;
     padding:5px;
     width:100%;
     border-radius:10px;
     color:#fff;
     background-color:#363636;
`;

export const ContainerBotDesc = styled.View`
    display:flex;
    height:70px;
    width:100%;
    justify-content:center;
    align-items:center;
`;

export const ButtonDesc = styled.TouchableOpacity`
    display:flex;
    justify-content:center;
    align-items:center;
    width:30%;
    height:60%;
    background-color:#ffa826;
    border-radius:50px;

`;

export const RedeSocialLeft = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    height:40px;
    width:15%;
`;

export const RedeSocialCenter = styled.View`
    display:flex;
    justify-content:center;
    align-items:center;
    height:40px;
    width:60%;

`;

export const RedeSocialRight = styled.View`
    display:flex;
    height:40px;
    width:25%;
    justify-content:center;
    align-items:center;
`;

export const RedeSocialButton = styled.TouchableOpacity`
    display:flex;
    justify-content:center;
    align-items:center;
    width:80%;
    border-radius:50px;
    height:30px;
    background-color:#FFA826
`;

export const RedeSocialInput = styled.TextInput`
    display:flex;
    width:100%;
    height:40px;
    border-radius:50px;
    padding:10px;
    background-color:#363636;
    color:#fff;
`;


export const EditIcon = styled.View`
    display: flex;
`;