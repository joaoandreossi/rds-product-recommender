import { screen, render } from "@testing-library/react"

import mockProducts from "../../mocks/mockProducts"

import RecommendationList from "./RecommendationList"

describe('RecommendationList', () => {
    test('Exibe mensagem caso a lista esteja vazia', () => {
        const emptyListMessage = 'Nenhuma recomendação encontrada.';

        render(<RecommendationList recommendations={[]} />);

        const element = screen.getByText(emptyListMessage);

        expect(element).toBeInTheDocument();
    })

    test('Renderiza lista de elementos', () => {
        render(<RecommendationList recommendations={mockProducts} />);

        const productA = screen.getByText('RD Station CRM');
        const productB = screen.getByText('RD Mentor AI');

        expect(productA).toBeInTheDocument();
        expect(productB).toBeInTheDocument();
    })
})
