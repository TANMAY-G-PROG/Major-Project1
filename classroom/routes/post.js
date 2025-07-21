const express = require("express");
const router = express.Router();

//Posts
//Index-posts 
router.get("/",(req,res) => {
    res.send('GET page for posts');
});

//Show-posts  
router.get("/:id",(req,res) => {
    res.send('GET page for post ID');
});

//Post-posts 
router.post("/",(req,res) => {
    res.send('POST for posts');
});

//Delete-posts 
router.delete("/:id",(req,res) => {
    res.send('DELETE for post ID');
});

module.exports = router;