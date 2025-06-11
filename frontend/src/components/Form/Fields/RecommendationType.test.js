import { screen, render, fireEvent } from "@testing-library/react"
import RecommendationType from "./RecommendationType";

describe('RecommendationType', () => {
    test('Inicia com SingleProduct selecionado por padrão', () => {
        render(<RecommendationType onRecommendationTypeChange={() => {}} />);

        const input = screen.getByLabelText('Produto Único');

        expect(input).toBeChecked();
    })

    test('Executa o callback quando clicado', () => {
        const func = jest.fn();

        render(<RecommendationType onRecommendationTypeChange={func} />);

        const radioA = screen.getByText('Produto Único');
        const radioB = screen.getByText('Múltiplos Produtos')

        fireEvent.click(radioB);
        fireEvent.click(radioA);

        expect(func).toHaveBeenCalledTimes(2);
    })
})
