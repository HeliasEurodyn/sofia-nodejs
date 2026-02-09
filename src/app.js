require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const sofiaRoutes = require('./routes/sofiaRoutes');
const studentRoutes = require('./routes/studentRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');


const app = express();


if (process.env.NODE_ENV === 'production') {
  // αν είσαι πίσω από nginx / load balancer
  app.set('trust proxy', 1);
}

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/sofia', sofiaRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);

// error handler
app.use((err, req, res, next) => {
  const msg = err?.message;

  if (msg === 'INVALID_CREDENTIALS') return res.status(401).json({ message: 'Invalid credentials' });
  if (msg === 'USER_DISABLED') return res.status(403).json({ message: 'User disabled' });

  if (msg === 'SESSION_MISSING') return res.status(401).json({ message: 'Missing session cookie' });
  if (msg === 'SESSION_INVALID') return res.status(401).json({ message: 'Invalid session' });

  if (msg === 'REFRESH_INVALID') return res.status(401).json({ message: 'Invalid refresh token' });
  if (msg === 'REFRESH_REVOKED') return res.status(401).json({ message: 'Refresh token revoked' });
  if (msg === 'REFRESH_EXPIRED') return res.status(401).json({ message: 'Refresh token expired' });

  console.error(err);
  return res.status(500).json({ message: 'Internal server error' });
});

module.exports = app;

/* LIST DepartmentListRoutes - START */
const DepartmentListRoutes = require('./routes/list/DepartmentListRoutes');
app.use('/api/list/department', DepartmentListRoutes);
/* LIST DepartmentListRoutes - END */
/* FORM DepartmentFormRoutes - START */
const DepartmentFormRoutes = require('./routes/form/DepartmentFormRoutes');
app.use('/api/form/d1896b1c-9599-4ea9-a333-004df7d278bf', DepartmentFormRoutes);
/* FORM DepartmentFormRoutes - END */
/* LIST GraphTemplateListRoutes - START */
const GraphTemplateListRoutes = require('./routes/list/GraphTemplateListRoutes');
app.use('/api/list/graph-template', GraphTemplateListRoutes);
/* LIST GraphTemplateListRoutes - END */
/* FORM GraphTemplateFormRoutes - START */
const GraphTemplateFormRoutes = require('./routes/form/GraphTemplateFormRoutes');
app.use('/api/form/graph-template', GraphTemplateFormRoutes);
/* FORM GraphTemplateFormRoutes - END */