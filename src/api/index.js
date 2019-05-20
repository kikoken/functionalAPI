const makeApiAdapter = client => ({
  get: async (resource) => {
    const { data } = await client.get(resource);
    return data;
  }
});

export default makeApiAdapter;
