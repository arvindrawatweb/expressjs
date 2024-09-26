// middleware.js
module.exports = function (req, res, next) {
 
    // const isAllowed = false; 
    // if (!isAllowed) {
    //   return res.send('Access to this page is restricted.');
    // }
  
    next();
  };
  