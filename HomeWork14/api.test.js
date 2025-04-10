// api.test.js
const { fetchInvalidUrl } = require('./api');

test('повертає повідомлення про помилку при запиті на неправильну URL-адресу', async () => {
  const result = await fetchInvalidUrl();
  expect(result).toMatch(/Error:/);
});
