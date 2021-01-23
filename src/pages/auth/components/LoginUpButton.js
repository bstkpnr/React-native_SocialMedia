import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { button_styles_up } from './component_styles'

function LoginUpButton({ title, onPress }) {
  return (
    <TouchableOpacity style={button_styles_up.container} onPress={onPress}>
      <Text style={button_styles_up.title}>{title}</Text>
    </TouchableOpacity>
  )
}
export { LoginUpButton }
