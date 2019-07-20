import React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { StorageKey } from '../../utils';

class AuthLoading extends React.Component{

  async componentDidMount(){
    const { navigation } = this.props;
    const tokenStorage = await AsyncStorage.getItem(StorageKey.token);

    if(tokenStorage && tokenStorage !== null) navigation.navigate('Main');
    else navigation.navigate('Auth');
  }

  render(){
    return (
      <View>
        <Text>AuthLoading</Text>
      </View>
    )
  }
}

export default AuthLoading;
