import { Sequelize } from 'sequelize'
import { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } from './env.js'

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql'
    /*,dialectOptions: {
        socketPath: '/usr/src/app/data/mysql.sock'
    }*/
})

export default db