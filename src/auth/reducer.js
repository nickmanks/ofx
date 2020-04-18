import reducer from '#src/utils/reducer';

export const DefaultState = {
  authenticated: true,
  authenticating: false
};

export default reducer(DefaultState, {});
