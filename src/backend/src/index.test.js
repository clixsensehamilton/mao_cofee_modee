const request = require('supertest');
const express = require('express');
const index = require('./index');

describe('Backend index.js', () => {
  const { app, pool } = require('./index');

  it('should respond to GET / with status 200 and correct message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Mao Coffee Modee Backend is running!');
  });

  it('should respond to GET /env-check with status 200 and {status: "ok"} when DB is healthy', async () => {
    // Mock pool.query to simulate healthy DB
    pool.query = jest.fn().mockResolvedValue({});
    const res = await request(app).get('/env-check');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('should respond to GET /env-check with status 500 and error message when DB fails', async () => {
    pool.query = jest.fn().mockRejectedValue(new Error('DB error'));
    const res = await request(app).get('/env-check');
    expect(res.statusCode).toBe(500);
    expect(res.body.status).toBe('error');
    expect(res.body.message).toContain('DB error');
  });
});
