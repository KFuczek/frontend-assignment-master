const makeHTTPRequest = async (request) => {
    const response = await fetch(request);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return await response.json();
}

export const getDatafromHttpRequest = (request) => {
    return makeHTTPRequest(request).then(data => {
        return data;
    }).catch(error => {
        console.log(error);
        return null;
    });
}
