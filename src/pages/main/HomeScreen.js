import React from 'react'
import { View, FlatList, Text, Alert, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth'
import { PostCard, Input } from './components'
import database from '@react-native-firebase/database'
import dayjs from 'dayjs'
import { text_style, list_style } from './components/component_styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

function HomeScreen() {
  const [postData, handleData] = React.useState([])

  React.useEffect(() => {
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
  })

  function quit() {
    auth()
      .signOut()
      .then((response) => Alert.alert('Çıkış yapılıyor', response))
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
        <View style={list_style.container}>
          <FlatList
            data={postData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
          />
          <TouchableOpacity style={text_style.textContainer} onPress={quit}>
            <FontAwesome name="sign-out" size={30} color={'#D9D9D9'} />
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
