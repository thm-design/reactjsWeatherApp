const owmAPI = 'https://crossorigin.me/http://api.openweathermap.org/data/2.5/forecast/daily?id=6173331&cnt=7&units=metric&APPID=d6a8492b0d927353ebc1fb811d466922';
const apiData = () => fetch(owmAPI)
  .then((response) => response.json())
  .then((result) => result)
  .catch((err) => {
    throw err;
  });

export default apiData;
