const encodeCallBody = (details: any) => {
    let requestBody: any = [];
    for (const property in details) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      requestBody.push(encodedKey + "=" + encodedValue);
    }
    requestBody = requestBody.join("&");

    return requestBody;
}

export default encodeCallBody;