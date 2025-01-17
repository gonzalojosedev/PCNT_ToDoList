import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled';
import Todolist from './Todolist';

const FormTodo = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    
`;
const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
`;
const Input = styled.input`
    border: none;
    font-size:24px;
    font-weight:700;
    outline:none;
    background-color: #E5E5E5;
    display:flex;
    align-self:start;
    margin: 2rem 0;
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
    && {
        background-color: ${props=> props.active ? "#ffffff " : "#000000"};
        color: ${props=> props.active ? "black" : "white"};
    }
    
`;

const Error = styled.p`
    background-color:red;
    color:white;
    text-align:center;
    padding:5px;
    font-weight:700;

`;

const Form = () => {
    
    const [inputTodo, setInputTodo] = useState('');
    const [error, setError] = useState(false);
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("todos");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        const getLocalS = () => {
            const todosLocalS = JSON.parse(localStorage.getItem('todos')) ?? [];
            setTodos(todosLocalS);
        }
        getLocalS();
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])
        
    const deleteInput = id => {
        const updatedTodos = todos.filter(inputTodo => inputTodo.id !== id); 
        setFilteredTodos(todos)
        setTodos(updatedTodos)
        
    };
    
    const toggleComplete = id => {
        let completeTodos = todos.map(inputTodo => {
            if (inputTodo.id === id) {
                inputTodo.complete = !inputTodo.complete;
            }
            return inputTodo;
        });
        setFilteredTodos(todos);
        setTodos(completeTodos)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if ([inputTodo].includes('')){
            setError(true);
            return;
        }
        setError(false)
        const newTodo = {
            id: new Date().getTime(),
            text: inputTodo,
            complete: false
        }
        setTodos([...todos, newTodo]);
        setInputTodo('');
    }
    useEffect(() => {

        const filterHandler = () => {
            switch(status) {
                case'realizados':
                    setFilteredTodos(todos.filter(inputTodo => inputTodo.complete === true));
                break;
                case 'no realizados':
                    setFilteredTodos(todos.filter(inputTodo => inputTodo.complete === false));
                break;
                default:
                    setFilteredTodos(todos);
                    break;
            }
        }

        filterHandler();
    
    }, [inputTodo, status, todos])

    

    return (
        <>  
            {todos && todos.length ?(
            <>

                {error && <Error>Escribe una tarea</Error>}
                <FormTodo
                onSubmit={handleSubmit}
                >
                <Div>
                <Input 
                    type="text" 
                    placeholder="Escribí un item"
                    value={inputTodo}
                    onChange={ (e) => setInputTodo(e.target.value)}
                />
                
                <Todolist 
                    setTodos={setTodos}
                    deleteInput={deleteInput}
                    toggleComplete={toggleComplete}
                    setStatus={setStatus}
                    filteredTodos={filteredTodos}
                
                />
                </Div>
                <Button 
                    type="submit" 
                    active={[inputTodo].includes('')}>
                Agregar</Button>
                </FormTodo>
            </>
        ) : (
            <>
                {error && <Error>Escribí un item para poder agregarlo</Error>}
                <FormTodo
                onSubmit={handleSubmit}
                >
                <Input 
                    type="text" 
                    placeholder="Escribí un item"
                    value={inputTodo}
                    onChange={ (e) => setInputTodo(e.target.value) }
                />
                
                
            
                <Button 
                    type="submit" 
                    active={[inputTodo].includes('')}>
                Agregar</Button>
                </FormTodo>
            </>
        )}
            
        </>
    )
}

export default Form
