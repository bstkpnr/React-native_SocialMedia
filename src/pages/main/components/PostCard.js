import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { postcard_styles } from './component_styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import dayjs from 'dayjs'
import 'dayjs/locale/tr'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

function PostCard({ post }) {
  const id = auth().currentUser.uid
  function onClick() {
    const newPostKey = database().ref().child(`/user_saved/${id}`).push()
    if (!post.saveId) {
      post.saveId = newPostKey.key
      newPostKey.set(post)
      Alert.alert('Kaydedildi!')
    } else {
      Alert.alert('Mesaj zaten Kaydedilmiştir!')
    }
  }

  return (
    <View style={postcard_styles.container}>
      <View style={postcard_styles.userName}>
        <TouchableOpacity style={postcard_styles.icon}>
          <FontAwesome name="user-circle-o" size={30} color={'#D9D9D9'} />
        </TouchableOpacity>
        <Text style={postcard_styles.userNametext}>
          {post.username.split('@')[0]}
        </Text>
        <Text style={postcard_styles.dateText}>
          {dayjs(post.date).locale('tr').fromNow()}
        </Text>
      </View>
      <View style={postcard_styles.containerText}>
        <Text style={postcard_styles.text}>{post.text}</Text>
        <TouchableOpacity style={postcard_styles.saveIcon} onPress={onClick}>
          <MaterialIcons name="save" size={30} color={'#D9D9D9'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export { PostCard }
