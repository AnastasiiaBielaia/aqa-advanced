const axios = require('axios');
const { fetchUserData } = require('./userService');

jest.mock('axios'); 

describe('fetchUserData', () => {
  it('return data if ok', async () => {
    const mockData = { id: 1, name: 'Anastasiia' };
    axios.get.mockResolvedValue({ data: mockData });

    const result = await fetchUserData(1);

    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith('https://example.com/api/users/1');
  });

  it('return error if not ok', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    const result = await fetchUserData(1);

    expect(result).toEqual({ error: 'Failed to fetch user data' });
  });
});
