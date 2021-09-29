const initialState = {
  contact: {
    email: null,
    cell: null,
    tel: null,
    twitter: null,
    insta: null,
    whatsapp: null,
  },
  location: {},
  basic: {
    name: null,
    category: null,
    accemail: null,
    delivery: null,
    username: null,
    password: null,
  },
};

export const appReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    // case "REG_FORM_BUSSINESS":
    //   return { ...state, formBusiness: action.payload };
    case "REG_BUSSINESS_CONTACT":
      return { ...state, contact: action.payload };
    case "REG_BUSSINESS_TIMES":
      return { ...state, times: action.payload };
    case "REG_BUSSINESS_BASIC":
      return { ...state, basic: action.payload };
    case "REG_BUSSINESS_LOCATION":
      return { ...state, location: action.payload };
    case "REG_FORM_USER":
      return { ...state, formUser: action.payload };

    default:
      //   console.log('NOT RECOGNIZED ACTION!')
      return state;
  }
};

// formBusiness: {
//   businesName: null,
//   businessCategory: null,
//   accEmail: null,
//   delivery: null,
//   password: null,
//   contact: {
//     email: null,
//     tel: null,
//     cell: null,
//     insta: null,
//     whatsapp: null,
//     twitter: null,
//   },
//   times: {
//
//   },
//   location: {
//     country: null,
//     region: null,
//     city: null,
//     zip: null,
//     address: null,
//     serviceArea: [],
//   },
// },
// formUser: null,
