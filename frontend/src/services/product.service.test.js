import getProducts from './product.service'
import axios from 'axios'
import mockProducts from '../mocks/mockProducts';


jest.mock('axios');


describe('productService', () => {
    test('Retorna lista de produtos', async () => {
        axios.get.mockResolvedValue({ data: mockProducts });

        const products = await getProducts()

        expect(products).toBe(mockProducts)
    })

    test('Retorna uma exceção em caso de erro na requisição', async () => {
        const error = new Error('test_error');
        
        axios.get.mockRejectedValueOnce(error);

        let response = undefined

        try {
            response = await getProducts();
        } catch(error){
            response = error
        }
        
        expect(response).toBe(error);
    })
})
