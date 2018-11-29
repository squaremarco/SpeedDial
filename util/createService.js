const path = require('path');
const { Service } = require('node-windows');

let svc = new Service({
  name: 'speed-dial',
  description: 'Speed Dial service.',
  script: path.resolve(__dirname, '../run.js')
});

svc.on('install', function() {
  svc.start();
});

svc.install();
