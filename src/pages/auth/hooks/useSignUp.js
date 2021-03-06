import React from 'react'
import auth from '@react-native-firebase/auth'

function useSignUp() {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [response, setResponse] = React.useState(null)

  function SignUp(email, password) {
    setError(null)
    setLoading(true)

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((serverResponse) => {
        setLoading(false)
        setResponse(serverResponse)
      })
      .catch((serverError) => {
        setLoading(false)
        setError(serverError)
      })
  }
  function errorDelete() {
    setError(null)
  }
  return { loading, error, response, errorDelete, SignUp }
}

export { useSignUp }
