
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { useState } from 'react';
import Input from './src/components/Input';
import { Fruits } from './src/common/data';
function App(): JSX.Element {
  const [searchquery, setSearchQuery] = useState<string>("")
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Input icon="search" placeholder='search'
        onChangeText={(text) => console.log((text))
        }></Input>
      <FlatList data={Fruits} renderItem={({item})=><Text>{item.name}</Text>} />
    </SafeAreaView>
  );
}

export default App;
