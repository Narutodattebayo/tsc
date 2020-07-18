import dotenv from 'dotenv'
if (process.env.NODE_ENV == 'local') {

    dotenv.config({ path: process.cwd() + '/bin/.env.local' })
}

export let CONSTANTS = {
    MONGO_URL: <string>process.env.MONGO,
    PORT: process.env.NODE_PORT

}
