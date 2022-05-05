import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker' // import


export default function App() {

  let openImagePickerAsync = async() => { 
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      if (permissionResult.granted === false ) { 
        alert("Permission is required");
        return;
      }
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      console.log(pickerResult);
    }
// end of Open Image Picker
 
  return (
    <View style={styles.container}>
      
      <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDVJSt5yTUKgDX2PD69BGAz7SsPUjrI-4BA&usqp=CAU'}}
        style={styles.logo} /> 
      <Text style={styles.insts}> Press the button below to select an image on your phone </Text> 

    <TouchableOpacity  style = {styles.button}onPress={openImagePickerAsync}>    
      <Text style={styles.buttonText}> Pick Image </Text> 
    </TouchableOpacity> 
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B0C4DE',

  },

  button: {

    backgroundColor: '#F0FFFF',
    padding: 20, 
    borderRadius: 5
  },

  insts: { 
   fontSize: 18, 
  color: 'black',
  marginHorizontal: 15,
  marginBottom: 10,

  },

  logo: { 
    widht: 310, 
    height: 300, 
    marginButton: 20
  },

  buttonText: { 
    fontSize: 20,
    color: "#fff"
  }
});