import React, {Children} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

import {styles} from './hStack.style';

interface HStackProps {
  children?: any;
  gap?: number;
  style?: StyleProp<ViewStyle>;
}

const HStack = ({children, gap = 8, style}: HStackProps) => {
  const gapStyles = {
    width: gap,
  };

  return (
    <View style={[styles.container, style, styles.permanentContainer]}>
      {Children.map(children, (child: React.ReactElement<any>, index) => (
        <>
          {child}
          {index !== Children.count(children) - 1 && <View style={gapStyles} />}
        </>
      ))}
    </View>
  );
};

export {HStack};
