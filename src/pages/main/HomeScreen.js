import React from 'react'
import { View, Button, FlatList, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import { PostCard, Input } from './components'

function quit() {
  return auth().signOut()
}
const dumm = [
  {
    id: 1,
    userName: 'berkay',
    text: 'Bir söz paylaştık.',
    date: 'dakika önce'
  },
  {
    id: 2,
    userName: 'beste',
    text: 'Bir söz yazdı.',
    date: 'saat önce'
  },
  {
    id: 3,
    userName: 'abdi',
    text: 'Söz bir paylaştı',
    data: 'ay önce'
  }
]
const renderItem = ({ item }) => {
  return <PostCard item={item} />
}

function HomeScreen() {
  return (
    <View>
      <View>
        <FlatList
          data={dumm}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
        />
        <Button title="Çıkış" onPress={quit} color="#a0c4ff" />
      </View>

      <Input onText={(value) => console.log(value)} />
    </View>
  )
}

export { HomeScreen }
