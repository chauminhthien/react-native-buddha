import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

import { colors } from '../../utils';

export default props => {
  const { children, txtStyle, btnStyle ...rest } = props;
  return(
    <TouchableOpacity {...rest} style={ [styles.buttonWrapprer, btnStyle] }>
      <Text style={ [styles.text, txtStyle] }>{ children }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonWrapprer: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.whitePrimary
  },
  text: {
    fontSize: 18
  }
})
