const {getKanye} = require('../repositories/quoteRepository');

module.exports = async () => {
  try {
    const data = await getKanye();
    const body = JSON.parse(data.body);
    const quote = body.quote;
    return {
      quote,
    };
  } catch (e) {
    console.log(e);
  }
};
