import React from 'react';
import {SafeAreaView} from 'react-native';
import Item from './components/item/item';

const App = () => {
  return (
    <SafeAreaView>
      <Item name={'Table'} price={20} />
      <Item name={'Chair'} price={100} />
      <Item name={'Desk'} price={200} />
      <Item name={'Pencil'} price={20} />
    </SafeAreaView>
  );
};

export default App;
