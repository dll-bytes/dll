const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
const TOKEN = '833678201:AAE3ypbn8w1Mt7DV7TyRcZMEKzFR28IbtMQ'

const bot =new TelegramBot(TOKEN, {})
//help
bot.onText(/\/start/, msg => {
  const { id } =msg.chat

  bot.sendMessage(id, debug(msg))
})

bot.onText(/\/help (+)/, (msg, arr) => {
  const { id } =msg.chat

  bot.sendMessage(id, debug(msg))
})
