const express = require('express');
const cors = require('cors')

const app = express();

const ctrl = require('./controller.js')

app.use(cors())
app.use(express.json())

// app.get('/api/home/', (req, res) => {
//     res.status(200).send('working')
// })

app.post('/api/signup/', ctrl.createAccount);
app.post('/api/login/', ctrl.userLogin);

app.listen(4545, () => console.log('App is now running on port 4545'))