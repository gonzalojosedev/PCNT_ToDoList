import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent} from '@testing-library/react';
import Form from '../../components/Form';
describe('Form render', () => {

  const setup = () => {
  const utils = render(<Form />)
  const input = utils.getByPlaceholderText('Escribí un item')
  
  return {
    input,
    ...utils,
  }
}

    test('It should allow letters to be inputted', () => {
        const {input} = setup()
        expect(input.value).toBe('') // empty before
        fireEvent.change(input, {target: {value: 'Nueva Tarea'}})
        expect(input.value).toBe('Nueva Tarea') //empty after
        fireEvent.change(input, {target: {value: ''}})
        expect(input.value).toBe('')
      })

      
})


