import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

// import {colors} from '@src/modules';

import {styles} from './chip.style';

const Chip = ({children}: PropsWithChildren) => {
  return <View style={styles.titleCount}>{children}</View>;
};

export {Chip};
