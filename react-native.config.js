const macSwitch = '--use-react-native-macos';
const winSwitch = '--use-react-native-windows';
const webSwitch = '--use-react-native-web';
const clientSwitch = '--use-react-native-client';

if (process.argv.includes(macSwitch)) {
  process.argv = process.argv.filter(arg => arg !== macSwitch);
  process.argv.push('--config=metro.config.macos.js');
  module.exports = {
    reactNativePath: 'node_modules/react-native-macos',
  };
}
if (process.argv.includes(webSwitch)) {
  process.argv = process.argv.filter(arg => arg !== webSwitch);
  process.argv.push('--config=metro.config.web.js');
  module.exports = {
    reactNativePath: 'node_modules/react-native-web',
  };
}

if (process.argv.includes(clientSwitch)) {
  process.argv = process.argv.filter(arg => arg !== clientSwitch);
  process.argv.push('--config=metro.config.client.js');
  module.exports = {
    reactNativePath: 'node_modules/react-native-web',
  };
}

if (process.argv.includes(winSwitch)) {
    process.argv = process.argv.filter(arg => arg !== winSwitch);
    process.argv.push('--config=metro.config.windows.js');
    module.exports = {
      reactNativePath: 'node_modules/react-native-windows',
    };
    // module.exports = {
    //     reactNativePath: fs.realpathSync(path.resolve(require.resolve('react-native-windows/package.json'), '..')),
    // };
}
