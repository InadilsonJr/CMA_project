import React, { useState, Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SummaryScreen from '../screens/SummaryScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';

const Stack = createStackNavigator();

class Navigator extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      tripId: ""
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleLogin =(username)=>{
    this.setState({username})
  }
  handleSearch =(tripId)=>{
    this.setState({tripId})
  }
  render(){
    const {username, tripId} = this.state;
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login">
          {props => <LoginScreen {...props} onLogin={this.handleLogin}/>}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} username={username} onSearch={this.handleSearch} />}
        </Stack.Screen>
        <Stack.Screen name="AddExpense" 
            options={{
                title: 'Add Expense',
              }}
        >
          {props => <AddExpenseScreen {...props} username={username} />}
        </Stack.Screen>
        <Stack.Screen name="Summary" >
        {props => <SummaryScreen {...props} tripId={tripId}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
    
}

export default Navigator;