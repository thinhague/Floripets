import styled from 'styled-components/native';

export const Container  = styled.View`
    flex:1;
    display: flex;
    align-items: center;
    width: 100%;
   
`;

export const ContainerModal = styled.View`
    display:flex;
    flex-direction:column;
    height: 450px;
    width: 370px;
    border-radius:12px;
   
    background-color:#323436;

`;

export const ContainerTop = styled.View`
    display: flex;
    flex-direction:row;
    padding:20px;
    align-items:center;
    justify-content:space-between;
    width: 100%;
    height: 15%;
    
`;

export const ContainerMid = styled.View`
    display:flex;
    flex-direction:row;
    width:100%;
    height:65%;
    padding-left:5px
`;

export const ContainerBot = styled.View`
    display:flex;
    flex-direction:row;
    padding:15px;
    justify-content:space-between;
    align-items:center;
    height:20%;
    border-top-width:2px;
    border-top-color:#696969;
    margin-left:15px;
    margin-right:15px;
`;


export const ContainerR = styled.View`
    display:flex;
    width:85%;
    
`;


export const ContainerL = styled.View`
    display:flex;
    align-items:center;
    width:15%;
`;


export const InputPost = styled.TextInput`
    display: flex; 
    padding:5px;
    width:100%;
    color:#fff;
    
`;

export const Perfil = styled.Image`  
    display: flex;
    width: 15%;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #ffa826;
`;