import React from 'react';
import {View} from 'react-native';
import MyText from '../my_text/my_text';
import {PropTypes} from 'prop-types'; // npm install prop-types

const Item = ({name, price}) => {
  return (
    <View>
      <MyText>{name}</MyText>
      <MyText>{price}</MyText>
    </View>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
