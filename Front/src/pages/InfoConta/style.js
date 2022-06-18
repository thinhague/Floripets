import styled from 'styled-components/native';

export const Container = styled.View `
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #212121;
`;

export const ContainerTop = styled.View `
    height: 150px;
    width: 100%;
    padding: 20px;
    padding-top: 40px;
    display: flex;
    flex-direction:row;
    align-items: center;

`;

export const ContainerTopTop = styled.View `
    display: flex;
    width: 15%;
`;

export const ContainerTopUsers = styled.View `
    display: flex;
    width: 80%;
`
export const Apelido = styled.Text`
    color: #fff;
    font-weight: 600;
    font-size: 16px;
`;

export const Usuario = styled.Text`
    color: #fff;
    opacity: 0.6;
`;

export const Text = styled.Text `
    font-size: 15px;
`

export const ContainerMid = styled.View`
    height: 350px;
    display: flex;
    flex-direction: column;
    
`;

export const ContainerMidText = styled.TouchableOpacity`
    height: 20%;
    display: flex;
    flex-direction: column;
    border-bottom-color:#323436;
    border-bottom-width:2px;
    margin: 15px;
`;