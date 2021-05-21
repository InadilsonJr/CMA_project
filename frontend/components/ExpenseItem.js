import React from "react";
import { StyleSheet, View, Text } from 'react-native';

const ExpenseItem = ({description, user, amount}) => {
    return (
        <View style={ styles.expenseContainer }> 
            <View style={ styles.expenseRowContainer}>
                <Text style={ styles.descriptionText }> 
                    { description } 
                </Text> 
                <Text style={ styles.amountText }> 
                € { amount } 
                </Text>
            </View>
            <View style={ styles.userContainer }> 
                <Text style={ styles.userText }> 
                    { user } 
                </Text>
            </View> 
        </View>     
    );
}
export default ExpenseItem;

const styles = StyleSheet.create({
    expenseContainer: {
      width:"100%",
      padding: 15
    },
    amountText: {
        color: '#86B2CA',
        flex: 1,
        fontSize: 20,
        textAlign: 'right'
      },
      descriptionText: {
        color: '#7D878D',
        fontSize: 20,
        textAlign: 'left'
      },
      expenseRowContainer: {
        flexDirection: 'row',
      },
      userText: {
        color: '#7D878D',
        fontSize: 14,
        textAlign: 'left'
      },
}) 