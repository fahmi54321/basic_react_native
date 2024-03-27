import React from 'react';
import {SafeAreaView, ScrollView, Image} from 'react-native';

const ScrollViewComponent = () => {
  return (
    <SafeAreaView>
      <ScrollView
        onScroll={() => {
          console.log('we are now scrolling');
        }}
        contentContainerStyle={{
          backgroundColor: 'red',
          height: 600,
          borderRadius: 10,
        }}
        showsVerticalScrollIndicator={false} // default is true
        horizontal={true}
        showsHorizontalScrollIndicator={true} // default is true
      >
        <Image
          source={require('assets/images/2024-03-21 11.30.44.jpg')}
          style={{height: 500, width: 500}}
        />
        <Image
          source={require('assets/images/2024-03-21 11.30.44.jpg')}
          style={{height: 500, width: 500}}
        />
        <Image
          source={require('assets/images/2024-03-21 11.30.44.jpg')}
          style={{height: 500, width: 500}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScrollViewComponent;
