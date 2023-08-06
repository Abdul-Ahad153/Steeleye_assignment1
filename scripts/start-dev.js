const { spawn } = require('child_process');

const startApp = spawn('npm', ['start']);
const startStorybook = spawn('npm', ['run', 'storybook']);

startApp.stdout.on('data', (data) => {
  console.log(`[APP]: ${data}`);
});

startStorybook.stdout.on('data', (data) => {
  console.log(`[Storybook]: ${data}`);
});

startApp.stderr.on('data', (data) => {
  console.error(`[APP]: ${data}`);
});

startStorybook.stderr.on('data', (data) => {
  console.error(`[Storybook]: ${data}`);
});
