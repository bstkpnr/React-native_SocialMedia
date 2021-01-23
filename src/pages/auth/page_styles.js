import { StyleSheet } from 'react-native'

const signup_page = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor:'#eaf4f4',
  }
})
const signin_page = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eaf4f4',
    borderRadius: 10
  },
  logo: {}
})

export { signup_page, signin_page }
