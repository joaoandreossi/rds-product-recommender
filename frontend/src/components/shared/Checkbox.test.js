import { screen, render, fireEvent } from "@testing-library/react"
import Checkbox from "./Checkbox"

describe('Checkbox', () => {
    test('Executa o callback quando clicado', () => {
        const label = "test_label";
        const func = jest.fn();

        render(
            <Checkbox
                children={label}
                onChange={func}
            />
        );

        const element = screen.getByText(label);

        fireEvent.click(element);

        expect(func).toHaveBeenCalled();
    })
})
