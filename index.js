require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('🎸 Hello from your Guitar AI Teacher backend!');
});
app.post('/api/analyze', (req, res) => {
    // Eventually, process uploaded audio here!
    res.json({ feedback: "Nice playing! (AI feedback will go here)" });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 