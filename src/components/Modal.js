import React from 'react'
import styled from '@emotion/styled';

const ModalBackground = styled.div`
    width:100%;
    height:100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content:center;
    align-items:center;
    left: 0;
    top: 0;
`;

const DivModal = styled.div`
    width: 315px;
    height:250px;
    border-radius:20px;
    background-color:#fff;
    padding: 10px;
    h2 {
        font-size: 22px;
        font-weight:400;
    }
    p {
        font-size:16px;
        font-weight:400;
    }
    div{
        display:flex;
        justify-content: space-around;
    }
`
const Button1 = styled.button`
    width:129px;
    height:48px;
    border: none;
    box-shadow: 2px 3px 5px  #8d8d8d ;
    border-radius:50px;
    font-weight:400;
    font-size:16px;
    background-color: #FFFFFF;
    color: black;

`
const Button2 = styled.button`
    width:129px;
    height:48px;
    border: none;
    box-shadow: 2px 3px 5px  #8d8d8d ;
    border-radius:50px;
    font-weight:400;
    font-size:16px;
    background-color: black;
    color:white;

`

const Modal = ({showModal, setTodos, setShowModal}) => {
    return (
        <>
        {showModal 
        ? 
        
        <ModalBackground>
            <DivModal>
                <h2>Empezar nueva lista</h2>
                <p>Cuando comenzás una nueva lista, tu lista existente se elimina</p>
                <p>¿Estás seguro que querés empezar una nueva lista?</p>
                <div>
                    <Button1 onClick={() => setShowModal(prev => !prev)}>Cancelar</Button1>
                    <Button2 onClick={() => {setTodos([])}}>Nueva lista</Button2>
                </div>
            </DivModal>
        </ModalBackground>
         
        : null}
            
        </>
    )
}

export default Modal
