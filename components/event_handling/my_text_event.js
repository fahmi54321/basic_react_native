import React from 'react';
import {Text} from 'react-native';

const MyTextHandling = () => {
  const handleTextClick = () => {
    alert('the text has been clicked');
  };
  return <Text onPress={() => handleTextClick()}>Hello, Klik text ini</Text>;
};

export default MyTextHandling;
