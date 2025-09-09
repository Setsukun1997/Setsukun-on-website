const express = require ('express')
const cors = require('cors');
const app = express ();
app.use(cors());
app.use(express.json());
app.get('/api/data' , (rea, res) => {
    res.json({ message: 'hello form sever!'}):
});
app.post('api/data' ,(req, res) => {
    const { name } = req.body;
    res.json({ message: Hello, ${name}!' });
'})
app.listen(3000, () => {
    console.log('server runninng on http://localhost:3000');
});
node [ServiceWorker.js](http://_vscodecontentref_/1)
    

