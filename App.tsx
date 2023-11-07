
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
  TouchableOpacity
} from 'react-native';
import { useState, useEffect } from 'react';
import Input from './src/components/Input';
import { Fruits, Fruit } from './src/common/data';
import { ListItem } from './src/components/ListItem';


function App(): JSX.Element {
  const [searchquery, setSearchQuery] = useState<string>("")
  const [fruits, setFruits] = useState<Fruit[] | null>(null)
  const [inputshow, setInputShow] = useState<Boolean>(false)
  useEffect(() => {
    setFruits(Fruits.sort((a: Fruit, b: Fruit) => {
      return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
    }))
  }, [])

  const handleSearch = (text: string) => {
    const test: Fruit[] = Fruits.filter((fruit) => fruit.name.includes(text))
    setFruits(test)
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', }}>
      {/* <Input icon="search" placeholder='search'
        onChangeText={(text) => handleSearch(text)
        }></Input>
      <FlatList data={fruits} renderItem={({ item }) => <ListItem id={item.id} name={item.name} price={item.price}></ListItem>} />
      <View>
        <TouchableOpacity style={{
          backgroundColor: 'red',
          marginVertical: 10,
          padding: 10,
          borderRadius: 6,
          paddingHorizontal: 20,
          display:inputshow==false?"flex":"none"
        }} onPress={() => setInputShow(true)}>
          <Text>Add</Text>

        </TouchableOpacity>
      </View> */}
      <View style={{ display: inputshow == true ? 'flex' : 'none' }}>
        <Input icon="search" placeholder='Fuit Name'
          onChangeText={(text) => handleSearch(text)
          }></Input>
        <Input icon="search" placeholder='Fruit Price'
          onChangeText={(text) => handleSearch(text)
          }></Input>

      </View>
    </SafeAreaView>
  );
}

export default App;
