import fetch from 'node-fetch';

export default {
  get: async (url)=>
    await fetch(url, {
      method: 'GET',
      headers: {
        ['Content-Type']: 'application/json'
      }
    })
};
