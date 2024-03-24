import React, {useState} from 'react';
import {Text, SafeAreaView, View, Button} from 'react-native';
import ThemeContext from './theme_context';
import ItemHomeUseContext from './item_home_use_context';

const MyHomeUseContextExample = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView>
        <View style={{backgroundColor: isDarkMode ? '#222222' : '#ffffff'}}>
          <Text>Hello World</Text>
          <Button title="Switch Mode" onPress={toggleTheme} />
        </View>
        <ItemHomeUseContext />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default MyHomeUseContextExample;
