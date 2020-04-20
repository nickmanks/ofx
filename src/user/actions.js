// Simple Actions

export const setFirst = (first)=> ({
  type: 'user/set-first',
  first
});

export const setLast = (last)=> ({
  type: 'user/set-last',
  last
});

export const setEmail = (email)=> ({
  type: 'user/set-email',
  email
});

export const setPhone = (phone)=> ({
  type: 'user/set-phone',
  phone
});
