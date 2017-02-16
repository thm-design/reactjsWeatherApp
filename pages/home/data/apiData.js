const owmAPI = '#####api.openweathermap.org API CALL#####';
const apiData = () => fetch(owmAPI)
  .then((response) => response.json())
  .then((result) => result)
  .catch((err) => {
    throw err;
  });

export default apiData;
