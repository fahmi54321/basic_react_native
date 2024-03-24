import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

const MyTextUseEffect = () => {
  const [text, setText] = useState('Hello World');

  const textHandling = () => {
    setText('Hello world, I learned how to listen event');
  };

  useEffect(() => {
    console.log('The Text has changed!');
  }, [text]);

  return <Text onPress={() => textHandling()}>{text}</Text>;
};

export default MyTextUseEffect;
