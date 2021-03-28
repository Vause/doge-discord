const {get} = require('../repositories/tswiftQuoteRepository');

module.exports = async () => {
  try {
    const data = await get();
    const body = JSON.parse(data.body);
    const quote = body.quote;
    return {
      quote,
    };
  } catch (e) {
    console.log(e);
  }
};
