import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import MyText from './components/my_text';
import Margin from './style/margin';
import ImageComponent from './components/image/image_component';
import TextInputComponent from './components/text_input/text_input_component';
import ScrollViewComponent from './components/scroll_view/scroll_view_component';
import BtnAndFormComponent from './components/button_and_form/btn_and_form_component';
import SwitchComponent from './components/switch/switch_component';
import IconComponent from './components/icon/icon_component';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Class Component Text */}
        <MyText name={'Fahmi'} />

        <View style={Margin.vertical} />

        {/* Image Component */}
        <ImageComponent />

        <View style={Margin.vertical} />

        {/* Text Input Component */}
        <TextInputComponent />

        <View style={Margin.vertical} />

        {/* Scroll View Component */}
        <ScrollViewComponent />

        <View style={Margin.vertical} />

        {/* Button And Form Component */}
        <BtnAndFormComponent />

        <View style={Margin.vertical} />

        {/* Switch Component */}
        <SwitchComponent />

        <View style={Margin.vertical} />

        {/* Icon Component */}
        <IconComponent />

        <View style={Margin.vertical} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
