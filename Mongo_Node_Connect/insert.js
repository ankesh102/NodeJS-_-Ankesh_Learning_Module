// Imprt db conncetion file from here 

const dbConnect = require('./mongodb_conn');

const insert = async () => {
    const db = await dbConnect();
    const result = db.insertMany (
        [
            {name:"nord ce2", price: 350, brand: "oneplus", category: "smartphone"},
            {name:"nord ce5", price: 370, brand: "oneplus", category: "smartphone"},
            {name:"nord ce10", price: 390, brand: "oneplus", category: "smartphone"},
        ]
    )

    // To acknowledge whether our result have been inserted or not 
    // First handle promises in insertOne line of code then check 
    if((await result).acknowledged){
        console.log(" Inserted Sucessfully !!!");
    }
}

insert();