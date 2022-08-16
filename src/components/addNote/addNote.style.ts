import {StyleSheet} from 'react-native';

import {colors, spacing} from '@src/modules';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  displayElement: {
    padding: 4,
  },

  topheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing.card.PADDING,
    backgroundColor: colors.light.primaryColor,
    color: colors.light.white,
  },
  whitetext: {
    color: colors.light.white,
  },
  body: {
    flexDirection: 'column',
    padding: spacing.screen.PADDING,
    // padding: spacing.card.PADDING,
    // borderColor: colors.light.grey200,
    // borderWidth: 1,
  },
  bodytop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pin: {
    borderColor: colors.light.grey200,
    borderWidth: 1,
    padding: spacing.default.PADDING,
    borderRadius: 8,
  },
});

export {styles};
