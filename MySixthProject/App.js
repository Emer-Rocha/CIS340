import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  
  const csuLogo = {
    uri: "https://i.pinimg.com/originals/a3/22/c1/a322c115ca0728a1fc6f7605ccd083d1.jpg",
    width: 80,
    height: 80,
  };
  
  
  return (
    <View style={styles.container}>
      <ImageBackground source={csuLogo} 
        style={styles.image}> 
          <Text style={styles.text}>Cam the Ram is the best!!</Text> 


      </ImageBackground>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: "row",
  },
  image: { 
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  
  text: { 
    color: "red",
    fontSize: 50,
    fontWeight: "bold",
  }
});
