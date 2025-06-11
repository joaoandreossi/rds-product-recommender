// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  /**
   * Crie aqui a lógica para retornar os produtos recomendados.
   */
  const recommendationSet = new Set();
  const userPreferenceSet = new Set(formData.selectedPreferences);
  const userFeatureSet = new Set(formData.selectedFeatures);
    
  for(const product of products){
    const preferenceSet = new Set(product.preferences);
    const featureSet = new Set(product.features);

    if(preferenceSet.intersection(userPreferenceSet).size > 0){
      if(!recommendationSet.has(product)){
        recommendationSet.add(product);
      }
    }

    if(featureSet.intersection(userFeatureSet).size > 0){
      if(!recommendationSet.has(product)){
        recommendationSet.add(product);
      }
    }
  }

  let recommendation = [...recommendationSet.values()];
    
  if(recommendation.length > 0 && formData.selectedRecommendationType === 'SingleProduct') {
    recommendation = [recommendation[recommendation.length - 1]];
  }
  
  return recommendation;
};

export default { getRecommendations };
