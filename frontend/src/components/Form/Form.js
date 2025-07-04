// Form.js

import React, { useEffect } from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({ onSubmit }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: 'SingleProduct',
  });

  const { getRecommendations, setRecommendations, recommendations } = useRecommendations(products);

  useEffect(() => {
    onSubmit(recommendations)
  }, [recommendations])

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData);

    /**
     * Defina aqui a lógica para atualizar as recomendações e passar para a lista de recomendações
     */
    setRecommendations(dataRecommendations);
  };

  return (
    <section>
      <form
        className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <Preferences
          preferences={preferences}
          onPreferenceChange={(selected) =>
            handleChange('selectedPreferences', selected)
          }
        />
        <Features
          features={features}
          onFeatureChange={(selected) =>
            handleChange('selectedFeatures', selected)
          }
        />
        <RecommendationType
          onRecommendationTypeChange={(selected) =>
            handleChange('selectedRecommendationType', selected)
          }
        />
        <SubmitButton text="Obter recomendação" />
      </form>
    </section>
  );
}

export default Form;
