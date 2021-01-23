import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { postcard_styles } from './component_styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function PostCard({ item }) {
  return (
    <View style={postcard_styles.container}>
      <View style={postcard_styles.userName}>
        <TouchableOpacity>
          <FontAwesome name="user-circle-o" size={15} />
        </TouchableOpacity>
        <Text>{item.userName}</Text>
        <Text>{item.date}</Text>
      </View>
      <Text style={postcard_styles.text}>{item.text}</Text>
      <TouchableOpacity style={postcard_styles.saveIcon}>
        <MaterialIcons name="save" size={15} />
      </TouchableOpacity>
    </View>
  )
}

export { PostCard }
