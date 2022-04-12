import React from 'react';

import {Text, TextInput, View} from 'react-native';

 function MyApp() {
 
  return (
    <View>
      <Text>
        
        {"\n\n\n\n"}
        Hello, I am student in CIS340
       
      </Text>
    
      </View>

  );
}

export default function MultioComp() { 
  return (
    <View style ={{
      flex: 1,
      justifyContent: "Center",
      alignItems: "center"
    }}
    >


    <Text>

      {"\n\n\n\n\n\n"} Welcome to my Class </Text>
      <MyApp/>
      <MyApp/>
      <MyApp/>
      <MyApp/>
    


    </View>
  )
}

