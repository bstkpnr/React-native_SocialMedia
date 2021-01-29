import React from 'react'
import { View, TextInput, Alert, ActivityIndicator } from 'react-native'
import { input_styles } from './components/component_styles'
import { signup_page } from './page_styles'
import { useSignUp } from './hooks'
import { LoginButton, LoginUpButton } from './components/'

function SignUpScreen({ navigation }) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const { loading, error, response, errorDelete, SignUp } = useSignUp()

  function signUp() {
    SignUp(email, password)
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
    Alert.alert('An error occurred while creating an account', error.message)
    errorDelete()
  }
  return (
    <View style={signup_page.container}>
      <View style={input_styles.inputContainer}>
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
        <LoginButton title="Submit" onPress={signUp} />
        <LoginUpButton title="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}
export { SignUpScreen }
