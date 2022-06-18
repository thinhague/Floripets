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
    width: 105px;
    height: 105px;
    border-radius: 50px;
    background-color: #ffa826;
    border-color:#fff;
    border-width:2px;
    margin-top: 50px;
   
`;

export const Perfil = styled.Image`  
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    background-color:#ffa826;
`;

export const ContainerMid = styled.View`
    height: 270px;
    width: 100%;
   
    padding-left:20px;
    padding-right:20px;
   
    /* border-bottom-color: #bbbbbb;
    border-bottom-width: 1px; */
    
`;

export const ContainerDescricao = styled.View`
    display: flex;

    justify-content: flex-start;
    height: 40%;
    width: 100%;
    margin-top: 80px;
    padding-left:10px;
    padding-right: 10px;
`;

export const ContainerDescTop = styled.View`
    display:flex;
    height:20%;
    margin-bottom:10px;
    align-items:center;
    justify-content:flex-start;
    
`;

export const ContainerDescBot = styled.View`
    display:flex;

`;

export const ContainerPostFav = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    
    margin-bottom:8px;
    height:10%;
    width: 100%;
    padding:0px 10px 0px 10px;
    
`;

export const Apelido = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export const Usuario = styled.Text`
    color: #fff;
    font-weight:bold;
`;

export const Descricao = styled.Text`
    color: #fff;

`;

export const ContainerTopBot = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
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

export const layoutBar = styled.View`
    display:flex;
    height:3px;
    background-color:#323435;
    /* margin-right:23px;
    margin-left:23px; */
    justify-content:space-between;
    flex-direction:row;
    border-radius:30px;
`;

export const layoutBarOnFocus = styled.View`
     display:flex;
     width:25%;
     height:3px;
     border-radius:30px;
     
`;

export const ContatoView = styled.View`
   display:flex;
   justify-content:center;
   flex-direction:row;
   align-items:center;
   width:100%;
   height:70px;
   border-bottom-color:#323436;
   border-bottom-width:2px;
`;

export const TopView = styled.View`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    height:100%;
    width:45%;
    flex-direction:row;

`;

export const RightView = styled.View`
    display:flex;
    justify-content:center;
    width:45%;
    height:100%;
`;

export const IconView = styled.View`
    display:flex;
    justify-content:center;
    align-items:center;
    padding-right:10px;
    height:100%;
    width:20%;

`;

export const TextView = styled.View`
    display:flex;
    justify-content:center;
    align-items:flex-start;
    width:60%;
    height:100%;

`;



