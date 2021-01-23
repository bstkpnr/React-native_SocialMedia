import React from 'react'
import { TextInput, View } from 'react-native'
import { textInput_style } from './component_styles'

function Input(props) {
  return (
    <View style={textInput_style.container}>
      <TextInput onChangeText={(value) => props.onText(value)} />
    </View>
  )
}

export { Input }
