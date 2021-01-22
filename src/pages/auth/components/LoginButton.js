import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { button_styles } from './component_styles'

function LoginButton({ onPress, title }) {
  return (
    <TouchableOpacity style={button_styles.container} onPress={onPress}>
      <Text style={button_styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export { LoginButton }
