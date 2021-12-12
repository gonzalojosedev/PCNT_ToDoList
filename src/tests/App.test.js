import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import App from '../App';

describe('Test App.js renders content', () => {

    const component = render(<App />);
    

    test('Header y Subtitle', () => {
        
        component.getByText('To do list')
        component.getByText('¿Qué cosas tenés que terminar hoy?')
    });
})



