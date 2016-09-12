import React, { PropTypes } from 'react';
import styles from './WeatherBox.css';
import moment from 'moment';
import shallowCompare from 'react-addons-shallow-compare';

class WeatherBox extends React.Component {

  static displayName = 'WeatherBox';

  static propTypes = {
    icon: PropTypes.string,
    date: PropTypes.number,
    temp: PropTypes.number,
    humidity: PropTypes.number,
    windSpeed: PropTypes.number,
    pressure: PropTypes.number,
    tempMin: PropTypes.number,
    tempMax: PropTypes.number,
    weather: PropTypes.object,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      icon, date, humidity, pressure, temp, tempMin, tempMax, weather, windSpeed,
    } = this.props;
    const day = moment.unix(date).format('ddd');
    const dateTime = moment.unix(date).format('MM.DD');

    return (
      <div className={styles.weatherBox}>
        <div className={styles.leftSide}>
          <div className={styles.leftInnerLeft}>
            <div className={styles.day} id="day">{day}</div>
            <div className={styles.date} id="dateTime">{dateTime}</div>
          </div>
          <div className={styles.icon}>
            <img alt={'icon'} src={icon} />
            <span className={styles.line} />
          </div>
          <div className={styles.leftInnerRight}>
            <div className={styles.desc} id="desc">{weather.description}</div>
            <div className={styles.temp} id="temp">{`${temp}°C`}</div>
            <span className={styles.tempMinMax} id="tempMinMax">{`${tempMax}°/${tempMin}°`}</span>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.tempMinMax} id="humidity">{`hum. ${humidity}%`}</div>
          <div className={styles.tempMinMax} id="windSpeed">{`wind ${windSpeed} m/s`}</div>
          <div className={styles.tempMinMax} id="pressure">{`atmos. ${pressure} hPa`}</div>
        </div>
      </div>
    );
  }

}

export default WeatherBox;
