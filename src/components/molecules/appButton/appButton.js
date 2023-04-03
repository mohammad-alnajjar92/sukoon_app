import React from 'react';
import PropTypes from 'prop-types';
import AppText from '../../atoms/appText/appText';
import PressableComp from '../../atoms/pressableComp/PressableComp';
import colors from '../../../styles/colors';
import styles from './appButton.styles';

const AppButton = ({
  label,
  delayLongPress,
  disabled,
  loading,
  onPress,
  removePadding,
  backgroundColor,
  color,
  style,
}) => (
  <PressableComp
    style={[
      {backgroundColor, ...styles.appButton},
      !removePadding && styles.padding,
      style,
    ]}
    onPress={onPress}
    loading={loading}
    disabled={disabled}
    delayLongPress={delayLongPress}
    backgroundColor={backgroundColor}>
    <AppText style={{color, ...styles.buttonText}}>{label}</AppText>
  </PressableComp>
);

AppButton.defaultProps = {
  delayLongPress: 500,
  disabled: false,
  loading: false,
  removePadding: false,
  backgroundColor: colors.spaceCadet,
  color: colors.white,
  style: {},
};

AppButton.propTypes = {
  label: PropTypes.string.isRequired,
  delayLongPress: PropTypes.number,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  removePadding: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
};

export default AppButton;
