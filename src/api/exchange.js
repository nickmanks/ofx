import API from '.';

const url = 'https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual';

const getQuoteEndpoint = (from, to, amount)=>
  `${url}/${from}/${to}/${amount}?format=json`;

export const getQuote = async (from, to, amount)=> {
  const response = await API.get(getQuoteEndpoint(from, to, amount));

  const json = await response.json();
  const {CustomerRate, CustomerAmount} = json;

  return {
    rate: CustomerRate,
    exchange: CustomerAmount
  };
};
