import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

export default class TouchableButton extends Component {
  _onPressButton() { 
    alert('You tapped a button')
  }  
  render () {
  return (
    <View style={styles.container}>


    <View style={styles.containerButton} >
    <Button 
      onPress={this._onPressButton}
        title=" Press button 1"
      />

    </View>

      <View style={styles.containerLayoutButton}>
      <Button 
     onPress={this._onPressButton}
        title ="Press Button 2"
      />
        <Button 
       onPress={this._onPressButton}
        title ="Great"
        color = 'green'
      />
      </View> 

      <View style={styles.containerButton}>
        
      <Button 
      onPress={this._onPressButton}
        title ="Tap Me!"
        
      />
      
      
      </View> 

      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerButton: { 
    margin: 20,
  },
  containerLayoutButton: { 
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
