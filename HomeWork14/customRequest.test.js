const axios = require('axios');
const { sendCustomGreeting } = require('./customRequest');

jest.mock('axios');

test('Check data in request', async () => {
  axios.get.mockResolvedValue({ data: 'mocked response' });

  await sendCustomGreeting();

  expect(axios.get).toHaveBeenCalledWith('https://example.com/api/greet', {
    headers: {
      'Authorization': 'Bearer test-token',
      'X-Greeting-Mode': 'Friendly'
    },
    params: {
      name: 'Anastasiia',
      language: 'uk'
    }
  });
});
