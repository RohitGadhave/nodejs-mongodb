const userController =require('../Controllers/users.controller')
const userRout = require('express').Router();

userRout.get('/',(req,res,next)=>{
res.send('user');
});

userRout.post('/creat', userController.create);

userRout.delete('/',(req,res,next)=>{

});

userRout.patch('/',(req,res,next)=>{

});

module.exports = userRout;