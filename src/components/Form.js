import React from 'react'
import styled from '@emotion/styled';

const Input = styled.input`
    border: none;
    width:100%;
    font-size:24px;
    font-weight:700;
    outline:none;
`;
const Button = styled.button`
    width:315px;
    height:48px;
    border: none;
    box-shadow: 2px 3px 5px  #8d8d8d ;
    border-radius:50px;
    position: absolute;
    bottom: 5%;
    background: #FFFFFF;
    font-weight:400;
    font-size:16px;
`;

const Form = () => {
    return (
        <>
        <form>
            <Input type="text" placeholder="Escribí un item" />
            <Button type="submit">Agregar</Button>
        </form>
        </>
    )
}

export default Form
