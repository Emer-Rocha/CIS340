import React from 'react';
import {  Text, Image, View } from 'react-native';

export default function MyCat() {

  let pic = {uri: "https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60"};
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }} >
     <Image source={pic} 
  style={{width: 200,height: 200}}
     />
     <Text>Hello, This is my cat</Text>
    </View>
  );
}



