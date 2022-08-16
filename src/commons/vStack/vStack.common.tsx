import React, {Children} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

import {styles} from './vStack.style';

interface VStackProps {
  children?: any;
  gap?: number;
  style?: StyleProp<ViewStyle>;
}

const VStack = ({children, gap = 8, style}: VStackProps) => {
  const gapStyles = {
    height: gap,
  };

  return (
    <View style={[styles.container, style]}>
      {Children.map(children, (child: React.ReactElement<any>, index) => (
        <>
          {child}
          {index !== Children.count(children) - 1 && <View style={gapStyles} />}
        </>
      ))}
    </View>
  );
};

export {VStack};
