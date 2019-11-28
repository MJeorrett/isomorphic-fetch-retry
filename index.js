require('isomorphic-fetch');

const fetchRetry = require('./fetchRetry');

const demoApp = async () => {
  const result = await fetchRetry('Http://localhost:3111', 5);
  console.log('Received result:', await result.text());
};

demoApp();