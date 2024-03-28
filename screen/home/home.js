import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import homeStyle from './style';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <View style={homeStyle.bg}>
          <Text style={homeStyle.text}>Home screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
