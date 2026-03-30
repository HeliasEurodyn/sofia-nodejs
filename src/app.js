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

//app.use(cors()); 
app.use(cors({
  origin: [
    'http://localhost:5021',
    'http://ng-soc-rita-server.eurodyn.com:5021',
    'http://localhost:4300'
  ],
  credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

//app.use('/api/sofia', sofiaRoutes);
app.use('/api/auth', authRoutes);
//app.use('/api/students', studentRoutes);

const notificationRoutes = require('./routes/NotificationRoutes');
app.use('/api/notification', notificationRoutes);

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

const neo4jRoutes = require('./routes/neo4jRoutes');
app.use('/api/neo4j', neo4jRoutes);

const scenarioRoutes = require('./routes/scenarioRoutes');
app.use('/api/scenario', scenarioRoutes);

const neo4jSettingsRoutes = require('./routes/neo4jSettingsRoutes');
app.use('/api/neo4j-settings', neo4jSettingsRoutes);

const rssRoutes = require('./routes/rssRoutes');
app.use('/api/rss', rssRoutes);

const cpeRoutes = require('./routes/cpeRoutes');
app.use('/api/list/cpe', cpeRoutes);

const cveRoutes = require('./routes/cveRoutes');
app.use('/api/cve', cveRoutes);

const openvasRoutes = require('./routes/openvasRoutes');
app.use('/api/openvas/', openvasRoutes);

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
/* FORM UserSettingsFormRoutes - START */
const UserSettingsFormRoutes = require('./routes/form/UserSettingsFormRoutes');
app.use('/api/form/user-settings', UserSettingsFormRoutes);
/* FORM UserSettingsFormRoutes - END */
/* LIST CpesListRoutes - START */
const CpesListRoutes = require('./routes/list/CpesListRoutes');
app.use('/api/list/cpes', CpesListRoutes);
/* LIST CpesListRoutes - END */

/* LIST TestListRoutes - START */
const TestListRoutes = require('./routes/list/TestListRoutes');
app.use('/api/list/test', TestListRoutes);
/* LIST TestListRoutes - END */
/* LIST CpesSelectorListRoutes - START */
const CpesSelectorListRoutes = require('./routes/list/CpesSelectorListRoutes');
app.use('/api/list/cpes-selector', CpesSelectorListRoutes);
/* LIST CpesSelectorListRoutes - END */
/* LIST DepartmentSelectorListRoutes - START */
const DepartmentSelectorListRoutes = require('./routes/list/DepartmentSelectorListRoutes');
app.use('/api/list/department-selector', DepartmentSelectorListRoutes);
/* LIST DepartmentSelectorListRoutes - END */
/* FORM CpeFormRoutes - START */
const CpeFormRoutes = require('./routes/form/CpeFormRoutes');
app.use('/api/form/cpe', CpeFormRoutes);
/* FORM CpeFormRoutes - END */
/* LIST RelathionshipTypeListRoutes - START */
const RelathionshipTypeListRoutes = require('./routes/list/RelathionshipTypeListRoutes');
app.use('/api/list/relathionship-type', RelathionshipTypeListRoutes);
/* LIST RelathionshipTypeListRoutes - END */
/* FORM RelathionshipTypeFormRoutes - START */
const RelathionshipTypeFormRoutes = require('./routes/form/RelathionshipTypeFormRoutes');
app.use('/api/form/relathionship-type', RelathionshipTypeFormRoutes);
/* FORM RelathionshipTypeFormRoutes - END */
/* LIST RelathionshipTypeSelectorListRoutes - START */
const RelathionshipTypeSelectorListRoutes = require('./routes/list/RelathionshipTypeSelectorListRoutes');
app.use('/api/list/relathionship-type-selector', RelathionshipTypeSelectorListRoutes);
/* LIST RelathionshipTypeSelectorListRoutes - END */
/* LIST CypherQueryTemplateListRoutes - START */
const CypherQueryTemplateListRoutes = require('./routes/list/CypherQueryTemplateListRoutes');
app.use('/api/list/cypher-query-template', CypherQueryTemplateListRoutes);
/* LIST CypherQueryTemplateListRoutes - END */
/* FORM CypherQueryTemplateFormRoutes - START */
const CypherQueryTemplateFormRoutes = require('./routes/form/CypherQueryTemplateFormRoutes');
app.use('/api/form/cypher-query-template', CypherQueryTemplateFormRoutes);
/* FORM CypherQueryTemplateFormRoutes - END */
/* LIST CypherScenarioQueriesListRoutes - START */
const CypherScenarioQueriesListRoutes = require('./routes/list/CypherScenarioQueriesListRoutes');
app.use('/api/list/cypher-query-template', CypherScenarioQueriesListRoutes);
/* LIST CypherScenarioQueriesListRoutes - END */
/* FORM CypherScenarioQueryFormRoutes - START */
const CypherScenarioQueryFormRoutes = require('./routes/form/CypherScenarioQueryFormRoutes');
app.use('/api/form/cypher-scenation-query', CypherScenarioQueryFormRoutes);
/* FORM CypherScenarioQueryFormRoutes - END */

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

/* LIST ScenariosListRoutes - START */
const ScenariosListRoutes = require('./routes/list/ScenariosListRoutes');
app.use('/api/list/scenarios', ScenariosListRoutes);
/* LIST ScenariosListRoutes - END */
/* LIST ScenarioCypherQueriesListRoutes - START */
const ScenarioCypherQueriesListRoutes = require('./routes/list/ScenarioCypherQueriesListRoutes');
app.use('/api/list/cypher-query-template', ScenarioCypherQueriesListRoutes);
/* LIST ScenarioCypherQueriesListRoutes - END */
/* FORM ScenarioCypherQueryFormRoutes - START */
const ScenarioCypherQueryFormRoutes = require('./routes/form/ScenarioCypherQueryFormRoutes');
app.use('/api/form/scenario-cypher-query', ScenarioCypherQueryFormRoutes);
/* FORM ScenarioCypherQueryFormRoutes - END */
/* FORM ScenarioFormRoutes - START */
const ScenarioFormRoutes = require('./routes/form/ScenarioFormRoutes');
app.use('/api/form/Scenario', ScenarioFormRoutes);
/* FORM ScenarioFormRoutes - END */
/* LIST ScenarioCypherQueriesThisListRoutes - START */
const ScenarioCypherQueriesThisListRoutes = require('./routes/list/ScenarioCypherQueriesThisListRoutes');
app.use('/api/list/cypher-query-template', ScenarioCypherQueriesThisListRoutes);
/* LIST ScenarioCypherQueriesThisListRoutes - END */
/* LIST CypherQueryTemplateStaysListRoutes - START */
const CypherQueryTemplateStaysListRoutes = require('./routes/list/CypherQueryTemplateStaysListRoutes');
app.use('/api/list/cypher-query-template', CypherQueryTemplateStaysListRoutes);
/* LIST CypherQueryTemplateStaysListRoutes - END */
/* LIST CypherQueryTemplateSelectorListRoutes - START */
const CypherQueryTemplateSelectorListRoutes = require('./routes/list/CypherQueryTemplateSelectorListRoutes');
app.use('/api/list/cypher-query-template', CypherQueryTemplateSelectorListRoutes);
/* LIST CypherQueryTemplateSelectorListRoutes - END */
/* LIST ScenariosSelectorListRoutes - START */
const ScenariosSelectorListRoutes = require('./routes/list/ScenariosSelectorListRoutes');
app.use('/api/list/scenarios', ScenariosSelectorListRoutes);
/* LIST ScenariosSelectorListRoutes - END */
/* LIST GraphTemplateSelectorListRoutes - START */
const GraphTemplateSelectorListRoutes = require('./routes/list/GraphTemplateSelectorListRoutes');
app.use('/api/list/graph-template', GraphTemplateSelectorListRoutes);
/* LIST GraphTemplateSelectorListRoutes - END */
/* LIST OpenvasReportSelectorListRoutes - START */
const OpenvasReportSelectorListRoutes = require('./routes/list/OpenvasReportSelectorListRoutes');
app.use('/api/list/opevas-report', OpenvasReportSelectorListRoutes);
/* LIST OpenvasReportSelectorListRoutes - END */