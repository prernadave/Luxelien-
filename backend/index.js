const express = require('express');
const pool = require('./config');
const router = require('./Routes/MasterRoutes');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(cors());


app.get('/', async (req, res) => {
    res.json('Welcome')
})

app.use('/apis', router)



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
