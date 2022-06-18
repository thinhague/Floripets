import styled from 'styled-components/native'

export const ImageView = styled.View`
   display:flex;
   width:180px;
   height:180px;
`;

export const Logo = styled.Image`
   display:flex;
   width:100%;
`;

export const Input = styled.TextInput `
   width: 80%;
   color:#fff;
   padding: 10px;
   margin-left: 40px;
   margin: 5px;
   margin-right: 15px;
   border-radius:50px;
   background-color:#363636;
`;
export const TextApp = styled.Text `
   font-size: 25px;
   /* top: -100px; */
   color:#fff;
`;

export const InputView = styled.View`
   display:flex;
   flex-direction:column;
   width:100%;
   align-items:center;
`;


export const TextEmail = styled.Text `
   font-size: 15px;
   text-transform: uppercase;
`;

export const TextSenha = styled.Text `
   font-size: 15px;
   text-transform: uppercase;
`;

export const ButtonEntrar = styled.TouchableOpacity `
    width: 218px;
    height: 40px;
    background-color:  #FFA826;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`

export const EsqueceuSenha = styled.Text `
   color: #ffa826;
   margin-top: 20px;
`

export const Conta = styled.Text `
   color: #fff;
`

export const CriarConta = styled.Text `
   color: #FFA826;
   margin-left:10px;
`

export const TypeText = styled.Text`
   font-size:12px;
   font-weight:bold;
`;

export const LinkView = styled.View`
   display:flex;
   flex-direction:row;
   margin-top:140px;
`;

export const LoginSucessView = styled.View`
   display:flex;
   flex-direction:column;
`;
