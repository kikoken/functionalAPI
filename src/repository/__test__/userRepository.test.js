import UserRepository from '../userRepository'

test('Users get', async () => {
  //setting
  const resp = {data: 'test'}
  const api = {}
  api.get = jest.fn().mockImplementation(() => Promise.resolve(resp))

  const users = UserRepository('user')
  const usersService = users(api)

  let response = await usersService.get()

  expect(api.get).toHaveBeenCalledTimes(1)
  expect(response.data).toEqual(resp.data)
})