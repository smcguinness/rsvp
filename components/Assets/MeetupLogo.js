import React from 'react';
import PropTypes from 'prop-types';

import SVG from '../Utils/svg';

const MeetupLogo = ({
  fill,
  height,
  width,
  ...props
}) => (
  <SVG height={height} viewBox="0 0 1024 1024" width={width} {...props}>
    <path fill={fill} d="M1023.061 863.488c-12.971-82.389-165.291-18.944-174.763-109.184-13.355-127.915 177.067-403.584 162.005-510.805-13.355-96.213-78.549-116.48-135.040-117.589-54.784-0.853-69.248 7.765-87.808 18.56-10.795 6.229-26.112 18.56-47.445-1.749-14.251-13.568-23.765-22.869-38.613-34.944-7.765-6.059-19.883-13.824-40.32-16.853-20.309-3.029-46.848 0-63.659 7.125-16.853 7.339-29.952 19.883-43.776 31.957-13.781 12.075-48.939 51.115-81.536 36.651-14.293-6.187-62.208-30.123-96.939-45.013-66.688-28.885-163.072 17.92-197.803 79.616-51.755 91.691-153.6 452.395-169.131 499.84-34.517 106.752 44.032 193.707 149.717 188.757 44.885-2.176 74.667-18.347 102.912-69.888 16.384-29.568 169.771-430.379 181.248-449.835 8.405-13.781 36.011-32.128 59.307-20.267 23.509 12.075 28.245 37.077 24.789 60.629-5.803 38.187-113.877 282.837-118.229 310.4-6.912 47.061 15.317 73.131 64.299 75.691 33.451 1.749 66.859-10.112 93.184-60.16 14.891-27.819 185.557-369.749 200.619-392.619 16.64-25.003 29.995-33.237 47.061-32.341 13.184 0.64 34.091 4.096 28.928 43.349-5.205 38.613-142.635 289.28-156.843 350.763-19.456 82.219 25.685 165.291 99.883 201.728 47.445 23.296 254.72 62.976 237.952-43.819z" />
  </SVG>
);

MeetupLogo.defaultProps = {
  fill: '#ed1c40',
  height: '25px',
  width: '25px',
};

MeetupLogo.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default MeetupLogo;
