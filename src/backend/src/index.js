const express = require('express');
const { Pool } = require('pg');
const app = express();

// PostgreSQL connection config
const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

app.get('/', (req, res) => {
  res.send('Mao Coffee Modee Backend is running!');
});

app.get('/env-check', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

module.exports = { app, pool };
