import React, {useState} from 'react';
import {Text} from 'react-native';

const MyTextUseState = () => {
  const [text, setText] = useState('Hello World');

  const textHandling = () => {
    setText('Hello world, I learned how to change state');
  };

  return <Text onPress={() => textHandling()}>{text}</Text>;
};

export default MyTextUseState;
