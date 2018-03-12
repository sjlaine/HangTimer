import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#8b475d', fontSize: 32, alignSelf: 'center'}}>
          HangTime
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
