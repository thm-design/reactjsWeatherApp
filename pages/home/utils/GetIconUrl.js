import IconUrls from './../icons';
import moment from 'moment';

const getIconUrl = (code) => {
  const time = moment().format('HH');
  let day = false;
  if (time >= 6 && time <= 19) day = true;

  let icon;
  if ((code > 199 && code < 232) || (code > 700 && code < 782)) icon = 'lightningIcon';
  if (code > 299 && code < 532) icon = 'rainyIcon';
  if (code > 599 && code < 613) icon = 'snowyIcon';
  if (code > 613 && code < 623) icon = 'snowShowersIcon';
  if ((code === 800 || code === 951) && !day) icon = 'clearNightIcon';
  if ((code === 800 || code === 951) && day) icon = 'sunnyIcon';
  if ((code > 800 && code < 803) && day) icon = 'mostlyCloudyIcon';
  if ((code > 800 && code < 803) && !day) icon = 'partlyCloudyNightIcon';
  if (code === 900 || code === 902 || code === 905) icon = 'windyIcon';
  if (code === 901) icon = 'thundershowersIcon';
  if (code === 903) icon = 'thermometerColdIcon';
  if (code === 904) icon = 'thermometerHotIcon';
  if (code === 906) icon = 'snowShowersIcon';
  if (code > 981 && code < 963) icon = 'windyIcon';

  return IconUrls[icon];
};

export default getIconUrl;
