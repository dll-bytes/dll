const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
const TOKEN = '833678201:AAE3ypbn8w1Mt7DV7TyRcZMEKzFR28IbtMQ'
console log ('bot has been started ..')

const bot =new TelegramBot(TOKEN, {})
//help
bot.onText(/\/start/, msg => {
  const { id } =msg.chat

  bot.sendMessage(id, debug(msg))
})

bot.onText(/\/help (+)/, (msg, [source, match]) => {
  const { id } =msg.chat

  bot.sendMessage(id, debug(msg))
  bot.on('massage', msg =>{
}
 const html  =
 <strong> bug, ${msg.from.first_name} </strong>
 <pre>
  ${debug(msg)}
  </pre>


  bot.sendMessage(msg.chat.id, 'Message')

})
