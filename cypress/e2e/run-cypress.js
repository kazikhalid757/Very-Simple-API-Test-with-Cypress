const { exec } = require('child_process');

const cypressCmd = 'npx cypress run --spec "cypress/integration/spec.cy.js" --headless';
const outputPath = 'cypress/results.json';

exec(cypressCmd, (error, stdout, stderr) => {
  if (error) {
    console.error('Cypress test run failed:', error);
  } else {
    console.log('Cypress test run successful.');
  }
});
