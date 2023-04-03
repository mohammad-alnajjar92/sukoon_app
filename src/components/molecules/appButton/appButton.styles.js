import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  appButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  padding: {padding: 10},
  pressed: {opacity: 0.7},
  buttonText: {fontWeight: 'bold'},
  loading: {marginStart: 10},
});
