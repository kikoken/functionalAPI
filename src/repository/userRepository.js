const userRepository = resource => client => ({
  get: async () => await client.get(resource)
})

export default userRepository;
