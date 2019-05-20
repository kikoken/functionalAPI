// api
import axios from '../api/axios';
import api from '../api';

// repositories
import UserRepository from './userRepository';

const users = UserRepository('')

const repository = (client) => {
  return Object.freeze({
    users: {...users(client)}
  })
}

export default repository(api(axios))