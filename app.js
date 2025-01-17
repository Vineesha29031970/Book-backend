const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'http://name.com'],
}));

const bookRoutes = require('./routes/bookRoutes')
app.use('/api/v1/book',bookRoutes);


app.get('/', (req, res) => {
    // res.status(200).json({ message: Hello World });
    res.send("Hello World")
});
app.use('/',(res,req)=>{
    res.send("No routes Matches your request");
})

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});