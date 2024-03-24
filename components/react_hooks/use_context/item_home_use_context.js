import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import ThemeContext from './theme_context';

const ItemHomeUseContext = () => {
  const isDarkMode = useContext(ThemeContext);
  return (
    <View style={{backgroundColor: isDarkMode ? '#222222' : '#ffffff'}}>
      <Text style={{color: isDarkMode ? 'ffffff' : '000000'}}>
        Welcome to my application
      </Text>
    </View>
  );
};

export default ItemHomeUseContext;
