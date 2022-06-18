import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #212121;
  
`;

export const ContainerTop = styled.View`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    height: 150px;
    width: 100%;
    padding: 20px;
    padding-top: 40px;
    border-bottom-color: #323436;
    border-bottom-width: 1px;
   
`;

export const ImgPerfil = styled.View`
    display: flex;
    width: 15%;
    width: 70px;
    height: 70px;
    border-radius: 50px;
    background-color: black;
`;

export const Perfil = styled.Image`  
    display: flex;
    width: 15%;
    width: 70px;
    height: 70px;
    border-radius: 50px;
    background-color: black;
`;

export const InputView = styled.View`
    display: flex;
    width: 70%;
    
`;

export const ContainerPost = styled.View`
    display: flex;
    height: 30px;
    width: 95%;
    margin-left: 12px;
    margin-top:5px;
    border-bottom-color: #363636;
    border-bottom-width: 2px; 
`;

export const TextContainerPost = styled.Text`
    display:flex;
    padding-left:10px;
    opacity:0.8;
    color:#fff;
`;

// export const InputPost = styled.TextInput`
//     display: flex;
    
//     padding: 5px;
//     width: 100%;
//     margin-left: 10px;
//     margin-right: 15px;
//     border-bottom-color: #FFA826;
//     border-bottom-width: 2px; 
    
// `;

export const ContainerButton = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
`;

;