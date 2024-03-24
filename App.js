import React from 'react';
import {SafeAreaView} from 'react-native';
import Item from './components/item/item';
import ViewExample from './components/view/view_example';
import MyTextEvent from './components/event_handling/my_text_event';
import MyTextUseState from './components/react_hooks/my_text_use_state';
import {Margin} from './style/margin';
import {View} from 'react-native';
import MyTextUseEffect from './components/react_hooks/my_text_use_effects';
import MyTextUseRef from './components/react_hooks/my_text_use_reft';
import MyHomeUseContextExample from './components/react_hooks/use_context/home_use_context';
import HomeCustomHooks from './components/react_hooks/custom_hooks/home_custom_hooks';

const App = () => {
  return (
    <SafeAreaView>
      {/* Inline style */}
      <ViewExample />

      <View style={Margin.vertical} />

      {/* Prop paramaters */}
      <Item name={'Table'} price={20} />
      <Item name={'Chair'} price={100} />
      <Item name={'Desk'} price={200} />
      <Item name={'Pencil'} price={20} />

      <View style={Margin.vertical} />

      {/* Event Handling */}
      <MyTextEvent />

      <View style={Margin.vertical} />

      {/* Use State */}
      <MyTextUseState />

      <View style={Margin.vertical} />

      {/* Use Effect */}
      <MyTextUseEffect />

      <View style={Margin.vertical} />

      {/* Use Ref */}
      <MyTextUseRef />

      <View style={Margin.vertical} />

      {/* Use Context */}
      <MyHomeUseContextExample />

      <View style={Margin.vertical} />

      {/* Custom Hooks */}
      <HomeCustomHooks />
    </SafeAreaView>
  );
};

export default App;
