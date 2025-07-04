// server.js
const express = require('express');
const fetch = require('node-fetch'); // For Node <18. For Node 18+, native fetch works.
const app = express();
const PORT = 3000;

app.get('/meals', async (req, res) => {
    const ingredient = req.query.ingredient || 'chicken_breast'; // default ingredient

    try {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // If MealDB returns null, normalize to empty array for consistency
        res.json({
            ingredient,
            meals: data.meals || []
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch meals from API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
