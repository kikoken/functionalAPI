import api from '../index'
import axios from '../axios'

jest.mock('../axios')

test('Api get data', async () => {
  //setup
  let resp = 'prueba'
  axios.get= jest.fn().mockImplementation(() => Promise.resolve({data: resp}))

  let response = await api(axios).get('test')

  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(response).toEqual(resp)
})