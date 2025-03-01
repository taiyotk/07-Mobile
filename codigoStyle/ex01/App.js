import { View, Text } from 'react-native';
import Greeting from './components/Greeting';
import { Styles } from './styles/styles';

export default function App(){
  return (
    <View style={Styles.container}>
      <Greeting nome="Taiyo"/>
      <Text style={Styles.text}>
        Olá React Native!!!
      </Text>
    </View>
    
  );
}


