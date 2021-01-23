import { StyleSheet, Dimensions } from 'react-native'

const deviceSize = Dimensions.get('window')

const button_styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccdbfd',
    padding: 10,
    margin: 15,
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '55%',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold'
  }
})
const input_styles = StyleSheet.create({
  container: {
    backgroundColor: '#abc4ff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    height: 50,
    width: 300
  }
})
const image_styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export { button_styles, input_styles, image_styles }
