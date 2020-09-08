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

const featureReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "ADD_MEMBER":
    //   return {
    //     ...state,
    //     members: [...state.members, action.payload]
    //   };
    // // NEW CASE HERE
    // case "TOGGLE_MEMBER":
    //   // Each action type should use a different case.
    //   const newMembers = state.members.map((member) => {
    //     if (member.name === action.payload.name) {
    //       // update member's dragon status
    //       return {
    //         ...member,
    //         dragonStatus: !action.payload.dragonStatus
    //       };
    //     } else return member;
    //   });
    //   return {
    //     ...state,
    //     members: newMembers
    //   };
    default:
      return state;
  }
};
export default featureReducer;
