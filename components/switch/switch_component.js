import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Switch,
} from 'react-native';

const SwitchComponent = () => {
  const [passInput, setPassInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [shoouldKeepLoggedIn, setShoouldKeepLoggedIn] = useState(true);
  return (
    <SafeAreaView>
      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        value={passInput}
        onChangeText={value => {
          setPassInput(value);
        }}
        autoFocus={true}
        keyboardType={'numeric'}
        secureTextEntry={true}
        placeholder="Please enter your password"
      />

      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        value={emailInput}
        onChangeText={value => {
          setEmailInput(value);
        }}
        autoFocus={true}
        keyboardType={'email-address'}
        secureTextEntry={true}
        placeholder="Please enter your email"
        returnKeyType={'done'} // done, go, next, search
      />
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Switch
          value={shoouldKeepLoggedIn}
          onValueChange={value => setShoouldKeepLoggedIn(value)}
        />
        <Text />
      </View>
      <TouchableOpacity
        style={[
          {
            backgroundColor: 'black',
          },
          (emailInput.length === 0 || passInput.length < 8) && {opacity: 0.5},
        ]}
        disabled={emailInput.length === 0 || passInput.length < 8}
        onPress={() => {
          console.log(emailInput, passInput, shoouldKeepLoggedIn);
        }}>
        <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
          Submit
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SwitchComponent;
