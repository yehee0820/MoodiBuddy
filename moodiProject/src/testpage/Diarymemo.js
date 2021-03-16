import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class DiaryMemo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Memo Diary</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DiaryMemo;