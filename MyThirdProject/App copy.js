import React from 'react';
import {  Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View style={styles.container}>
      <Text> Hey, My Name is {props.name}. I am a student in CIS340</Text>
    </View>
  );
}

export default function MultiComp() { 
    return (

<View style={{
  flex: 1, 
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <Text> Welcome to CIS340</Text>
 <Student name="Emer Rocha" />
 <Student name="Habib" />
 <Student name ="Mary"/>
 <Student name ="Bob"/>
 <Student name ="Jon Clark" />
  </View>
  );

}
