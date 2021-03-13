import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class Store extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image style={{
                width: 456,
                height: 416
      }} 
            source={require('../../assets/images/snoopyrun.png')}></Image>
        <Text 
        style={{fontFamily: 'FugazOne-Regular', 
                fontWeight: '800',
                fontSize: 50 }}>Coming Soon</Text>
        <Text
        style={{fontFamily: 'OdAmumal',
                fontWeight: '100',
                fontSize: 18,
                marginTop: 10,
                color: 'gray' }}>정비중이니 조금만 기다려주세요!</Text>
        <Text
        style={{fontSize: 15,
                marginTop: 120,
                fontWeight: '200'}}>Team MoodiBuddy</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0EDF4'
  },
});

export default Store;