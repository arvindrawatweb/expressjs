const mongoose = require('mongoose');
const User = require('../Models/userModel'); 

const home = async (req, res) => {
    try {
       
        const user = new User({ 
            name: 'John Doe', 
            email: 'johndoe@example.com' 
        });

       
        await user.save();
        console.log('User successfully added:', user);

    
        res.render('login');
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send('Error saving user'); 
    }
};




module.exports = {
    home
};
