import { screen, render, fireEvent } from "@testing-library/react"

import Features from "./Features"


describe('Features', () => {
    const mockCallback = jest.fn();
    const mockFeatures = ['feature_a', 'feature_b'];

    test('Renderiza lista de funcionalidades', () => {    
        render(
            <Features 
                features={mockFeatures}
                selectedFeatures={[]}
                onFeatureChange={() => {}}
            />
        );

        const featureA = screen.getByText(mockFeatures[0]);
        const featureB = screen.getByText(mockFeatures[1]);

        expect(featureA).toBeInTheDocument();
        expect(featureB).toBeInTheDocument();
    })

    test('Executa o callback quando algum item for clicado', () => {
        render(
            <Features 
                features={mockFeatures}
                selectedFeatures={[]}
                onFeatureChange={mockCallback}
            />
        );

        const featureA = screen.getByLabelText(mockFeatures[0]);
        const featureB = screen.getByLabelText(mockFeatures[1]);

        fireEvent.click(featureA);
        fireEvent.click(featureB);

        expect(mockCallback).toHaveBeenCalledTimes(2);
    })

    test('Retorna a lista de itens selecionados', () => {
        render(
            <Features 
                features={mockFeatures}
                selectedFeatures={['feature_a']}
                onFeatureChange={mockCallback}
            />
        );

        const featureA = screen.getByLabelText(mockFeatures[0]);

        fireEvent.click(featureA);

        expect(mockCallback).toHaveBeenCalledWith([]);

        fireEvent.click(featureA);

        expect(mockCallback).toHaveBeenCalledWith(['feature_a']);
    })
})
