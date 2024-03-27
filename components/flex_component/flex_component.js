import React from 'react';
import {SafeAreaView, View} from 'react-native';

const FlexComponent = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{flex: 1, backgroundColor: 'yellow', width: 200, height: 200}}
        />
        <View
          style={{flex: 1, backgroundColor: 'green', width: 200, height: 200}}
        />
        <View
          style={{flex: 1, backgroundColor: 'black', width: 200, height: 200}}
        />
      </View>
    </SafeAreaView>
  );
};

export default FlexComponent;
