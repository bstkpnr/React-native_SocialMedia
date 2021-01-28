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

function FavoriCard({ post }) {
  const userid = auth().currentUser.uid
  function onDelete() {
    database().ref(`user_saved/${userid}/${post.saveId}`).remove()
  }

  return (
    <View style={postcard_styles.container}>
      <View style={postcard_styles.userName}>
        <TouchableOpacity style={postcard_styles.icon}>
          <FontAwesome name="user-circle-o" size={30} />
        </TouchableOpacity>
        <Text>{post.username.substr(0, post.username.indexOf('@'))}</Text>
        <Text>{dayjs(post.date).locale('tr').fromNow()}</Text>
      </View>
      <View style={postcard_styles.containerText}>
        <Text style={postcard_styles.text}>{post.text}</Text>
        <TouchableOpacity onPress={onDelete}>
          <MaterialIcons name="delete" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export { FavoriCard }
