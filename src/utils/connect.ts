import mongoose from 'mongoose'
import config from 'config'
import logger from "./logger";

function connect() {
    const dbUri = config.get<string>('dbUri')

    try {
        mongoose.connect(dbUri)
        logger.info('Connect to db')
    } catch (e) {
        logger.error('Could not connect to db')
        process.exit(1)
    }
}

export default connect
