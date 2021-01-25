import React from 'react'
import { View, Button, FlatList, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import { PostCard, Input } from './components'
import database from '@react-native-firebase/database'
import dayjs from 'dayjs'

function HomeScreen() {
  const [postData, handleData] = React.useState([])

  function quit() {
    auth()
      .signOut()
      .then((response) => Alert.alert('Çıkış yapılıyor', response))
  }
  function readData() {
    database()
      .ref('/all_post')
      .orderByChild('date')
      .on('value', (snapshot) => {
        const data = snapshot.val()
        handleData(Object.values(data))
      })
  }
  function sendPost(post) {
    const mail = auth().currentUser.email
    const username = mail.substr(0, mail.indexOf('@'))
    const postObj = {
      username: username,
      text: post,
      date: dayjs()
    }
    database().ref('/all_post').push(postObj)
  }
  React.useEffect(() => {
    readData()
  }, [])

  const renderItem = ({ item }) => {
    return <PostCard post={item} />
  }
  return (
    <View>
      <View>
        <View>
          <FlatList
            data={postData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
          />
          <Button title="Çıkış" onPress={quit} color="#a0c4ff" />
        </View>
      </View>
      <View>
        <Input holder="What are you thinking?" sendData={sendPost} />
      </View>
    </View>
  )
}

export { HomeScreen }
