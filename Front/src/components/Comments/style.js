import styled from "styled-components/native";


export const ContainerTop = styled.View`
   height:60px ;
   width: 100%;
 
   display: flex;
   flex-direction: row;
   padding-left: 10px;
   padding-right: 10px;
   margin-bottom: 15px;
   margin-top: 10px;
`;

export const ContainerTopLeft = styled.View`
    display: flex;
    width: 22%;
    
`;

export const ContainerTopRigth = styled.View`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 75%;
`;

export const ImgPerfil = styled.View`
    width: 55px;
    height: 55px;
    border-radius: 50px;
    background-color: #000;
    
`;

export const Perfil = styled.Image`
    width: 55px;
    height: 55px;
    border-radius: 50px;
    background-color: #ffa826;
    
`;

export const ContainerUser= styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    width: 100%;
`;

export const Apelido = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export const Usuario = styled.Text`
    color: #fff;
    opacity: 0.4;
`;

export const ViewText = styled.View`
    display:flex;
    padding-right:25px;
    padding-left:25px;
    padding-bottom:15px;
    
`;

export const ContainerBot = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    padding-left: 25px;
    padding-right: 25px;
    width: 100%;
    height: 40px;
    
`;

export const ContainerLike = styled.View`
    display:flex;
    flex-direction:row;
    align-items: center;
    
`;

export const TextLike = styled.Text`
    color:#fff;
    font-size:15px;
    margin-right:5px;
    
`;