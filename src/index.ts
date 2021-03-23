import { CronJob } from 'cron'
import { getCount } from "./api"
import { sendMessageToGroup } from "./bot"

const job = new CronJob('*/5 * * * *', () => {
    getCount().then(count => {
        sendMessageToGroup(`There are ${count} members`)
    })
}, null, true)

job.start()