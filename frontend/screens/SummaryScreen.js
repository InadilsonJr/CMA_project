import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import api from '../api';

const SummaryScreen = props => {

    const summary = api.getTripSummary(props.tripId)
    console.log(summary)
    const { totals } = summary.report;
    const _renderDebits = () =>{
        return summary.report.breakdown.map((e,id)=>{
            return (
                <View key={id}>
                    <Text style={styles.subTitle}>
                        {e.username}
                    </Text> 
                    <View style={{paddingHorizontal:20}}>
                        <Text>
                            Expended € { e.totalPaied }
                        </Text>
                        {e.paysTo.map((paysToItem,id)=><Text key={id}>Owes € { paysToItem.amount } to { paysToItem.username }</Text>)}
                    </View> 
                </View>
            )
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                    Trip Id - {props.tripId}
            </Text>
            <ScrollView style={{flex:1, width:"100%", height: "100%", flexDirection: 'column'}}>
                {_renderDebits()}
                <View >
                    <Text Text style={styles.subTitle}>
                        Totals
                    </Text>
                    <View style={{paddingHorizontal:20}}>
                        <Text>
                        amount: € { totals.amount }
                        </Text>
                        <Text>
                        number of purchases: { totals.nOfPurchases }
                        </Text>
                        <Text>
                        highest expense: € { totals.highestExpense }

                        </Text>
                        <Text>
                        lowest expense: € { totals.lowestExpense}
                        </Text>
                        <Text>
                        average spent: € { totals.averageSpent }
                        </Text>

                    </View>
                    
                </View>
            </ScrollView>
            
        </View>
    )
}
export default SummaryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        // justifyContent: 'center',
      },
      title: {
        fontSize: 30,
        fontWeight: '500',
        marginBottom: 6,
        marginTop: 20,
      },
      subTitle: {
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 6,
        marginTop: 20,
      },
    
})