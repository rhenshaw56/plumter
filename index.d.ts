declare module 'react-native-ios-modal' {
  import React from 'react';
  import {ViewStyle, StyleProp} from 'react-native';

  interface modal {
    setVisibility: () => void;
  }

  interface ModalViewProps {
    containerStyle?: StyleProp<ViewStyle>;
    ref: React.Ref<React.ReactElement>;
  }
  export const ModalView: React.FC<ModalViewProps>;
}
