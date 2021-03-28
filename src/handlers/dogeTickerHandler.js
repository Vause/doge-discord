const {getTickerPrice} = require('../repositories/cryptoCurrencyRepository');

module.exports = async (tickerId) => {
  try {
    const data = await getTickerPrice(tickerId);
    const body = JSON.parse(data.body);
    const tickerName = body.data[tickerId].name;
    const tickerPrice = body.data[tickerId].quote.USD.price;
    return {
      tickerName,
      tickerPrice,
    };
  } catch (e) {
    console.log(e);
  }
};
