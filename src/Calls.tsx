import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Card from './components/Card'
const Calls = () => {
  const list1 = [
    {
      img: 'https://i.pinimg.com/originals/ea/86/1d/ea861d029d4ba08ffb8190b6acdac4fe.jpg',
      title: 'Free info Session 1',
      dis: 'Welcome to our first class of react native. This is a beautiful card component of Haider'
    },
    {
      img: 'https://i.pinimg.com/originals/ea/86/1d/ea861d029d4ba08ffb8190b6acdac4fe.jpg',
      title: 'Free info Session 1',
      dis: 'Welcome to our first class of react native. This is a beautiful card component of Haider'
    },
    
  ]
  const list2 = [
    {
      img: 'https://i.pinimg.com/originals/ea/86/1d/ea861d029d4ba08ffb8190b6acdac4fe.jpg',
      title: 'Free info Session 1',
      dis: 'Welcome to our first class of react native. This is a beautiful card component of Haider'
    },
    {
      img: 'https://i.pinimg.com/originals/ea/86/1d/ea861d029d4ba08ffb8190b6acdac4fe.jpg',
      title: 'Free info Session 1',
      dis: 'Welcome to our first class of react native. This is a beautiful card component of Haider'
    },
  ]
  const handlePress = () => {
    console.log('Button pressed!');
  };
  return (
    <View style={styles.con}>
      <Text style={styles.txt}>Your Calls</Text>
      <FlatList
        data={list1}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <>
            <Card
              imageSource={{ uri: item.img }}
              title={item.title}
              description={item.dis}
            />
          </>
        )}
      />
      <Text style={[styles.txt,{fontSize:14}]}>Need more help? You Can Book more calls with us</Text>
      <FlatList
        data={list2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <>
            <Card
              imageSource={{ uri: item.img }}
              title={item.title}
              description={item.dis}
            />
          </>
        )}
      />

    </View>
  )
}

export default Calls

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: '#131313'
  },
  txt: {
    color: 'white',
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 20
  }
})