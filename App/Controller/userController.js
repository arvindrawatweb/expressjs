const User = require('../Models/userModel'); 
const multer  = require('multer');
const path=require('path');


// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage }).single('avatar');

const home = async (req, res) => {
    res.render('login');
};
const usersubmit = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error(err, 'Error uploading file');
            return res.status(500).send('Error uploading file');
        }

        const { name, email } = req.body; 
        const avatar = req.file ? req.file.filename : null; 

        try {
            const user = new User({ name, email, avatar });
            await user.save();
            res.redirect('/');
        } catch (error) {
            console.error(error, 'show error');
            res.status(500).send('User validation failed');
        }
    });
};


const  getuserData = async(req,res)=>{
    try{
       const users = await User.find();
     
      res.render('view_users',{users});
    }catch(error){
       console.log(error);
    }
   }

   const deltuser=async(req,res,id)=>{
   console.log(id);
   }
  

  



module.exports = {
    home,
    usersubmit,
    getuserData,
    deltuser
};
