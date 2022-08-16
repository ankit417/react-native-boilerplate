import React from 'react';
import {View, ViewStyle} from 'react-native';

import {styles} from './skeleton.style';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  style?: Omit<
    ViewStyle,
    | 'width'
    | 'height'
    | 'minWidth'
    | 'maxWidth'
    | 'minHeight'
    | 'maxHeight'
    | 'borderRadius'
  >;
  borderRadius?: number;
}

const Skeleton = ({
  width = '100%',
  height = 12,
  style,
  borderRadius = 4,
}: SkeletonProps) => {
  const customStyle = {width, height, borderRadius};

  return <View style={[styles.container, style, customStyle]} />;
};

export {Skeleton};
