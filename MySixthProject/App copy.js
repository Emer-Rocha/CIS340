import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  
  const csuLogo = {
    uri: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa3%2F22%2Fc1%2Fa322c115ca0728a1fc6f7605ccd083d1.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F173951604342644265%2F&tbnid=SiUseAGziA7u4M&vet=12ahUKEwj424Oor7_3AhUVLc0KHWc0DKcQMygNegUIARDUAQ..i&docid=Kx7zyBDXRo6PjM&w=983&h=983&q=cam%20the%20ram&ved=2ahUKEwj424Oor7_3AhUVLc0KHWc0DKcQMygNegUIARDUAQ",
    width: 80,
    height: 80,
  };
  
  
  return (
    <View style={styles.container}>

      <Image 
      style={styles.localCSULogo}
      source={require('./assets/logo.jpg')}
      />
      
      <Image
      
      style={styles.urlCSULogo}
      source={{
        uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmobile.twitter.com%2Fcsucamtheram&psig=AOvVaw2g-2ohJGucaDATsGpPmNbk&ust=1651531205594000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCPDw56qvv_cCFQAAAAAdAAAAABAD"
      }} 
      /> 
      <Image
      style={styles.stretchLogo}
      source ={csuLogo} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  paddingTop: 50,
  },
  localCSULogo: { 
    width: 55,
    height: 65,
  },
  urlCSULogo: { 
    width: 50,
    height: 50, 
  },

  stretchLogo: { 
    
    height: 200,
    resizeMode: 'center',
  }
});
