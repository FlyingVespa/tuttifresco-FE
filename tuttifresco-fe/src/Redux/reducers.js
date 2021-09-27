const initialState = {
  formBusiness: null,
  formUser: null,
};

export const appReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "REG_FORM_BUSSINESS":
      return { ...state, formBusiness: action.payload };

    case "REG_FORM_USER":
      return { ...state, formUser: action.payload };

    default:
      //   console.log('NOT RECOGNIZED ACTION!')
      return state;
  }
};
