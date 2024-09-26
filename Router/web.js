const express = require('express');
const router = express.Router();
const {home,usersubmit,getuserData} = require('../App/Controller/userController');

//basic route
// router.get('/',(req,res)=>{
// res.render('login');
// });

    router.get('/',home);
    router.post('/usersubmit',usersubmit);   
    router.get('/getuserData',getuserData);
  



router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;
