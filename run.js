let exec = require('child_process').exec;

let child = exec('yarn start');

child.stdout.on('data', function(data) {
  process.stdout.write(data);
});

child.stderr.on('data', function(data) {
  process.stdout.write(data);
});
