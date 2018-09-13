/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Component } from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 4, flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
          <View style={{ flex: 1}}>
            <Button title='1'/>
          </View>
          <View style={{ flex: 1 }}>
            <Button title='2'/>
          </View>
          <View style={{ flex: 1 }}>
            <Button title='3'/>
          </View>
          <View style={{ flex: 1 }}>
            <Button title='4'/>
          </View>
          <View style={{ flex: 1 }}>
            <Button title='5'/>
          </View>
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
  },

});
