const { model } = require('mongoose');

const userRout = require('express').Router();

userRout.get('/',(req,res,next)=>{
res.send('user');
});

userRout.post('/',(req,res,next)=>{

});

userRout.delete('/',(req,res,next)=>{

});

userRout.patch('/',(req,res,next)=>{

});

module.exports = userRout;