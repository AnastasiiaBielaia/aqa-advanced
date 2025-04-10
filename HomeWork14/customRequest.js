const axios = require('axios');

async function sendCustomGreeting() {
  const url = 'https://example.com/api/greet';
  const headers = {
    'Authorization': 'Bearer test-token',
    'X-Greeting-Mode': 'Friendly'
  };
  const params = {
    name: 'Anastasiia',
    language: 'uk'
  };

  return axios.get(url, {
    headers,
    params
  });
}

module.exports = { sendCustomGreeting };
