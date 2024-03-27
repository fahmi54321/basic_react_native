import React, {useState} from 'react';
import {SafeAreaView, Image} from 'react-native';

const ImageComponent = () => {
  const [imageSource, setImageSource] = useState({uri: 'http://example.com'});

  return (
    <SafeAreaView>
      <Image
        // source={require('assets/images/2024-03-21 11.30.44.jpg')}
        source={imageSource}
        style={{width: 100, height: 100, backgroundColor: 'red'}}
        resizeMode="contain" // stretch, repeat, center
        onError={() => {
          console.log('Error has been detected while loading an image');
          setImageSource(require('assets/images/2024-03-21 11.30.44.jpg'));
        }}
      />
      <Image
        source={{
          uri: 'https://www.shutterstock.com/shutterstock/photos/1883859943/display_1500/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg',
        }}
        style={{width: 100, height: 100}}
      />
    </SafeAreaView>
  );
};

export default ImageComponent;
