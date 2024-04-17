import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, Alert } from 'react-native';


export default function App() {


  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
            
      <Text style={styles.titleText}
      >This is Azarias' Profile page!
      </Text>

     <StatusBar style="auto" />
      <Image source={profilePic} style={{width:300, height:300}}></Image>
    
    <Text style={styles.scrollText}>Hello! Welcome to my profile page! </Text>
    <Text style={styles.scrollText}>My name is Azarias A'Neals.</Text>
    <Text style={styles.scrollText}>My hobbies include watching movies, playing mahjong, and snowboarding. </Text>

    <Text style={styles.scrollText}>My favorite movie is A Brighter Summer Day by Edward Yang. I really liked the cinematography and how it captured
    Taiwan's lifestyle in the 1960s. It particularly resonated with me, because all of my family (aside from my generation) were alive and lived in the 
    time period that the film took place. </Text>
    <Text style={styles.scrollText}>My favorite book is Catc
    h-22 by Joseph Heller. I think it's a great political satire, that has held up tremendously well.
    I really liked the way Joseph Heller blended humor with satire, and how he was able to shift to a more serious tone effortlessly. </Text>

    <View>
      <TextInput
        style={styles.input}
        placeholder="    Please leave your name!"
      />
      <Text style={styles.button}>
      <Button
      title="Submit Button"
      color="#000772"
      onPress={() => Alert.alert('Name Submitted!')}
      />
      </Text>
      <TextInput
        style={styles.input}
        placeholder="    Feel free to leave a comment!"
      />
      
      <Text style={styles.button}>
      <Button
      title="Submit Button"
      color="#000772"
      onPress={() => Alert.alert('Comment Submitted!')}
      />
      </Text>
    </View> 

    </View>
    </ScrollView>
  
  );
}

const profilePic = require('./assets/profile-pic.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText:{
      marginTop:80,
      fontSize: 30,
      fontWeight:'700',
      fontFamily:'Optima',
      textDecorationLine:'underline',
      color:'#F6CD00'
    },
  scrollView:{
    marginHorizontal:0,
    marginLeft:0,
    marginRight:0,
    marginVertical:0
    },

  scrollText:{
    marginTop:20,
    marginLeft:15,
    marginRight:15,
    fontFamily:'Optima',
    fontWeight:'500',
    color:'#00542D',
    fontSize: 30,
  },

  input:{
    backgroundColor:'#D5D5D5',
    height: 50,
    width: 320,
    margin: 20,
    borderWidth: 2,
    padding: 50
  },

  button:{
    marginLeft:110,
    margin:20
  }

  }
);