import { render, screen, fireEvent } from '@testing-library/react'

import SubmitButton from './SubmitButton'


describe('SubmitButton', () => {
    const mockCallback = jest.fn();
    const buttonLabel = 'test_button';
    
    test('Renderiza o botão corretamente', () => {
        render(<SubmitButton text={buttonLabel} />);
    
        const button = screen.getByText(buttonLabel);

        expect(button).toBeInTheDocument();
    })

    test('Quando clicado envia o formulário em que estiver incluso', () => {
        render(
            <form onSubmit={mockCallback}>
                <SubmitButton text={buttonLabel} />
            </form>
        );

        const button = screen.getByText(buttonLabel);

        fireEvent.click(button);

        expect(mockCallback).toHaveBeenCalled();
    })
})
