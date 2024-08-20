const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hello! What is your name?\n', (answer) => {
  console.log(`Nice to meet you, ${answer.trim()}!`);
  rl.close();
});

rl.on('close', () => {
  console.log('The program is now exiting. Goodbye!');
});

