import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          position: 'relative',
          backgroundColor: 'green',
        }}>
        <View
          style={{
            borderWidth: 1,
            borderTopWidth: 5,
            borderBottomWidth: 10,
            borderLeftWidth: 3,
            borderRightWidth: 20,
            borderColor: 'red',
            borderRadius: 10,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <Text>Hello World with border</Text>
        </View>

        <View
          style={{
            backgroundColor: 'red',
            margin: 10,
            // marginTop: 5,
            // marginBottom: 5,
            // marginLeft: 100,
            // marginRight: 100,
            marginHorizontal: 100,
            marginVertical: 5,
          }}>
          <Text>Hello World with margin</Text>
        </View>

        <View
          style={{
            backgroundColor: 'red',
            padding: 10,
            // paddingTop: 5,
            // paddingBottom: 5,
            // paddingLeft: 100,
            // paddingRight: 100,
            paddingHorizontal: 100,
            paddingVertical: 5,
          }}>
          <Text>Hello World with margin</Text>
        </View>

        <View
          style={{
            backgroundColor: 'blue',
            position: 'absolute',
          }}>
          <Text>Hello World with position absoulute</Text>
        </View>

        <View
          style={{
            backgroundColor: 'yellow',
            position: 'absolute',
            zIndex: 1,
          }}>
          <Text>Hello World with position absoulute and z index</Text>
        </View>
        <View
          style={{
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#ff0000',
              fontFamily: 'Arial',
              fontSize: 20,
              fontStyle: 'italic',
              fontWeight: '400',
              textAlign: 'right',
            }}>
            Hello World with position absoulute and z index
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
