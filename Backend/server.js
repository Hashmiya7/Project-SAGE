const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.post('/api/cohere', async (req, res) => {
    const startTime = Date.now();
    console.log(`[${new Date().toISOString()}] Received request to Cohere API...`);
    try {
        const apiKey = process.env.COHERE_API_KEY;
        if (!apiKey) {
            console.error('Missing API key in environment.');
            return res.status(500).json({ error: { message: 'COHERE_API_KEY is not set in the environment variables' } });
        }

        const cohereResponse = await fetch('https://api.cohere.com/v1/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'accept': 'application/json'
            },
            body: JSON.stringify(req.body)
        });

        const data = await cohereResponse.json();
        const duration = ((Date.now() - startTime) / 1000).toFixed(2);

        if (!cohereResponse.ok) {
            console.error(`[${new Date().toISOString()}] Cohere API error (${cohereResponse.status}) in ${duration}s`);
            return res.status(cohereResponse.status).json(data);
        }

        console.log(`[${new Date().toISOString()}] Successfully fetched from Cohere API in ${duration}s`);
        res.json(data);
    } catch (error) {
        console.error('Error proxying to Cohere:', error);
        res.status(500).json({ error: { message: 'Internal Server Error proxying request: ' + error.message } });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Make sure to set COHERE_API_KEY in your .env file.`);
});
