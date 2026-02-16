const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL connection config
const pool = new Pool({
  host: process.env.PG_HOST || 'localhost',
  port: process.env.PG_PORT || 5432,
  user: process.env.PG_USER || 'postgres',
  password: process.env.PG_PASSWORD || 'postgres',
  database: process.env.PG_DATABASE || 'postgres',
});

app.get('/env-check', async (req, res) => {
  try {
    // Simple DB query to verify connection
    await pool.query('SELECT 1');
    res.send('Environment OK');
  } catch (err) {
    res.status(500).send('Environment NOT OK: ' + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
