// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Route to calculate distance from origin
app.get('/distance', (req, res) => {
    const x = parseFloat(req.query.x);
    const y = parseFloat(req.query.y);
    const z = parseFloat(req.query.z);

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        return res.status(400).json({ error: 'Invalid input. Please provide numeric x, y, and z.' });
    }

    const distance = Math.sqrt(x * x + y * y + z * z);
    res.json({
        point: { x, y, z },
        distance: distance,
        message: `distance to (${x},${y},${z}) is d = ${distance}`
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
