
const makeHTTPRequest = async (request) => {
    const response = await fetch(request);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
}

export const getDatafromHttpRequest = (request) => {
    makeHTTPRequest(request).then(data => {
        console.log('data', data);
    }).catch(error => {
        console.log('error', error);
    });
}
