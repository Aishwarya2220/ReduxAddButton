

const initialState=[
  {
    item:"Mango",
    price:12
  }
];

const addToCart = (state = initialState , action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      state.push({item:"Apple",price:"80"});
       return state;

    default:
      return state;
  }
};

export default addToCart;
