import React from 'react'
import styled from '@emotion/styled';
import Todolist from './Todolist';

const Input = styled.input`
    border: none;
    font-size:24px;
    font-weight:700;
    outline:none;
    background-color: #E5E5E5;
    display:flex;
    align-self:start;
`;
const Button = styled.button`
    width:315px;
    height:48px;
    border: none;
    box-shadow: 2px 3px 5px  #8d8d8d ;
    border-radius:50px;
    background: #FFFFFF;
    font-weight:400;
    font-size:16px;
    
`;
const Formu = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    /* border: solid 2px red; */
    height:75%;

`;

const Form = () => {
    return (
        <>
        <Formu>
            <Input type="text" placeholder="Escribí un item" />
            <Todolist />
            <Button type="submit">Agregar</Button>
        </Formu>
        </>
    )
}

export default Form
