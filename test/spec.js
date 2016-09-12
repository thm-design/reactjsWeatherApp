import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import apiData from './MOCKDATA';
import moment from 'moment';
import getTimeOfTheDay from './../pages/home/utils/GetTimeOfTheDay';
import getIconUrl from './../pages/home/utils/GetIconUrl';
import jsdom from 'jsdom';
import WeatherBox from './../components/WeatherBox/WeatherBox';
import styles from './../components/WeatherBox/WeatherBox.css';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('<WeatherBox/>', () => {
  let wrapper;

  beforeEach(() => {
    const item = apiData.list[0];
    const time = moment().format('HH');
    const timeOfDay = getTimeOfTheDay(time);
    const temp = Math.round(item.temp[timeOfDay]);
    const min = Math.round(item.temp.min);
    const max = Math.round(item.temp.max);
    wrapper = shallow(
      <WeatherBox
        {...styles}
        date={item.dt}
        icon={getIconUrl(item.weather[0].id)}
        key={0}
        humidity={item.humidity}
        temp={temp}
        tempMin={min}
        tempMax={max}
        pressure={item.pressure}
        windSpeed={item.speed}
        weather={item.weather[0] || {}}
      />
    );
  });

  it('Should render as a <div>.', () => {
    expect(wrapper.is('div')).to.equal(true);
  });

  it('Should render correct value for temperature', () => {
    const tempText = wrapper.find('#temp').text();
    expect(tempText).to.equal('18°C');
  });

  it('Should render correct value for description', () => {
    const tempText = wrapper.find('#desc').text();
    expect(tempText).to.equal('clear sky');
  });

  it('Should render correct value for dateTime', () => {
    const tempText = wrapper.find('#dateTime').text();
    expect(tempText).to.equal('09.11');
  });

  it('Should render correct value for day', () => {
    const tempText = wrapper.find('#day').text();
    expect(tempText).to.equal('Sun');
  });

  it('Should render correct value for day', () => {
    const tempText = wrapper.find('#tempMinMax').text();
    expect(tempText).to.equal('20°/14°');
  });

  it('Should render correct value for humidity', () => {
    const tempText = wrapper.find('#humidity').text();
    expect(tempText).to.equal('hum. 80%');
  });

  it('Should render correct value for windSpeed', () => {
    const tempText = wrapper.find('#windSpeed').text();
    expect(tempText).to.equal('wind 1.96 m/s');
  });

  it('Should render correct value for pressure', () => {
    const tempText = wrapper.find('#pressure').text();
    expect(tempText).to.equal('atmos. 1015.57 hPa');
  });

});
