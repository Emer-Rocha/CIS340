import React, {useState} from 'react';
import {  Text, Image, View } from 'react-native';

function TV(props) { 

  const[isOff, setIsOff] = useState(true);
  return (
    <View>

      {"\n\n\n\n"}
      <Text>
        This is {props.name} Tv, and it is {isOff ? "OFF" : "Turned Me On"}

      </Text>
    <Button 
      onPress={() => {
        setIsOff(false);
      }}
      diable={!isOff}
      title={isOff ? "Turn Me On, Please!" : "Thank you"}
      />
    </View>
  );

}


export default function MultiTVs() { 
  return (

<View>
<TV name="sony" />
<TV name="LG" />
</View>
);

}



