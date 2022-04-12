import React from 'react';

import {Text, TextInput, View} from 'react-native';

export default function MyApp() {
 
 function getFullName(fName, mName, lName) { 
   return fName + " " + mName + " " + lName;
 }

  const pet = "Dog";
  return (
    <View>
      <Text>
        
        {"\n\n\n\n"}
        Hello, I am student in CIS340
        My full name is {getFullName("Emer","Alfredo", "Rocha")} {"\n"}
       I have a {pet}!
      </Text>
      <TextInput
     style={{
       height: 40,
       borderColor: "gray",
       borderWidth:1
      }}  
      />
      </View>

  );
}

