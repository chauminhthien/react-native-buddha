import React from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native';

import { colors } from '../../utils';

export default props => {
  const { style, ...rest } = props;
  return(
    <TextInput
      underlineColorAndroid="transparent"
      style = {[ styles.textInput, style ]}
      {...rest} />
  )
}

const styles = StyleSheet.create({
  textInput: {
    color: colors.bluePrimary,
    fontSize: 20
  }
})
