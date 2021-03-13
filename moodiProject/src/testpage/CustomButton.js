// CustomButton.js
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default class CustomButton extends Component{

    static defaultProps = {
        title: 'untitled',
        buttonColor: '#000',
        buttonWidth: 0,
        buttonHeight: 0,
        titleSize: 0,
        titleColor: '#fff',
        onPress: () => null,
     }

  constructor(props){
    super(props);
  }

  render(){
    return (
      <TouchableOpacity style={[
        styles.button,
        {backgroundColor: this.props.buttonColor,
        width: this.props.buttonWidth,
        height: this.props.buttonHeight}
      ]}
      onPress={this.props.onPress}>
        <Text style={[
          styles.title,
          {color: this.props.titleColor, fontSize: this.props.titleSize}
        ]}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
    title: {
        fontFamily: 'OdAmumal'
    },
  });