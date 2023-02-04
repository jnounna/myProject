import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, {useEffect, useState} from 'react';


export default function App() {

  

  const [amount, setAmount] = useState(0);

  const [spent, setSpent] = useState(0);

  const [total, setTotal] = useState(0);
  useEffect(() => 

    { setTotal(() => amount - spent);
    },[total]);

 
  

  return (
    <View style={styles.container}>
      <Text>Enter how much you have to start with this week:</Text>

      <TextInput
       style={styles.input} 
       placeholder = 'e.g 90' 
       onChangeText={(val) => setAmount(val)} />


      <Text>You get to start the week with: {amount} </Text>

      <Text>Enter how much you spent:</Text>

      <TextInput
       style = {styles.input}
       placeholder = 'e.g 10'
       onChangeText={(val2) => setSpent(val2)} />

      <View style={styles.buttonContainer}>
        <Button title='update amount' onPress={() => setTotal() }/>
      </View>

      <Text>New amount: {total}  </Text>
      
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
  buttonContainer:{
    marginTop: 10,
    marginBottom: 20
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 100,

  }
});
