import React from 'react'
import styled from '@emotion/styled';

const Div = styled.div`
    display:flex;
    background-color:white;
    width:315px;
    border-radius:20px;
`;


const Todolist = () => {
    return (
        <Div>
            <ul>
                <p>hola</p>
            </ul>
            <select name="Todo">
                <option value="Todos">Todos</option>
                <option value="Realizados">Realizados</option>
                <option value="No Realizados">No realizados</option>
            </select>
        </Div>
    )
}

export default Todolist
