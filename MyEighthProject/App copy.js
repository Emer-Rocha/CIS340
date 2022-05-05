import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function App() {

  const[count, setCount] = useState(0);

  const onTap = () => setCount(count => count + 1);
  return (
    <View style={styles.container}>
      

    <View style ={styles.counterText}> 
      <Text>Tap Counter: {count} </Text> 
    </View>
    <TouchableOpacity  style = {styles.button}onPress={onTap}>    
      <Text>Touch Me </Text> 
    </TouchableOpacity> 
    
      <StatusBar style="auto" />
    </View>
  );
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
