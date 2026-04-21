// ============================================================
// server.js — Sentinel+ Main Backend Entry Point
// ============================================================

require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');

// ── Route imports ──
const authRoutes     = require('./routes/auth');
const vitalsRoutes   = require('./routes/vitals');
const alertsRoutes   = require('./routes/alerts');
const symptomsRoutes = require('./routes/symptoms');

const app = express();

// ── Middleware ──
app.use(cors({
  origin: [
    "http://localhost:5173",                 // local frontend
    "https://sentinal.onrender.com"          // deployed frontend (optional)
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // 🔥 IMPORTANT
  credentials: true
}));

app.use(express.json()); // 🔥 VERY IMPORTANT (you were missing this)

// 🔥 Handle preflight requests (fixes your 404 / CORS error)
app.options('*', cors());

// ── Routes ──
app.use('/api/auth',     authRoutes);
app.use('/api/vitals',   vitalsRoutes);
app.use('/api/alerts',   alertsRoutes);
app.use('/api/symptoms', symptomsRoutes);

// ── Health check ──
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Sentinel+ server running',
    timestamp: new Date()
  });
});

// ── Create HTTP server ──
const server = http.createServer(app);

// ── Start server ──
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});