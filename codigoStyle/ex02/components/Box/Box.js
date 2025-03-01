import { View, Text } from 'react-native';
import Styles from './Styles.js';


const Box = (props) => {
    return (
        <View style={Styles.box}>
            <Text style={Styles.text}>{props.nome}</Text>
        </View>
    )
}

export default Box;