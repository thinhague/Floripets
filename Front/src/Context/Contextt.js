import React, { createContext, useContext, useState } from 'react'

const ContextPost = createContext();

export default function ContextProvider({children}){

    const [post,setPost] = useState([])
    const [users,setUsers] = useState([])
    const [user,setUser] = useState({
        id:null,
        nome:null,
        email:null,
        senha:null,
        descricao:null,
        apelido:null,
        telefone:null
       
       
    })
    const [postUser, setPostUser] = useState([])
    const [like, setLike] = useState([])
    const [image,setImage] = useState(null)
    const [imageBackground,setImageBackground] = useState(null)
    const [idCommentsPost,setidCommentsPost] = useState(null)
    const [comments, setComments] = useState([])
    const [PerfilUser,setPerfilUser] = useState()
    const [infoPost, setInfoPost] = useState()
    const [imagemPerfil, setImagemPerfil] = useState(true)

    return(
        <ContextPost.Provider
            value={{
                post,
                setPost,
                users,
                setUsers,
                user,
                setUser,
                like,
                setLike,
                image,
                setImage,
                imageBackground,
                setImageBackground,
                postUser,
                setPostUser,
                idCommentsPost,
                setidCommentsPost,
                comments,
                setComments,
                PerfilUser,
                setPerfilUser,
                infoPost,
                setInfoPost,
                imagemPerfil,
                setImagemPerfil
                
            }}
        >
            {children}
        </ContextPost.Provider>
    )
};

export function usePost() {
    const context = useContext(ContextPost);
    const { post, setPost, users, setUsers, user, setUser, like, setLike, image, setImage, imageBackground,setImageBackground, postUser, setPostUser, idCommentsPost, setidCommentsPost, comments, setComments, PerfilUser, setPerfilUser, infoPost, setInfoPost, imagemPerfil, setImagemPerfil } = context;
    return { post, setPost,users, setUsers, user, setUser, like, setLike, image, setImage, imageBackground,setImageBackground, postUser, setPostUser, idCommentsPost, setidCommentsPost, comments, setComments, PerfilUser, setPerfilUser, infoPost, setInfoPost, imagemPerfil, setImagemPerfil};
};



