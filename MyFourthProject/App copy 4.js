import React from 'react';
import { Text, View , FlatList} from 'react-native';

export default  StatesApp = () => {
  
 return(

  <View style ={{flex: 1, paddingTop: 22}}>
    <FlatList
      data={[
        {key: 'Alabama' },
        {key: 'Alaksa'},
        {key: 'Arizona'},
        {key: 'California'},
        {key: 'Colorado'},
        {key: 'Delware'},
        {key: 'Florida'},
        {key: 'Georgia'},
        {key: 'Hawaii'},
        {key: 'Idaho'},
        {key: 'Illinois'},
        {key: 'Arkansas'},
        {key: 'Indiana'},
        {key: 'Colorado'},
        {key: 'Iowa'},
        {key: 'Kansas'},
        {key: 'Kentucky'},
        {key: 'Maine'},
        {key: 'Maryland'},
        {key: 'Massachusettes'},
        {key: 'Michigan'},
        {key: 'Minnesota'},
        {key: 'Mississippi'}
      ]}
      renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item.key} </Text> }
      />

  </View>
  
 ); // end of return
}

