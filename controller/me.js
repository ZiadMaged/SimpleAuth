

module.exports = (req, res) => {
    try {
       res.status(200).json(req.userId)
    }
    catch (e) {
        res.status(400).json({ e });
    }

}