import React from 'react';
import {
  TextInput as NativeTextInput,
  StyleProp,
  ViewStyle,
  View,
  Text,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';

import {styles} from './textInput.style';

interface InputTextProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  error?: string | null;
  label?: string;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
}

const TextInput = ({
  containerStyle,
  error,
  label,
  rightIcon,
  onRightIconClick,
  ...rest
}: InputTextProps) => {
  return (
    <View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View
        style={[
          styles.container,
          containerStyle,
          !!error && styles.errorStyle,
        ]}>
        <View style={styles.inputcontainer}>
          <NativeTextInput style={[styles.input, rest.style]} {...rest} />
        </View>

        <View>
          {rightIcon ? (
            <View style={styles.rightIcon}>
              <TouchableOpacity activeOpacity={0.7} onPress={onRightIconClick}>
                {rightIcon}
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>

      {!!error && (
        <View style={styles.errorWrapper}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export {TextInput};
