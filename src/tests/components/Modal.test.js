import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react';
import Modal from '../../components/Modal';

describe('<Modal />', () => {
    test('should call function mockHandlerClose 1 time', () => {

        const mockHandlerClose = jest.fn()

        const component = render(<Modal showModal={true} setShowModal={mockHandlerClose} />)
        
        const button1 = component.getByText('Cancelar')
        fireEvent.click(button1)

        expect(mockHandlerClose).toHaveBeenCalledTimes(1)
    })

    test('should call function mockHandlerReset 1 time', () => {
                
        const mockHandlerReset = jest.fn();

        const component = render(<Modal showModal={true}  setTodos={mockHandlerReset} />)

        const button2 = component.getByText('Nueva lista');
        fireEvent.click(button2);

        expect(mockHandlerReset).toHaveBeenCalledTimes(1)
       
    })
    
    
})
