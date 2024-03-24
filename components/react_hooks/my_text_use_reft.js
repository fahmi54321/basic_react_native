import React, {useRef} from 'react';
import {Button, SafeAreaView, ScrollView, Text} from 'react-native';

const MyTextUseRef = () => {
  let array = Array(1000).fill(0);

  const scrollViewRef = useRef(null);

  const handleClick = () => {
    scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
  };
  return (
    <SafeAreaView>
      <ScrollView ref={scrollViewRef}>
        {array.map((val, index) => (
          <Text key={index}>Hello world {index}</Text>
        ))}
      </ScrollView>
      <Button onPress={handleClick} title="Scroll To Top" />
    </SafeAreaView>
  );
};

export default MyTextUseRef;
