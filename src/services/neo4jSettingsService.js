const repository = require('../models/neo4jSettingsModel');

class Neo4jSettingsService {

  async getThemes() {
    return repository.getTemplatesFromDb();
  }

  async getJavaScript() {
    const templates = await repository.getTemplatesFromDb();

    if (!Array.isArray(templates)) {
      throw new Error('Templates not loaded from DB');
    }

    const parts = [
      this.generateFactoryClass(templates),
      ...templates.map(t => this.generateTemplateClass(t)),
    ];

    return parts.join('\n');
  }

  // -------------------------
  // Helpers
  // -------------------------

  safeId(id) {
    // UUID -> valid JS identifier
    return String(id).replace(/-/g, '_');
  }

  decodeBase64(value) {
    if (!value) return '';
    try {
      return Buffer.from(value, 'base64').toString('utf-8');
    } catch {
      return '';
    }
  }

  // -------------------------
  // Factory
  // -------------------------

  generateFactoryClass(templates = []) {

    const cases = templates
      .map(t => `
        case '${t.id}':
          this.instances[id] = new GraphTemplateScript_${this.safeId(t.id)}();
          break;`
      )
      .join('\n');

    const defaultTemplate = templates.find(t => Number(t.is_default) === 1);

    const defaultCase = defaultTemplate
      ? `
        case 0:
          this.instances[id] = new GraphTemplateScript_${this.safeId(defaultTemplate.id)}();
          break;`
      : '';

    return `
class GraphTemplateScriptFactory {
  static instances = {};

  static getInstance(id) {
    if (!this.instances[id]) {
      switch (id) {
        ${cases}
        ${defaultCase}
        default:
          throw new Error(\`Unsupported template id: \${id}\`);
      }
    }
    return this.instances[id];
  }
}

window.GraphTemplateScriptFactory = GraphTemplateScriptFactory;
`;
  }

  // -------------------------
  // Template Class
  // -------------------------

  generateTemplateClass(template) {

    const className = `GraphTemplateScript_${this.safeId(template.id)}`;

    const nodeHtml = this.decodeBase64(template.node_html_label);
    const elementStyle = this.decodeBase64(template.elements_style);

    return `
class ${className} {

  constructor() {}

  ${nodeHtml}

  ${elementStyle}
}
`;
  }
}

module.exports = new Neo4jSettingsService();
