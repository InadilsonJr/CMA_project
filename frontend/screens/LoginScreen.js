
import React, {useState} from 'react';
import { Button, StyleSheet, TextInput, View ,Text} from 'react-native';

import api from '../api';
import apiUrl from '../constants';
import axios from 'axios';


const LoginScreen = props => {
  const { navigation, onLogin } = props

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
      const payload={username,password}
    const res = await axios.post(apiUrl+'/login',payload)
    
    if (res.data.token){
      onLogin(username)
      navigation.navigate('Home');
    }else{
      alert(res.data.error);
    }
    
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trip Expenses</Text>
      <TextInput style={styles.input} name="username" placeholder="Username" label="Username" onChangeText={e=>setUsername(e)}/>
      <TextInput style={styles.input} name="password" label="Password" placeholder="Password" onChangeText={e=>setPassword(e)} secureTextEntry={true} />
      <View style={{display:"flex", flexDirection:"row", marginTop: 30}}>
        <Button style={styles.button} title="Login" onPress={handleLogin} />
        {/* <Button style={styles.button} title="Register" onPress={()=>{onLogin();navigation.navigate('Home');}} /> */}
      </View>
    </View>
  );
}
export default LoginScreen;

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
    textAlign: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 30,
  }
});
