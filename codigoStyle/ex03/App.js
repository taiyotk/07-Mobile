import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}


export default function App() {
  return (
    <View style={styles.container}>
      <CustomButton title="Clique aqui" onPress={() => alert('Botão pressionado')}/>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
  },
  buttonText:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
