require("dotenv").config()
const Telegraf = require("telegraf")

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start(ctx => ctx.reply("Just send me a message to transform."))
bot.on("text", ctx => {
  let answer = ctx.message.text.toLowerCase()
  for (let i = 0; i < answer.length; i++) {
    if (i % 2 == 1) {
      answer =
        answer.substr(0, i) +
        answer.charAt(i).toUpperCase() +
        answer.substr(i + 1)
    }
  }
  ctx.reply(answer)
})
bot.launch()
