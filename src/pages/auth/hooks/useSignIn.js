import React from 'react'
import auth from '@react-native-firebase/auth'

function useSignIn() {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [response, setResponse] = React.useState(null)

  function SignIn(email, password) {
    setError(null)
    setLoading(true)

    auth()
      .signInWithEmailAndPassword(email, password)
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
  return { loading, error, response, errorDelete, SignIn }
}

export { useSignIn }
