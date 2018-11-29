const path = require('path');
const { Service } = require('node-windows');

// Create a new service object
var svc = new Service({
  name: 'speed-dial',
  script: path.resolve(__dirname, '../run.js')
});

// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall', function() {
  console.log('Uninstall complete.');
  console.log('The service exists: ', svc.exists);
});

// Uninstall the service.
svc.uninstall();
