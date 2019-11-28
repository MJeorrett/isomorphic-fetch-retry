const fetchRetry = async (url, requestConfig, numAttempts = 5) => {
  const response = await fetch(url, requestConfig);

  if (response.ok) {
    return response;
  }

  if (numAttempts > 1) {
    console.log(`Fetch failed with status ${response.status}, trying again...`);
    return fetchRetry(url, requestConfig, numAttempts - 1);
  }

  console.log(`Fetch failed with status ${response.status}, giving up.`);
  return response;
};

module.exports = fetchRetry;