import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default class MyApp extends Component{

 constructor(props) { 
  super(props);
  this.state = {count: 0};
 }

 onTap = () => {
  this.setState({
    count: this.state.count + 1
  });
 }

 render () {
  
  const{count} = this.state;
  return (
    <View style={styles.container}>
      

    <View style ={styles.counterText}> 
      <Text>Tap Counter: {count} </Text> 
    </View>
    <TouchableOpacity  style = {styles.button}onPress={this.onTap}>    
      <Text>Touch Me </Text> 
    </TouchableOpacity> 
    
      <StatusBar style="auto" />
    </View>
  );
} // end of class
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#B0C4DE',

  },
  button: {

    alingItems: 'center',
    backgroundColor: '#F0FFFF',
    padding: 10
  },
  counterText: { 
    aligntItems: 'center',
    padding: 10

  }
});
