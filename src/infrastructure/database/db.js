import { Sequelize } from "sequelize";

const db = new Sequelize({
    'dialect': 'mysql',
    'host': '127.0.0.1',
    'port': 3306,
    'username': 'root',
    'password': 'secret',
    'database': 'notify',
});

export default db;