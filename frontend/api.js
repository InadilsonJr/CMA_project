
const login = ({username, password}) => {
    if(username=="inadilson" && password=="123456"){
        return {token:"ashsajdhakldhadl"}  
    }
    return {error:"user pass incorrect"}    
}

const postExpense = (tripId, expense) => {
    if(tripId && expense){
        db.data.map((e)=>{
            if (e.tripId==tripId){
               return e.expenses.push(expense)
            }
        })
        return {success:"expense saved"}  
    }
    return {error:"user pass incorrect"}    
}


const getTrip = (tripId) => { // list expenses 
    if(tripId){
        return db.data.filter(e=>e.tripId==tripId)
    }
    return {error:"user pass incorrect"}    
}
const postCloseTrip = (tripId) => {
    if(expense){
        return {msg:"trip closed"}  
    }
    return {error:"user pass incorrect"}    
}

const getTripSummary = (tripId) => {
    if(tripId){
        return {
            msg:"trip closed",
            report
        }// improve, see doc 
    }
    return {error:"user pass incorrect"}    
}

export default api = {getTrip, getTripSummary, postCloseTrip, postExpense, login};

const db = {
    data: [
        {
            tripId: "Australia",
            expenses: [
                {
                    amount: 150,
                    description: "Dinner Friday Night",
                    user: "inadilson"
                },
                {
                    amount: 150,
                    description: "Dinner Friday Night",
                    user: "inadilson"
                },
                {
                    amount: 150,
                    description: "Dinner Friday Night",
                    user: "john doe"
                }
            ]
        },
        {
            tripId: "Italia",
            expenses: [
                {
                    amount: 150,
                    description: "Dinner Friday Night",
                    user: "inadilson"
                },
                {
                    amount: 150,
                    description: "Dinner Friday Night",
                    user: "inadilson"
                },
                {
                    amount: 150,
                    description: "Dinner Friday Night",
                    user: "john doe"
                }
            ]
        }

    ]
}
const report = {
    breakdown:[
        {
            username: "inadilson",
            totalPaied: 200,
            paysTo: [
                {
                    username:"john doe",
                    amount: 100
                },
                {
                    username:"David",
                    amount: 100
                }
            ],
        },
        {
            username: "john doe",
            totalPaied: 100,
            paysTo: [
                {
                    username:"inadilson",
                    amount: 100
                }
            ],
        }
    ],
    totals: {
        amount: 300,
        nOfPurchases: 3,
        highestExpense: 200,
        lowestExpense: 100,
        averageSpent: 150
    }
}