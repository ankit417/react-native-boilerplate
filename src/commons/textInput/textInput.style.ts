import {StyleSheet} from 'react-native';

import {colors, fonts} from '@src/modules';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: colors.light.grey300,
    backgroundColor: 'white',
    borderWidth: 1,
    width: '100%',
  },
  label: {
    marginBottom: 4,
  },
  inputcontainer: {
    width: '100%',
  },
  input: {
    paddingLeft: 0,
    fontSize: fonts.size.medium,
    overflow: 'hidden',
    color: colors.light.textColor,
  },
  rightIcon: {
    position: 'absolute',
    justifyContent: 'center',
    right: 0,
    top: -15,
  },
  errorStyle: {
    borderColor: colors.light.red,
  },
  errorWrapper: {
    marginTop: 4,
  },
  errorText: {
    color: colors.light.red,
  },
});

export {styles};
