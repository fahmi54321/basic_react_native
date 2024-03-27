import React, {useState} from 'react';
import {SafeAreaView, TextInput, Text, TouchableOpacity} from 'react-native';

const BtnAndFormComponent = () => {
  const [passInput, setPassInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
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
      <TouchableOpacity
        style={[
          {
            backgroundColor: 'black',
          },
          (emailInput.length === 0 || passInput.length < 8) && {opacity: 0.5},
        ]}
        disabled={emailInput.length === 0 || passInput.length < 8}
        onPress={() => {
          console.log(emailInput, passInput);
        }}>
        <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
          Submit
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BtnAndFormComponent;
