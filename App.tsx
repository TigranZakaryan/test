/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';




export default class App extends Component<Props> {
  render() {
    return (
      
      <View style={styles.container}>
        <View style={{borderWidth: 2, borderRadius: 6, borderColor: 'black', width: 350}}>
          <Text style={{ padding: 10, fontSize: 50, textAlign: "right"}}> 0 </Text>
      </View>
      <Text style={{paddingVertical: 40}}> </Text>
        <View style={styles.generalButtons}>
          <View style={{ flex: 1}}>
            <Button title='AC'/>
          </View>
          <View style={{ flex: 1}}>
            <Button title='+/-'/>
          </View>
          <View style={{ flex: 1 }}>
            <Button title='%'/>
          </View>
          <View style={{ flex: 1 }}>
            <Button title='/'/>
          </View>
        </View>
        <View>
          <Text> </Text>
        </View>
        <View style={styles.generalButtons}>
          <View style={{ flex: 1}}>
            <Button title='1'/>
          </View>
          <View style={{ flex: 1}}>
            <Button title='2'/>
          </View>
          <View style={{ flex: 1 }}>
            <Button title='3'/>
          </View>
          <View style={{ flex: 1 }}>
            <Button title='*'/>
          </View>
        </View>
        <View>
          <Text> </Text>
        </View>
        <View style={styles.generalButtons}>
          <View style={{ flex: 1}}>
            <Button title='4'/>
          </View>
          <View style={{ flex: 1}}>
            <Button title='5'/>
          </View>
          <View style={{ flex: 1 }}>
            <Button title='6'/>
          </View>
          <View style={{ flex: 1 }}>
            <Button title='-'/>
          </View>
        </View>
        <Text> </Text>
        <View style={styles.generalButtons}>
          <View style={{ flex: 1}}>
            <Button title='1'/>
          </View>
          <View style={{ flex: 1}}>
            <Button title='2'/>
          </View>
          <View style={{ flex: 1 }}>
            <Button title='4'/>
          </View>
          <View style={{ flex: 1 }}>
            <Button title='+'/>
          </View>
        </View>
        <Text> </Text>
        <View style={styles.generalButtons}>
          <View style={{ flex: 2}}>
            <Button title='0'/>
          </View>
          <View style={{ flex: 1}}>
            <Button title='.'/>
          </View>
          <View style={{ flex: 1 }}>
            <Button title='='/>
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

  generalButtons: {
    flexDirection: 'row', 
    alignItems: 'center',
  }

});
