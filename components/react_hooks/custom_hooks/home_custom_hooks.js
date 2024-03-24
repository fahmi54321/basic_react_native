import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import useToggle from './toggle';

const HomeCustomHooks = () => {
  const [isOn, toogleIsOn] = useToggle(false);
  return (
    <SafeAreaView>
      <Text>{isOn ? 'ON' : 'OFF'}</Text>
      <Button title="Toogle" onPress={toogleIsOn} />
    </SafeAreaView>
  );
};

export default HomeCustomHooks;
