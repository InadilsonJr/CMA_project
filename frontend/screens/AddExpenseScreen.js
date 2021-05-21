
import React, {useState} from 'react';
import { Button, StyleSheet, TextInput, View ,Text} from 'react-native';

import api from '../api';

import apiUrl from '../constants';
import axios from 'axios';

const AddExpenseScreen = props => {
  const { navigation, username } = props

  const [tripId, setTripId] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSave = async () => {
    if (tripId && description && amount){
      let payload = {
        tripId:tripId,
        expense: { 
          description:description,
          amount:amount, 
          user:username}
      }
      const res = await axios.post(apiUrl+'/'+tripId+'/expense',payload)
      if (res.data.success ){
        navigation.navigate('Home');
      }else{
        alert(res.error);
      }
    }else{
      alert("Please make sure no fields are empty");
    }
   
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Trip ID" name="tripId" label="Trip ID" onChangeText={e=>setTripId(e)}/>
      <TextInput style={styles.input} placeholder="Expense description" name="description" label="Description" onChangeText={e=>setDescription(e)}/>
      <TextInput style={styles.input} placeholder="Amount" name="amount" label="Amount" keyboardType='numeric' onChangeText={e=>setAmount(e)}  />
      <Text style={styles.title}>{username}</Text>
      
      <View style={{display:"flex", flexDirection:"row", marginTop: 30}}>
        <Button style={styles.button} title="Save" onPress={handleSave} />
        {/* <Button style={styles.button} title="Register" onPress={()=>{onLogin();navigation.navigate('Home');}} /> */}
      </View>
    </View>
  );
}
export default AddExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '75%',
    margin: 10,
    fontSize: 22,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 30,
  }
});
