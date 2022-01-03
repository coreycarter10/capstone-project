const bcrypt = require('bcryptjs');

const users = [];

const bookings = [];

const plans = [
    {
        id: 1,
        text: "Month to month"
    },
    {
        id: 2,
        text: "Six month membership"
    },
    {
        id: 3,
        text: "Twelve month membership"
    }
]

module.exports = {
    getPlans: async (req, res) => {
        res.status(200).send(plans);
    },

    createAccount: async (req, res) => {
        
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
        
        if (!user) return res.status(401).send('Invalid email or password');

        const validPassword = bcrypt.compareSync(password, user.passwordHash);

        if (!validPassword) return res.status(401).send('Invalid email or password');

        res.status(200).send(user.email);
    },

    bookSession: async (req, res) => {
        const {day, time} = req.body;

        const [booking] = bookings.filter(element => element === `${day, time}`);

        if (booking) return res.status(200).send('Session not available');

        bookings.push(`${day, time}`);

        res.status(200).send('Session booked');
    }
}