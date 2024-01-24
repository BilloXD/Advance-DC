const BOT = require("./handlers/Client")
const { TOKEN } = require("./settings/config")
const client = new BOT()

module.exports = client
client.start(TOKEN);

