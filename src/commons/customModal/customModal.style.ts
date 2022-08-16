import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {},
  textStyle: {fontWeight: '700'},
  buttonContainer: {flexDirection: 'row'},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width,
    height: '100%',
  },
});

export {styles};
