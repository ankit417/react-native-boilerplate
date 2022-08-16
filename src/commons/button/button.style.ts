import {StyleSheet} from 'react-native';

import {colors, fonts, spacing} from '@src/modules';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light.black,
    paddingVertical: 16,
    paddingHorizontal: 10,
    height: 48,
    borderRadius: spacing.button.BORDER_RADIUS,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 5.62,

    elevation: 2,
  },
  text: {
    fontSize: fonts.size.medium,
    fontFamily: fonts.family.ROBOTO_MEDIUM,
    color: colors.light.cardColor,
    textAlign: 'center',
  },
});

export {styles};
