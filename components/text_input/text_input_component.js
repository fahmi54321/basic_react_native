import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';

const TextInputComponent = () => {
  const [textInput, setTextInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  return (
    <SafeAreaView>
      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        value={textInput}
        onChangeText={value => {
          setTextInput(value);
        }}
        autoFocus={true}
        placeholder="Please enter your name"
      />
      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        value={passInput}
        onChangeText={value => {
          setPassInput(value);
        }}
        autoFocus={true}
        keyboardType={'numeric'} // phone-pad
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
    </SafeAreaView>
  );
};

export default TextInputComponent;
