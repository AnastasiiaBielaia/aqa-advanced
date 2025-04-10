// api.js
const axios = require('axios');

async function fetchInvalidUrl() {
  try {
    const response = await axios.get('https://thisurldoesnotexist.tld');
    return response.data;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

module.exports = { fetchInvalidUrl };
