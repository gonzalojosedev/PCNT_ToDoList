import React from 'react'
import styled from '@emotion/styled';

const Div = styled.div`
    background-color:white;
    width:315px;
    border-radius:20px;
`;
const ListHeader = styled.div`
    display:flex;
    justify-content:space-between;
    margin: 3px;
    h2 {
        font-size: 18px;
        line-height: 20.7px;
        font-weight:700;
        margin:10px;
    }
`;

const ListItems = styled.div`
    display:flex;
    flex-direction: column;
    margin: 3px;
`;
const ListUl = styled.div`
    display: flex;
    justify-content:space-between;
`;
const Select = styled.select`
    border: none;
    outline:none;
    margin:3px;
    border-radius: 20px;
    cursor:pointer;
`;
const Ul = styled.ul`
    display: flex;
    flex-direction:row;
    align-items:center;
    width:250px;
    margin:0;
    padding: 0 0 0 20px;
`;
const Item = styled.p`
    padding: 0 0 0 10px;
    margin: 5px;
    
    
`;
const Button = styled.button`
    background-color: white;
    border: none;
    outline:none;
`;

const Todolist = ({todos, deleteInput, toggleComplete, setStatus, filteredTodos}) => {

    const statusHandler = (e) =>{
        setStatus(e.target.value)
    }

    return (
        <Div>
        <ListHeader>
            <h2>To do list <svg width="14.67" height="14.67" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.99996 0.666672C3.94996 0.666672 0.666626 3.95001 0.666626 8.00001C0.666626 12.05 3.94996 15.3333 7.99996 15.3333C12.05 15.3333 15.3333 12.05 15.3333 8.00001C15.3333 3.95001 12.05 0.666672 7.99996 0.666672ZM8.66663 10.6667C8.66663 10.8435 8.59639 11.0131 8.47136 11.1381C8.34634 11.2631 8.17677 11.3333 7.99996 11.3333C7.82315 11.3333 7.65358 11.2631 7.52855 11.1381C7.40353 11.0131 7.33329 10.8435 7.33329 10.6667V8.66667H5.33329C5.15648 8.66667 4.98691 8.59643 4.86189 8.47141C4.73686 8.34639 4.66663 8.17682 4.66663 8.00001C4.66663 7.82319 4.73686 7.65363 4.86189 7.5286C4.98691 7.40358 5.15648 7.33334 5.33329 7.33334H7.33329V5.33334C7.33329 5.15653 7.40353 4.98696 7.52855 4.86193C7.65358 4.73691 7.82315 4.66667 7.99996 4.66667C8.17677 4.66667 8.34634 4.73691 8.47136 4.86193C8.59639 4.98696 8.66663 5.15653 8.66663 5.33334V7.33334H10.6666C10.8434 7.33334 11.013 7.40358 11.138 7.5286C11.2631 7.65363 11.3333 7.82319 11.3333 8.00001C11.3333 8.17682 11.2631 8.34639 11.138 8.47141C11.013 8.59643 10.8434 8.66667 10.6666 8.66667H8.66663V10.6667Z" fill="black"/>
            </svg>
            </h2>
            <Select onChange={statusHandler} name="Todo">
                <option value="todos">Todos</option>
                <option value="realizados">Realizados</option>
                <option value="no realizados">No realizados</option>
                
            </Select>
        </ListHeader>
        <ListItems>
            {filteredTodos.map((inputTodo)=> 
            <ListUl key={inputTodo.id}>
                <Ul
                    onClick= {() => toggleComplete(inputTodo.id)}
                    
                >
                {inputTodo.complete 
                ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#FF560B"/>
                <path d="M4 10.125L8.125 14.25L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                : <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9.5" stroke="#BCBCBC" />
                </svg> 
                }
                {inputTodo.complete 
                ? <Item className="complete">{inputTodo.text}</Item>
                : <Item>{inputTodo.text}</Item> }
                
                </Ul>
                <Button 
                    type="button"
                    onClick={() => deleteInput(inputTodo.id)}
                >Delete</Button>
            </ListUl>)}
        </ListItems>
            
        </Div>
        
    )
}

export default Todolist
