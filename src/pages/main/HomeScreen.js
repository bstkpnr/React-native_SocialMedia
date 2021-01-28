import React from 'react'
import { View, FlatList, Text, Alert, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth'
import { PostCard, Input } from './components'
import database from '@react-native-firebase/database'
import dayjs from 'dayjs'

function HomeScreen() {
  const [postData, handleData] = React.useState([])

  React.useEffect(() => readData(), [handleData])

  function quit() {
    auth()
      .signOut()
      .then((response) => Alert.alert('Çıkış yapılıyor', response))
  }

  function readData() {
    database()
      .ref('/timeline')
      .orderByChild('date')
      .on('value', (snapshot) => {
        const data = snapshot.val()
        if (!data) {
          return null
        }
        handleData(Object.values(data))
      })
  }

  function sendPost(post) {
    const timeline = database().ref('/timeline')
    const mail = auth().currentUser.email
    const postObj = {
      username: mail,
      text: post,
      date: dayjs()
    }
    timeline.push(postObj, () => console.log('Tamamlandı'))
  }

  const renderItem = ({ item }) => {
    return <PostCard post={item} />
  }
  return (
    <View>
      <View>
        <View style={{ height: 370 }}>
          <FlatList
            data={postData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
          />
          <TouchableOpacity style={{}} onPress={quit}>
            <Text>Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Input holder="What are you thinking?" sendData={sendPost} />
      </View>
    </View>
  )
}

export { HomeScreen }
