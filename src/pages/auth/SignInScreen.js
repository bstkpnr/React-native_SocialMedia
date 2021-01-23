import React from 'react'
import { View, Image, TextInput, Alert, ActivityIndicator } from 'react-native'
import { useSignIn } from './hooks'
import { LoginButton,LoginUpButton } from './components'
import { input_styles, image_styles } from './components/component_styles'
import { signin_page } from './page_styles'

function SignInScreen({ navigation }) {
  const [mail, setMail] = React.useState(null)
  const [password, setPassword] = React.useState(null)
  const { loading, SignIn, error } = useSignIn()

  function signUp() {
    navigation.navigate('SignUp')
  }

  function signIn() {
    SignIn(mail, password)
  }

  if (loading) {
    return (
      <View style={signin_page.container}>
        <ActivityIndicator size="large" color />
      </View>
    )
  }
  if (error) {
    Alert.alert('An error occurred while creating an account', error.message)
  }

  return (
    <View style={signin_page.container}>
      <View style={image_styles.imageContainer}>
        <Image
          style={image_styles.image}
          source={require('./components/group.png')}
        />

        <TextInput
          autoCapitalize="none"
          style={input_styles.container}
          placeholder="Email.."
          keyboardType="email-address"
          onChangeText={(value) => setMail(value)}
        />

        <TextInput
          style={input_styles.container}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder="Password.."
          onChangeText={(value) => setPassword(value)}
        />
        <LoginButton title="Sign In" onPress={signIn} />
        <LoginUpButton title="Sign Up" onPress={signUp} />
      </View>
    </View>
  )
}

export { SignInScreen }
