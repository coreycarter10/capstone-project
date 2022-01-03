const bcrypt = require('bcryptjs');

const users = [];

module.exports = {
    createAccount: async (req, res) => {
        console.log('hello')
        const {firstName, lastName, email, phoneNumber, password} = req.body;
    
        let salt = bcrypt.genSaltSync(10);

        let passwordHash = await bcrypt.hash(password, salt);

        let user = {
            firstName,
            lastName,
            email,
            phoneNumber,
            passwordHash,
        }

        users.push(user);

        res.status(200).send(user.email)
    },

    userLogin: async (req, res) => {
        const {email, password} = req.body;

        const [user] = users.filter(element => element.email === email);
        console.log(user)
        if (!user) return res.status(401).send('User does not exist');

        const validPassword = bcrypt.compare(password, user.passwordHash);

        if (!validPassword) return res.status(401).send('Invalid password');

        res.status(200).send(user.email);
    }
}