import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker' // import image picker
import * as Sharing from 'expo-sharing'; // import image sharing

export default function App() {

  const [selectedImage, setSelectedImage]  = React.useState(null);

  let openImagePickerAsync = async() => { 
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      if (permissionResult.granted === false ) { 
        alert("Permission is required");
        return;
      }
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if(pickerResult.cancelled === true) { 
          return;
        }

        setSelectedImage({localUri: pickerResult.uri});
    };
// end of Open Image Picker

let openSharingDialogAsync = async () => { 
    if( !(await Sharing.isAvailableAsync())) { 
      alert('Sharing is not available on my phone');
      return;
    }
    Sharing.shareAsync(selectedImage.localUri);

};

//display the selected image
    if (selectedImage !== null) { 
      return(
        <View style={styles.container}>
          <Image source={{uri: selectedImage.localUri}} style={styles.selectedImage}/>
          <TouchableOpacity onPress={openSharingDialogAsync} styles={styles.button}>
            <Text style={styles.buttonText}>Share my photo</Text>
            </TouchableOpacity> 
        </View> 
      )
    }
 
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
  },
  selectedImage : { 
    width: 300, 
    height: 300, 
    resizeMode: 'contain'
  }
});