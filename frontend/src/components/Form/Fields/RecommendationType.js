import React from 'react';
import Checkbox from '../../shared/Checkbox';

function RecommendationType({ onRecommendationTypeChange }) {
  return (
    <fieldset className="mb-4">
      <h2 className="text-lg font-bold mb-2">Tipo de Recomendação:</h2>
      <div className="flex items-center gap-x-4">
        <Checkbox
          type="radio"
          name="recommendationType"
          value="SingleProduct"
          defaultChecked
          onChange={() => onRecommendationTypeChange('SingleProduct')}
          className="mr-2"
        >
          Produto Único
        </Checkbox>
        <Checkbox
          type="radio"
          name="recommendationType"
          value="MultipleProducts"
          onChange={() => onRecommendationTypeChange('MultipleProducts')}
          className="mr-2"
        >
          Múltiplos Produtos
        </Checkbox>
      </div>
    </fieldset>
  );
}

export default RecommendationType;
