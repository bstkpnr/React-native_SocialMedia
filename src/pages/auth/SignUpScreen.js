import React from 'react'
import { View, Image, TextInput, Alert, ActivityIndicator } from 'react-native'
import { input_styles } from './components/component_styles'
import { signup_page } from './page_styles'
import { useSign } from './hooks'
import LoginButton from './components/LoginButton'

function SignUpScreen({ navigation }) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const { loading, error, response, sign } = useSign()

  function signUp() {
    sign(email, password)
  }

  if (response) {
    navigation.navigate('Login')
  }

  if (loading) {
    return (
      <View style={signup_page.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (error) {
    Alert.alert('An error occurred when logging in', error.message)
  }

  return (
    <View style={signup_page.container}>
      <Image style={signup_page.logo} />
      <TextInput
        style={input_styles.input}
        placeholder="Enter your Email"
        autoCapitalize="none"
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        style={input_styles.input}
        placeholder="Enter your Password"
        onChangeText={(value) => setPassword(value)}
      />
      <LoginButton title="Sign In" onPress={signUp} />
      <LoginButton title="Back" onPress={() => navigation.goBack()} />
    </View>
  )
}
export { SignUpScreen }
