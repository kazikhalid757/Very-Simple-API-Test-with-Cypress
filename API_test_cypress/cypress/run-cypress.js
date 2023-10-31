import { exec } from 'child_process';

const cypressCmd = 'npx cypress run --spec "cypress\e2e\spec.cy.js" --headless';
const outputPath = 'cypress/results.json';

exec(cypressCmd, (error, stdout, stderr) => {
  if (error) {
    console.error('Cypress test run failed:', error);
  } else {
    console.log('Cypress test run successful.');
    exec(`npx newman run ${outputPath} --reporters cli,json,html`);
  }
});
