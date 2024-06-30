const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const hrefs = {};

      on('task', {
        setHref(value) {
          hrefs['href'] = value;
          return null;
        },
        getHref() {
          return hrefs['href'] || null;
        }
      });

      return config;
    }
  }
});
