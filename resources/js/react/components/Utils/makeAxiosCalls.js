/* eslint-disable */
const axios = require('axios');

/**
 * this makes GET call using axios and returns a promise
 * @param url - string, full url
 * @param dataOnly - bolean. If true will return only data, if false full response
 */

export const makeGetCall = async (url, dataOnly = true) => {
  try {
    const response = await axios.get(url);
    // console.log('lorem = ', response);
    let objReturn = response.data;
    if (!dataOnly) {
      objReturn = response;
    }
    // console.log('objReturn = ', objReturn);
    return objReturn;
  } catch (error) {
    // console.error('my error = ', error);
    return error;
  }
};

/**
 * this makes POST call using axios and returns a promise
 * @param url - string, full url
 * @param objBody - object with data that will go in the body of the request
 * @param dataOnly - bolean. If true will return only data, if false full response
 */

export const makePostCall = async (url, objBody, dataOnly = true) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  const postCall = axios.post(url, objBody, config)
    .then(function (response) {
      // console.log(response);
      let objReturn = response.data;
      if (!dataOnly) {
        objReturn = response;
      }
      // console.log('objReturn = ', objReturn);
      return objReturn;
    })
    .catch(function (error) {
      // console.log(error);
      return error;
    });

  const printReturn = async () => {
    const a = await postCall;
    //console.log(a);
    return a;
  };
  const promise = await printReturn();
  return promise;
};
