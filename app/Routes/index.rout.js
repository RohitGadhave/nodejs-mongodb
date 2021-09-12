const userRout = require('../Routes/users.rout');
const productRoutes = require('../Routes/products.rout');


const allRoutes =(app)=>{
    app.get('/',(req,res,next)=>{
        res.send('ok')
    });
    app.use('/user',userRout);
    app.use('/product',productRoutes);
}

module.exports = allRoutes;