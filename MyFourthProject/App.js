import React from 'react';
import { Text, View , SectionList} from 'react-native';

export default  StatesApp = () => {
  
 return(

  <View style ={{flex: 1, paddingTop: 22}}>
    <SectionList
      sections={[ {title: 'A', data: ['Alabama', 'Alaska','Arkansas','Arizona']},
      {title: 'C', data: ['California','Colorado','Conneticut']},
      {title: 'D', data: ['Delaware']},
      {title: 'F', data: ['Florida']},
      {title: 'G', data: ['Georgia']},
      {title: 'H', data: ['Hawaii']},

      ]} // You can continue with more sections
      renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item} </Text> }
      renderSectionHeader = {({section}) => <Text style={{paddingTop: 4 , paddingLeft: 10, padddingRight: 20, fontSize: 20, fontWeight: 'bold',
      backgroundColor: '9FA8DA',
      height: 44}} >{section.title} </Text>} // set your custom color
      
      keyExtractor={(item,index) => index}
    
      />


  </View>
  
 ); // end of return
}

