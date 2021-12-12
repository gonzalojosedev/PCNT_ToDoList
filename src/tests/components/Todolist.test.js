import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react';
import Todolist from '../../components/Todolist';

describe('<Todolist />', () => {
    
    test('delete input', () => {
        const inputTodo = {
            id: new Date().getTime(),
            content: 'pagar cuentas',
            complete: false
        }
        const mockHandlerDelete = jest.fn();
        
        const component = render(<Todolist filteredTodos={[inputTodo]} deleteInput={mockHandlerDelete} />);

        const button = component.getByText('Delete')
        fireEvent.click(button)
        expect(mockHandlerDelete).toHaveBeenCalledTimes(1)
        
    })
    
    

})

