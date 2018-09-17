/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Component } from 'react';
import {Platform, StyleSheet, Text, View, Alert} from 'react-native';
import { Button, Icon } from 'react-native-elements';


let a: any = 0
let b: number = 2


export default class App extends Component<Props> {

  _onPressButton() {
    Alert.alert('You tapped the button!')
    return a + b;
  }

  render() {
    return (
      
      <View style={styles.container}>
        <View style={{borderWidth: 2, borderRadius: 6, borderColor: 'black', width: "95%"}}>
          <Text style={{ padding: 10, fontFamily: 'arial', fontSize: 50, color: 'black', textAlign: "right"}}>
            0
           </Text>
      </View>
      <Text style={[{ paddingBottom: "20%", paddingTop: 20}]}> </Text>
        <View style={styles.generalButtons}>
          <View style={styles.mainButtons}>
            <Button raised title='C'
              onPress={this._onPressButton}
              buttonStyle={{
                backgroundColor: "red",
              }} />
          </View>
          <View style={styles.mainButtons}>
            <Button raised title='+/-'
              buttonStyle={{
                backgroundColor: "orange",
              }} />
          </View>
          <View style={styles.mainButtons}>
            <Button raised title='%'
              buttonStyle={{
                backgroundColor: "orange",
              }} />
          </View>
          <View style={styles.mainButtons}>
            <Button raised title='/'
              buttonStyle={{
                backgroundColor: "orange",
              }} />
          </View>
        </View>
        <View>
          
        </View>
        <View style={styles.generalButtons}>
          <View style={styles.mainButtons}>
            <Button raised title='1'
            buttonStyle={{
              backgroundColor: "gray",
              }}/>
          </View>
          <View style={styles.mainButtons}>
            <Button raised title='2'
              buttonStyle={{
                backgroundColor: "gray",
              }} />
          </View>
          <View style={styles.mainButtons}>
            <Button raised title='3'
              buttonStyle={{
                backgroundColor: "gray",
              }} />
          </View>
          <View style={styles.mainButtons}>
            <Button raised title='*'
              buttonStyle={{
                backgroundColor: "orange",
              }} />
          </View>
        </View>
        <View>
        
        </View>
        <View style={styles.generalButtons}>
          <View style={styles.mainButtons}>
            <Button raised title='4'
              buttonStyle={{
                backgroundColor: "gray",
              }} />
          </View>
          <View style={styles.mainButtons}>
            <Button raised title='5'
              buttonStyle={{
                backgroundColor: "gray",
              }} />
          </View>
          <View style={styles.mainButtons}>
            <Button raised title='6'
              buttonStyle={{
                backgroundColor: "gray",
              }} />
          </View>
          <View style={styles.mainButtons}>
            <Button raised title='-'
              buttonStyle={{
                backgroundColor: "orange",
              }} />
          </View>
        </View>
        
        <View style={styles.generalButtons}>
          <View style={styles.mainButtons}>
            <Button raised title='1'
              buttonStyle={{
                backgroundColor: "gray",
              }} />
          </View>
          <View style={styles.mainButtons}>
            <Button raised title='2'
              buttonStyle={{
                backgroundColor: "gray",
              }} />
          </View>
          <View style={styles.mainButtons}>
            <Button raised title='4'
              buttonStyle={{
                backgroundColor: "gray",
              }} />
          </View>
          <View style={styles.mainButtons}>
            <Button raised title='+'
              buttonStyle={{
                backgroundColor: "orange",
              }} />
          </View>
        </View>
      
        <View style={styles.generalButtons}>
          <View style={[styles.mainButtons, {flex: 2}]}>
            <Button raised title='0'
              buttonStyle={{
                backgroundColor: "gray",
              }} />
          </View>
          <View style={styles.mainButtons}>
            <Button raised title='.'
              buttonStyle={{
                backgroundColor: "gray",
              }} />
          </View>
          <View style={styles.mainButtons}>
            <Button raised title='='
              buttonStyle={{
                backgroundColor: "orange",
              }} />
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
  },

  mainButtons: {
    flex: 1,
    paddingBottom: 20,
  },

});
