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
    times: {
      monday: { trading: true, open: "01:11", closed: "04:00" },
      tuesday: { trading: true, open: "", closed: "" },
      wednesday: { trading: true, open: "", closed: "" },
      thursday: { trading: false, open: "", closed: "" },
      friday: { trading: true, open: "", closed: "" },
      saturday: { trading: true, open: "", closed: "" },
      sunday: { trading: true, open: "", closed: "" },
      public: { trading: true, open: "", closed: "" },
    },
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
    case "REG_FORM_BUSSINESS":
      return { ...state, formBusiness: action.payload };

    case "REG_FORM_USER":
      return { ...state, formUser: action.payload };

    default:
      //   console.log('NOT RECOGNIZED ACTION!')
      return state;
  }
};
