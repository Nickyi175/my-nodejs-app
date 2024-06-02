import express from 'express';

const app = express();
const PORT = 4000; // Cambiando el puerto a 4000

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
