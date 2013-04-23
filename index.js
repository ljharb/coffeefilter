/**
 * Deps.
 */

var fs = require('fs');

/**
 * Cleanses your application.
 */

var originalJSRequire = require.extensions['.js'];

require.extensions['.js'] = function(module, filename){
  var contents = fs.readFileSync(filename, 'utf8');
  if (~contents.indexOf('Generated by CoffeeScript')) {
    console.log('COFFEESCRIPT FILTERED: %s', filename);
    process.kill(process.pid, 'SIGSEGV');
  } else {
    return originalJSRequire(module, filename);
  }
};
