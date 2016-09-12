import React, { PropTypes } from 'react';
import apiData from './data/apiData';
import Layout from '../../components/Layout';
import styles from './styles.css';
import { resolve } from 'react-resolver';
import shallowCompare from 'react-addons-shallow-compare';
import moment from 'moment';
import Top from './Top/Top';
import WeatherBox from '../../components/WeatherBox';
import isFlexbox from 'is-flexbox';
import getTimeOfTheDay from './utils/GetTimeOfTheDay';
import getIconUrl from './utils/GetIconUrl';

class HomePage extends React.Component {

  static displayName = 'HomePage';

  static propTypes = {
    weatherData: PropTypes.object,
  };

  static defaultProps = {
    weatherData: {},
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  /*
    We can convert Kelvin to Celsius, no problem.
    But the API returns Klevin, Farenheit or Celsius with
    the '&units=metric' parameter etc.. So these functions are not in use currently
  */
  // kelvinToFahrenheit = (value) => (this.kelvinToCelsius(value) * 1.8) + 32;
  // kelvinToCelsius = (value) => value - 273.15;

  renderWeatherBoxes = (weatherData) => weatherData.map((item, i) => {
    const time = moment().format('HH');
    const timeOfDay = getTimeOfTheDay(time);
    const temp = Math.round(item.temp[timeOfDay]);
    const min = Math.round(item.temp.min);
    const max = Math.round(item.temp.max);

    return (<WeatherBox
      date={item.dt}
      icon={getIconUrl(item.weather[0].id)}
      key={i}
      humidity={item.humidity}
      temp={temp}
      tempMin={min}
      tempMax={max}
      pressure={item.pressure}
      windSpeed={item.speed}
      weather={item.weather[0] || {}}
    />);
  });

  render() {
    if (!isFlexbox) {
      return (
        <div>
          Your browser is not supported, please use one that has Flexbox support: <a href="http://caniuse.com/#feat=flexbox" target="_blank">http://caniuse.com/#feat=flexbox</a>
        </div>
      );
    }
    const { weatherData } = this.props;
    const time = moment().format('HH');
    const timeOfDay = getTimeOfTheDay(time);
    const temp = Math.round(weatherData.list[0].temp[timeOfDay]);
    const min = Math.round(weatherData.list[0].temp.min);
    const max = Math.round(weatherData.list[0].temp.max);

    return (
      <Layout className={styles.content}>
        <Top
          city={weatherData.city.name}
          date={weatherData.list[0].dt}
          description={weatherData.list[0].weather[0].description}
          icon={getIconUrl(weatherData.list[0].weather[0].id)}
          temp={temp}
          tempMin={min}
          tempMax={max}
        />
        <div className={styles.weatherBoxContainer}>
          {this.renderWeatherBoxes(weatherData.list)}
        </div>
      </Layout>
    );
  }

}

export default resolve('weatherData', () => apiData())(HomePage);
