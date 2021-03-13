import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class Community extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      
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
        <Image style={{
                width: 332,
                height: 120,
                marginTop: 40
      }} 
            source={require('../../assets/images/snoopy.png')}></Image>
        <Text
        style={{fontSize: 15,
                marginTop: 70,
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
    backgroundColor: '#F6E8D7'
  },
});

export default Community;