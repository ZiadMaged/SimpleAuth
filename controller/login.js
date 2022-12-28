const jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs');
const {Account} = require('../model/account.js');

module.exports = async (req, res) => {
    try {

        const {
            email,
            password
        } = req.body;

        if (!email || !password)
            res.status(400).json({
                message: "Email and Password are required"
            });

        let accountRow = await Account.findOne({ email: email.toLowerCase() });
        
        if (!accountRow)
            return res.status(400).json({
                message: "Account not exist"
            })

        const isValidPassword = await bycrypt.compare(password, accountRow.password)

        if (!isValidPassword)
            res.status(400).json({
                message: "Invalid Email or Password"
            });
        else {
            const token = jwt.sign({ email }, 'secretToken', { expiresIn: "1h" });
            res.status(200).json({token});
        }
    }
    catch (e) {
        res.status(400).json({ e });
    }

}