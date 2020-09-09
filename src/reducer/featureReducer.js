export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

//component > dispactchAction > reducer > backToComponent

const featureReducer = (state = initialState, actionObj) => {
  // debugger;
  switch (actionObj.type) {
    case "ADD_FEATURE":
      console.log(actionObj.payload);
      return {
        ...state, 
        // additionalPrice: 500000, 
        additionalPrice: state.additionalPrice + actionObj.payload.price, 
        car: {
          ...state.car, 
          features: [
            ...state.car.features, 
            actionObj.payload]}}
    case "REMOVE_FEATURE": {
      console.log(actionObj.payload);
      const newFeaturesArr = state.car.features.filter(feature => feature !== actionObj.payload)
      const newStateObj = {
        ...state,
        additionalPrice: state.additionalPrice - actionObj.payload.price,
        car: {
          ...state.car, 
          features: newFeaturesArr}}
      return newStateObj;
    }
    default:
      return state;
  }
};
export default featureReducer;
