import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';

import {VStack} from '@src/commons';

import {styles} from './formLabel.style';

interface FormLabelProps extends PropsWithChildren {
  label?: string;
}

const FormLabel = ({children, label}: FormLabelProps) => {
  return (
    <VStack gap={4} style={[styles.container]}>
      <Text style={styles.textStyle}>{label}</Text>
      {children}
    </VStack>
  );
};

export {FormLabel};
