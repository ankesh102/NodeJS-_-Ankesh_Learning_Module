module.exports =  routeFilter = (req,res, next) =>{
    if(!req.query.age){
        res.send('Please provide age ');
    }
    else if(req.query.age<18){
        res.send(" You are not allowed to access");
    } else {

        next();
    }
}
