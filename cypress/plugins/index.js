const gmail_tester = require('gmail-tester');

module.exports = (on, config) => {
  on('task', {
    'gmail:get-messages': async (args) => {
      const messages = await gmail_tester.get_messages(
        path.resolve(__dirname, 'credentials.json'), // path to the gmail API credentials JSON file
        path.resolve(__dirname, 'gmail_token.json'), // path to the gmail API token JSON file
        args.options
      );
      return messages;
    },
  });
};
