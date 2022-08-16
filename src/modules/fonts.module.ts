import {PixelRatio, Dimensions, Platform} from 'react-native';

const scale = Dimensions.get('window').width / 320;

const normalize = (fontSize: number) => {
  const newFontSize = scale * fontSize;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newFontSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newFontSize)) - 2;
  }
};

const fonts = {
  size: {
    small: normalize(11),
    medium: normalize(12),
    large: normalize(14),
  },
  family: {
    ROBOTO_BOLD: 'Roboto-Bold',
    ROBOTO_MEDIUM: 'Roboto-Medium',
    ROBOTO_REGULAR: 'Roboto-Regular',
    ROBOTO_LIGHT: 'Roboto-Light',
    ROBOTO_THIN: 'Roboto-Thin',
  },
};

export {fonts};
