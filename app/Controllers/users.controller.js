
const userModel = require('../Models/users.model');

module.exports.create = async (req,res,next)=>{

    try {
       const {name,mobile,dob,password,email,age} = req.body;
       const user = new userModel({name,mobile,dob,password,email,age});
    res.send({data:{name,mobile,dob,password,email,age},reqBody:req.body});
    } catch (error) {
        res.send(erroe);
    }
}

