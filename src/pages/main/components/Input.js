import React from 'react'
import { TextInput, View, TouchableOpacity } from 'react-native'
import { textInput_style } from './component_styles'
import Ionicons from 'react-native-vector-icons/Ionicons'

function Input({ holder, sendData }) {
  const [text, setText] = React.useState(null)
  return (
    <View style={textInput_style.container}>
      <View>
        <TextInput
          placeholder={holder}
          onChangeText={(value) => setText(value)}
        />
      </View>
      <TouchableOpacity onPress={() => sendData(text)}>
        <Ionicons name="send" size={15} color={'white'} />
      </TouchableOpacity>
    </View>
  )
}

export { Input }
