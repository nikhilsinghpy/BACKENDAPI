const router = require("express").Router();

router.get('/user/test',(req,res) =>{
    res.send("sending hello to user")
})

router.post('/userposttest', (req, res) => {
    const username = req.body.username;
    console.log(username);
    res.send(`Received username: ${username}`);
});

module.exports = router