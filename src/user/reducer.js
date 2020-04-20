import reducer from '#src/utils/reducer';

export const DefaultState = {
  first: null,
  last: null,
  email: null,
  phone: null
};

export default reducer(DefaultState, {
  'user/set-first': (state, {first})=> ({
    ...state,
    first
  }),

  'user/set-last': (state, {last})=> ({
    ...state,
    last
  }),

  'user/set-email': (state, {email})=> ({
    ...state,
    email
  }),

  'user/set-phone': (state, {phone})=> ({
    ...state,
    phone
  })
});
