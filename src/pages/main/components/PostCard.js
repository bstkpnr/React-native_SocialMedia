import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { postcard_styles } from './component_styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import dayjs from 'dayjs'
import { relativeTime } from 'dayjs/locale/tr'

function PostCard({ post }) {
  console.log(post)
  return (
    <View style={postcard_styles.container}>
      <View style={postcard_styles.userName}>
        <TouchableOpacity style={postcard_styles.icon}>
          <FontAwesome name="user-circle-o" size={30} />
        </TouchableOpacity>
        <Text>{post.username}</Text>
        <Text>{post.date}</Text>
      </View>
      <Text style={postcard_styles.text}>
        {dayjs.extend(relativeTime).locale('tr')}
      </Text>
      <TouchableOpacity style={postcard_styles.saveIcon}>
        <MaterialIcons name="save" size={30} />
      </TouchableOpacity>
    </View>
  )
}

export { PostCard }
