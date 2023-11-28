const Router = require('express');
const users = require('../data/users.data.js');
const router = Router();

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/login', (req, res) => {
    const emailLogin= req.body;
    const userLogged = users.find((user)=>{user.email===emailLogin});
    console.log(userLogged);
    res.json(userLogged);
});

module.exports = router;