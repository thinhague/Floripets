import styled from 'styled-components/native';


export const Container = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-height:474px;
    border-bottom-color: #323436;
    border-bottom-width: 1px;
    
`;

export const ContainerTop = styled.View`
   /* height:80px; */
   width: 100%;
 
   display: flex;
   align-items:center;
   flex-direction: row;
   padding-left: 10px;
   padding-right: 10px;
   /* margin-bottom: 27px; */
   margin-top: 10px;
`;

export const ContainerTopLeft = styled.View`
    display: flex;
    width: 22%;
    
`;

export const ContainerTopRigth = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 75%;
    margin-left:10px;
`;

export const ImgPerfil = styled.View`
    width: 70px;
    height: 70px;
    border-radius: 50px;
    background-color: #fff;
    
`;

export const Perfil = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 50px;
    background-color:#ffa826;
    border-color:#fff;
    border-width:1px;
    
`;

export const ContainerUser= styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
`;

export const Apelido = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export const Usuario = styled.Text`
    color: #fff;
    opacity: 0.4;
    margin-left:10px;
`;


export const ContainerMid = styled.View`
    display: flex;
    height: auto;
    /* height: 200px; */
    
    background-color: #212121;
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
    height: 10%;
    padding-bottom:10px;
    
`;

export const ContainerHeartLike = styled.View`
    display:flex;
    flex-direction:row;
    align-items: center;
    
`;

export const TextLike = styled.Text`
    color:#fff;
    font-size:15px;
    margin-right:5px;
    
`;

export const ViewImage = styled.View`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:230px;
`;

export const ViewImageChildren = styled.View`
    display:flex;
    width:95%;
    height:100%;
    border-radius:10px;
`;

export const imagePost = styled.Image`
    display:flex;
    width:100%;
    height:100%
    border-radius:10px;
`;

export const ScrollViewText = styled.ScrollView`
    display:flex;
    padding:10px;
    height:auto;
`;
