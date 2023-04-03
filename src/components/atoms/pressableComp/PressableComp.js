import React, {useState} from 'react';
import {Pressable, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../../styles/colors';
import styles from './PressableComp.styles';

const PressableComp = ({
  delayLongPress,
  disabled,
  loading,
  onPress,
  color,
  style,
  removeOpacity,
  children,
}) => {
  const [pressing, setPressing] = useState(false);

  const onPressInHandler = () => setPressing(true);
  const onPressOutHandler = () => setPressing(false);

  return (
    <Pressable
      style={[
        (pressing || disabled || loading) && !removeOpacity && styles.pressed,
        style,
      ]}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      onPress={onPress}
      disabled={disabled || loading}
      delayLongPress={delayLongPress}>
      {children}
      {loading && (
        <ActivityIndicator style={styles.loading} size="small" color={color} />
      )}
    </Pressable>
  );
};

PressableComp.defaultProps = {
  delayLongPress: 500,
  disabled: false,
  loading: false,
  color: colors.white,
  style: null,
  removeOpacity: false,
  children: null,
};

PressableComp.propTypes = {
  delayLongPress: PropTypes.number,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  removeOpacity: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

export default PressableComp;
