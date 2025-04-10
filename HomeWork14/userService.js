const axios = require('axios');

async function fetchUserData(userId) {
  try {
    const response = await axios.get(`https://example.com/api/users/${userId}`);
    return response.data;
  } catch (error) {
    return { error: 'Failed to fetch user data' };
  }
}

module.exports = { fetchUserData };
