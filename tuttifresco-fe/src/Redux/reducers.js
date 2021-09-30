const initialState = {
  formBusiness: {
    businesName: null,
    businessCategory: null,
    accEmail: null,
    delivery: null,
    password: null,

    contact: {
      email: null,
      tel: null,
      cell: null,
      insta: null,
      whatsapp: null,
      twitter: null,
    },
    times: {},
    location: {
      country: null,
      region: null,
      city: null,
      zip: null,
      address: null,
      serviceArea: [],
    },
  },
  formUser: null,
};

export const appReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    // case "REG_FORM_BUSSINESS":
    //   return { ...state, formBusiness: action.payload };
    case "REG_BUSINESS_FIELD":
      return {
        ...state,
        formBusiness: {
          ...state.formBusiness,
          [action.payload.field]: {
            ...state[action.payload.field],
            ...action.payload.data,
          },
        },
      };

    default:
      return state;
  }
};
