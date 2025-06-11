import { screen, render, fireEvent } from "@testing-library/react"

import Preferences from "./Preferences"


describe('Preferences', () => {
    const mockCallback = jest.fn();
    const mockPreferences = ['preference_a', 'preference_b'];

    test('Renderiza lista de preferências', () => {    
        render(
            <Preferences 
                preferences={mockPreferences}
                selectedPreferences={[]}
                onPreferenceChange={() => {}}
            />
        );

        const preferenceA = screen.getByText(mockPreferences[0]);
        const preferenceB = screen.getByText(mockPreferences[1]);

        expect(preferenceA).toBeInTheDocument();
        expect(preferenceB).toBeInTheDocument();
    })

    test('Executa o callback quando algum item for clicado', () => {
        render(
            <Preferences 
                preferences={mockPreferences}
                selectedPreferences={[]}
                onPreferenceChange={mockCallback}
            />
        );

        const preferenceA = screen.getByLabelText(mockPreferences[0]);
        const preferenceB = screen.getByLabelText(mockPreferences[1]);

        fireEvent.click(preferenceA);
        fireEvent.click(preferenceB);

        expect(mockCallback).toHaveBeenCalledTimes(2);
    })

    test('Retorna a lista de itens selecionados', () => {
        render(
            <Preferences 
                preferences={mockPreferences}
                selectedPreferences={['preference_a']}
                onPreferenceChange={mockCallback}
            />
        );

        const preferenceA = screen.getByLabelText(mockPreferences[0]);

        fireEvent.click(preferenceA);

        expect(mockCallback).toHaveBeenCalledWith([]);

        fireEvent.click(preferenceA);

        expect(mockCallback).toHaveBeenCalledWith(['preference_a']);
    })
})
