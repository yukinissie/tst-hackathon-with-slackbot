// 環境変数を.envファイルからでも用意できるように;
require("dotenv").config();
// App本体
const { App } = require("@slack/bolt");
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});
// HTTPサーバーとして起動
(async () => {
  await app.start(process.env.PORT || 3000);

  console.log("🤖 SlackBot is running!");
})();

// ここから下に何らかの処理を書く。

// 例：helloと送ったらHello, world! @送信者名!と返す
app.message("hello", async ({ message, say }) => {
  await say(`Hello, world! <@${message.user}>!`);
});
