import React from 'react';
import {Text} from 'react-native-paper';
import PropTypes from 'prop-types';
import colors from '../../../styles/colors';

const AppText = ({style, color, children, textAlign, numberLines}) => (
  <Text numberOfLines={numberLines} style={{color, textAlign, ...style}}>
    {children}
  </Text>
);

AppText.propTypes = {
  color: PropTypes.string,
  numberLines: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  textAlign: PropTypes.oneOf(['center', 'right', 'left', 'auto', 'justify']),
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

AppText.defaultProps = {
  style: {},
  children: '',
  numberLines: 0,
  textAlign: 'left',
  color: colors.black,
};

export default AppText;
