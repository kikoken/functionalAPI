import '@babel/polyfill';

// repository
import Repository from './repository';

(async () => {
  console.log('init app');
  await Repository.users.get();
})()