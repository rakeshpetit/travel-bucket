import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Root = () => {
  return (
    <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Root;
