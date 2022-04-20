import React from 'react';
import { Text, Image, ScrollView } from 'react-native';
const dog = { 
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxl-I3EBMuFTNZIvHzu06HCAQKtDtUwZVuw&usqp=CAU',
  width: 64,
  height: 64
};

export default  MyScrollViewApp = () => {
  
  
  return (
   <ScrollView style ={{paddding: 40}}>
     <Text style={{fontsize:80}}>
       try to scroll down </Text> 
       <Image source={dog} />
       <Image source={dog} />
       <Image source={dog} />
       <Image source={dog} />
       <Image source={dog} />
       <Image source={dog} />
       <Image source={dog} />
       <Text style= {{fontsize: 80}}>try  to scroll down again if you like</Text> 
       <Image source={dog} />
       <Image source={dog} />
       <Image source={dog} />
       <Image source={dog} />
       <Image source={dog} />
       <Text style= {{fontsize: 80}}>React Native components</Text> 
       <Image source={dog} />
       <Image source={dog} />
       <Image source={dog} />
       <Image source={dog} />
       <Image source={dog} />
      


   </ScrollView> 
  );
}

