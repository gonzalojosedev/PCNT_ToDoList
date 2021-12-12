import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import App from '../App';

describe('Test App.js renders content', () => {

    const component = render(<App />);
    const header = component.getByText('To do list')
    const subtitle = component.getByText('¿Qué cosas tenés que terminar hoy?')

    

    test('Header y Subtitle', () => {
        
        expect(header).toBeInTheDocument()
        expect(subtitle).toBeInTheDocument()
       

    });
})



