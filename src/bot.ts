import { Telegraf } from 'telegraf'
import { promiseRetryNoArgs } from './utils'

const GROUP_ID = process.env.GROUP_ID as string
const BOT_TOKEN = process.env.GROUP_ID as string

const bot = new Telegraf(BOT_TOKEN)

export const sendMessageToGroup = (message: string): void => {
    promiseRetryNoArgs(() => bot.telegram.sendMessage(GROUP_ID, message)).catch(console.log)
}