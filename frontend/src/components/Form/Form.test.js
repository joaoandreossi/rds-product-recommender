import "@testing-library/jest-dom"
import { screen, render, fireEvent } from "@testing-library/react";

import Form from "./Form";

describe('Form', () => {
    const mockCallback = jest.fn();

    test('Envia o formulário quando o botão é clicado', () => {
        render(<Form onSubmit={mockCallback} />);

        const button = screen.getByText('Obter recomendação');

        fireEvent.click(button);

        expect(mockCallback).toHaveBeenCalledTimes(2);
    })
})
