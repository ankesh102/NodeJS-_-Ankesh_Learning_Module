// importing MongoDb Connection 

const dbConnect =  require('./mongodb_conn');

const deleteData = async () => {

    let data = await dbConnect();
    let result = await data.deleteOne({name:"nord celite"}); // For single record 
    // let result = await data.deleteMany({name:"nord celite"}); // For Multiple record 

    console.log(result);

    // To acknowledge our opeartion we can check like this 
    if(result.acknowledged){
        console.log("Deleted Sucessfully !!!");
    }

}

deleteData();