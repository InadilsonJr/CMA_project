
import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { onChange } from 'react-native-reanimated';

import api from '../api';
import ExpenseItem from '../components/ExpenseItem';
import apiUrl from '../constants';
import axios from 'axios';



export default HomeScreen = props => {

  const [tripIdInput, setTripIdInput] = useState("");
  const [tripId, setTripId] = useState("");
  const [expenses, setExpenses] = useState([])

  const clearData = () => {
    setTripId("")
    setExpenses([])
  }
  const handleTextChange = (text) => {
    setTripIdInput(text)
    clearData()
  }
  const handleAdd = async () => {
    clearData()
    setTripIdInput("");
    props.navigation.navigate('AddExpense');
    
  }
  const handleSummary = async () => {
    props.onSearch(tripId);
    console.log(tripId)
    props.navigation.navigate('Summary');
  }
  const handleClose = async () => {
    
  }

  const handleSearch = async () => {
    if(tripIdInput){
      const res = await axios.get(apiUrl+'/'+tripIdInput);
      if (res.data.tripId){
        setExpenses(res.data.expenses)
        setTripId(res.data.tripId)
        setTripIdInput("")
      }else{
        alert(res.data.error);
      }
    }else{
      alert("Please insert a trip id to search");
    }
    
  };
  const _renderTripId =(data,id)=>{
    if(data){
    return (
      <View style={{width:"100%", paddingHorizontal: 20,flexDirection:"row", 
      alignItems: 'center'}}>
        <View style={{width:"55%"}}>
        <Text style={styles.title}>{tripId}</Text>
        </View>
        <View style={{width:"30%", flexDirection:"row", paddingTop: 14}}>
          <TouchableOpacity style={styles.button} onPress={handleSummary}>
            <Text style={styles.summaryText} >Summary</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={styles.closeText} >Close</Text>
          </TouchableOpacity>
        </View>
        
    </View>
      )}
  }

  const _renderRow =(data,id)=>{
    return (
      <ExpenseItem 
        description={data.description}
        amount={data.amount}
        user={data.user}
        key={id}
      />);
  }

  return (
    <View style={styles.container}>
        <Button style={styles.button} title="Add Expense" onPress={handleAdd}  color="#841584"/>
      <View style={styles.seachView}>
        <TextInput style={styles.input} placeholder="search by trip id" name="tripId" label="tripId" value={tripIdInput} onChangeText={handleTextChange}/>
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.searchText} >Search</Text>
        </TouchableOpacity>
      </View>
      { _renderTripId(tripId)}
      <ScrollView style={{flex:1, width:"100%", height: "100%", flexDirection: 'column'}}>
        {expenses.map((item, id)=> _renderRow(item, id))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 8,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '75%',
    margin: 10,
    fontSize: 22,
    // textAlign: 'center'
  },
  seachView: {
    flexDirection:"row",
    marginTop: 10,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 40,
    paddingHorizontal:8
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 6,
    marginTop: 20,
  },
  searchText:{
    color: 'blue',
    fontSize: 18,
    textDecorationLine: 'underline'
  } ,
  summaryText:{
    color: 'blue',
    fontSize: 18,
    textDecorationLine: 'underline'
  },
  closeText:{
      color: 'red',
      fontSize: 18,
      textDecorationLine: 'underline'}
});
