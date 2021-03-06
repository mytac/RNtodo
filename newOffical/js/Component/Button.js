import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { event, myStyle, outerStyle, Ele } = this.props;
    return (
      <TouchableOpacity onPress={event} style={outerStyle}>
        <View style={myStyle}>
          <Ele />
        </View>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  event: PropTypes.func,
  myStyle: PropTypes.number,
  outerStyle: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.array.isRequired,
  ]),
  Ele: PropTypes.func.isRequired,
};

Button.defaultProps = {
  myStyle: 0,
  outerStyle: 0,
  event: () => {},
};

