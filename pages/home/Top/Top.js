import React from 'react';
import styles from './styles.css';
import shallowCompare from 'react-addons-shallow-compare';

class Top extends React.Component {

  static displayName = 'Top';

  static propTypes = {
    city: React.PropTypes.string,
    icon: React.PropTypes.string,
    date: React.PropTypes.number,
    description: React.PropTypes.string,
    temp: React.PropTypes.number,
    tempMin: React.PropTypes.number,
    tempMax: React.PropTypes.number,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { city, description, icon, temp, tempMin, tempMax } = this.props;
    const desc = `${description.charAt(0).toUpperCase()}${description.slice(1)}`;
    // const day = moment.unix(date).format('dddd');
    // const dateTime = moment.unix(date).format('MM.DD.YYYY');

    return (
      <div className={styles.topContainer}>
        <div className={styles.leftSide}>
          <div className={styles.now}>now</div>
          <div className={styles.SVG}>
            <img alt={'icon'} src={icon} />
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.city}>{city}</div>
          <span className={styles.description}>{desc}</span>
          <span className={styles.temp}>{`${temp}°C`}</span>
          <div className={styles.tempMinMax}>{`${tempMax}°/${tempMin}°`}</div>
        </div>
      </div>
    );
  }

}

export default Top;
