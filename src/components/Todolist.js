import React from 'react'
import styled from '@emotion/styled';

const Div = styled.div`
    display:flex;
    background-color:white;
    width:315px;
    border-radius:20px;
`;
const ListItems = styled.div`
    display:flex;
    flex-direction: column;
`;

const Todolist = ({inputTodo, todos}) => {

    

    return (
        <Div>
            <ListItems>
            {todos.map((inputTodo)=> 
            <div key={inputTodo.id}>
                <ul>
                    {inputTodo.text}
                </ul>
                <button>Delete</button>
            </div>)}
            </ListItems>
            <select name="Todo">
                <option value="Todos">Todos</option>
                <option value="Realizados">Realizados</option>
                <option value="No Realizados">No realizados</option>
            </select>
        </Div>
    )
}

export default Todolist
