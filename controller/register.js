const jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs');
const {Account} = require('../model/account.js');

module.exports = async (req, res) => {
    try {

        const {
            email,
            name,
            password
        } = req.body

        if (!email || !password || !name)
            return res.status(400).json({
                message: "Email, Password and Name are required"
            });

        const accountRow = await Account.findOne({ email });

        if (accountRow)
            return res.status(400).json({
                message: "Account already exist"
            })

        const encryptPw = await bycrypt.hash(password, 10);

        const accountCreated = await Account.create({
            name,
            email: email.toLowerCase(),
            password: encryptPw
        })

        const token = jwt.sign({
            email: accountCreated.email
        }, "secretToken", { "expiresIn": "1h" });

        let account = {
            name: accountCreated.name,
            email: accountCreated.email,
            token,
        }
        res.status(201).json(account);
    }
    catch (e) {
        res.status(400).json({ e });
    }
}