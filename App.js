import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>This is Azarias' Profile page!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8A7A3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText:{
      marginBottom:600,
      fontSize: 30,
      fontWeight:'700',
      fontFamily:'Optima',
      textDecorationLine:'underline',
      color:'#F6CD00'
    }

  }
);
