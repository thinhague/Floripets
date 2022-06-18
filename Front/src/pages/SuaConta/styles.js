import styled from 'styled-components/native';



export const Container = styled.ScrollView`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #212121;
    
  
`;

export const ContainerTop = styled.View`
    height: 150px;
    width: 100%;
    background-color: #212121;
    padding: 20px;
    padding-top: 40px;

    display: flex;
    flex-direction:row;
    align-items: center;

   
`;

export const ContainerTopTop = styled.View`
    display: flex;
    width: 15%;
`;

export const ContainerTopBot = styled.View`
    display: flex;
    width: 80%;
    
`;

export const Apelido = styled.Text`
    color: #fff;
    font-weight: 600;
    font-size: 16px;
`;

export const Usuario = styled.Text`
    color: #fff;
    opacity: 0.6;
`;

export const ContainerMid = styled.View`
    height: 600px;
    display: flex;
    flex-direction: column;
    
`;

export const ContainerMidItens = styled.View`
    height: 150px;
    background-color: #212121;
    display: flex;
    flex-direction: row;
    
    border-bottom-color:#323436;
    border-bottom-width:2px;
    margin: 15px;
`;

export const ContainerMidIcons = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    
`;

export const ContainerMidText = styled.View`
    display: flex;
    justify-content: center;
    padding-left: 20px;
    width: 80%;
    
`;